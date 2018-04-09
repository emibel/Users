import React, { Fragment } from 'react';
import { FlatButton } from'material-ui';
import { Link } from 'react-router-dom';

import { MENU_ITEMS } from 'constants/props';

const Menu = (props) => {
  const { links } = props;

  return (
    <Fragment>
      {
        links.map(({label, url}) => (
          <Link
            href={url}
            key={label}
            to={url}
          >
            <FlatButton
              hoverColor="none"
              label={label}
              primary
              rippleColor="none"
            />
          </Link>
        ))
      }
    </Fragment>
  );
};

Menu.propTypes = {
  links: MENU_ITEMS
};

Menu.defaultProps = {
  links: []
}

export default Menu;
