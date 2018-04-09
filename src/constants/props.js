import PropTypes from 'prop-types';

export const ACTIONS = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.object,
]);

export const CURRENT_SESSION = PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
});

export const SESSION = PropTypes.shape({
  currentSession: CURRENT_SESSION,
  error: PropTypes.string,
});

export const MENU_ITEM = PropTypes.shape({
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});

export const MENU_ITEMS = PropTypes.arrayOf(MENU_ITEM);

export const COUNTRY = PropTypes.shape({
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
});

export const COUNTRIES = PropTypes.arrayOf(COUNTRY);

export const USER = PropTypes.shape({
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string,
  countryId: PropTypes.string.isRequired,
  comments: PropTypes.string,
  postalCode: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
})

export const USERS = PropTypes.arrayOf(USER);
