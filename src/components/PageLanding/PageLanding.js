import React, { Component } from 'react';

import { LOGIN, FORM, ADMIN } from 'constants/urls';
// import Menu from 'components/Menu';

import './PageLanding.css';

class PageLanding extends Component {

  // constructor(props) {
  //   super(props);
  //   // if (this.props.currentSession) {
  //   //   props.history.push(ADMIN);
  //   // }
  // }

  render() {
    const { currentSession } = this.props;

    const links = []

    if(!currentSession) {
      links.push({
        label: 'Login',
        url: LOGIN,
      })
    }

    links.push(
      {
        label: 'Form',
        url: FORM
      },
    );

    // links.push(
    //   {
    //     label: 'Home',
    //     url: LANDING
    //   },
    // );

    if(currentSession) {
      links.push({
        label: 'Admin',
        url: ADMIN
      })
    }


    return (
      <div className="page">
        { !currentSession && <h3>Page Landing</h3>}
        {
          currentSession &&
          <h3>Welcome {currentSession.firstName}</h3>
        }
        {/* <Menu links={links} /> */}
      </div>
    );
  }
}

export default PageLanding;
