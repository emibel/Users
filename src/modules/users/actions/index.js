import * as fetchUsers from './fetchUsers';
import * as fetchSaveUser from './fetchSaveUser';

export default {
  ...fetchUsers,
  ...fetchSaveUser
}
