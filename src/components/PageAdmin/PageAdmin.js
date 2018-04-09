import { autobind } from 'core-decorators';
import React, { Component } from 'react';
import { Dialog, FlatButton} from 'material-ui';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import { ACTIONS, COUNTRIES, USERS } from 'constants/props';
import { keyIndex } from 'helpers';
import api from 'api';

import './PageAdmin.css';

class PageAdmin extends Component {

  static propTypes = {
    countries: COUNTRIES,
    users: USERS,
    usersActions: ACTIONS.isRequired,
  }

  static defaultPropTypes = {
    countries: [],
    users: [],
  }

  state = {
    selectedUser: {},
    dialogOpen: false,
  };

  componentDidMount() {
    const { usersActions } = this.props;

    usersActions.fetchUsers();
    api.actions.save({msg: `Admin Page`});
  }

  @autobind
  handleOpen(selectedUser){
    this.setState(prevState => ({
        ...prevState,
        selectedUser,
        dialogOpen: true,
      })
    );
  };

  @autobind
  handleClose(){
    this.setState(prevState => ({
        ...prevState,
        selectedUser: {},
        dialogOpen: false
      })
    );
  };

  render() {
    const {
      countries,
      users
    } = this.props;

    const {
      dialogOpen,
      selectedUser,
    } = this.state;

    const {
      city,
      email,
      address,
      phone,
      postalCode,
      countryId,
      comments
    } = selectedUser;

    const dialogData = [
      {
        label: 'Email:',
        value: email
      },
      {
        label: 'City:',
        value: city
      },
      {
        label: 'Address:',
        value: address
      },
      {
        label: 'Phone:',
        value: phone
      },
      {
        label: 'Country:',
        value: countryId ? countries.find(({code}) => code === countryId).name : {}
      },
      {
        label: 'Postal Code:',
        value: postalCode
      },
      {
        label: 'Comments:',
        value: comments
      }
    ]

    const tableRows = users.map(user => (
        <TableRow
          key={user.id}
          onMouseDown={() => {
              this.handleOpen(user)
            }
          }
        >
          <TableRowColumn
            title={`${user.firstName} ${user.lastName}`}
          >
            {`${user.firstName} ${user.lastName}`}
          </TableRowColumn>

          <TableRowColumn
            title={user.email}
          >
            {user.email}
          </TableRowColumn>

          <TableRowColumn
            title={user.city}
          >
            {user.city}
          </TableRowColumn>

        </TableRow>
    ));

    const dialogActions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

    const dialogChildrens = keyIndex(dialogData).map(({ label, value, id }) => (
        <div
          className='dialog-item-container'
          key={id}
        >
          <span
            className='dialog-item-title'
            title={label}
          >
            {label}
          </span>
          <span
            className='dialog-item-value'
            title={value}
          >
            {value}
          </span>
        </div>
      )
    );

    return (
      <div className="page admin">
        <h3 className='admin-title'>Registered Users</h3>
        <div className='table-container'>
          <Table
            selectable={false}
            fixedFooter
          >
            <TableHeader
              displaySelectAll={false}
              adjustForCheckbox={false}
            >
              <TableRow>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Email</TableHeaderColumn>
                <TableHeaderColumn>City</TableHeaderColumn>
              </TableRow>
            </TableHeader>

            <TableBody
              displayRowCheckbox={false}
              showRowHover
            >
              {tableRows}
            </TableBody>
          </Table>
        </div>


        <Dialog
          title={`${this.state.selectedUser.firstName} ${this.state.selectedUser.lastName}`}
          actions={dialogActions}
          modal={false}
          open={dialogOpen}
          onRequestClose={this.handleClose}
          autoDetectWindowHeight
        >
          {dialogChildrens}
        </Dialog>
      </div>
    );
  }
}

export default PageAdmin;
