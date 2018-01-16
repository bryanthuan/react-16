import { users } from './reducer';

function ascendingSort(user1, user2) {
  const name1 = user1.name ? user1.name.toUpperCase() : '~';
  const name2 = user2.name ? user2.name.toUpperCase() : '~';
  return name1 > name2 ? 1 : name1 === name2 ? 0 : -1;
}

const userActions = {
  ADD_USER: 'ADD_USER',
  EDIT_USER: 'EDIT_USER',
  DELETE__USER: 'DELETE__USER',
  CHANGE_USER: 'CHANGE_USER',
  EDIT_VIEW: 'EDIT_VIEW',
  changeUser: (id) => ({
    type: userActions.CHANGE_USER,
    id,
  }),
  addUser: () => {
    const newUser = {
      id: new Date(),
      firstName: '',
      avatar: users[new Date() % 10].avatar,
      LastName: '',
      mobile: '',
      home: '',
      name: '',
      company: '',
      work: '',
      note: '',
    };
    return (dispatch, getState) => {
      dispatch({
        type: userActions.ADD_USER,
        users: [...getState().Users.get('users'), newUser],
        selectedId: newUser.id,
      });
    };
  },
  editUser: (newUser) => {
    return (dispatch, getState) => {
      const users = getState().Users.get('users');
      const newUsers = [];
      users.forEach(user => {
        if (user.id === newUser.id) {
          newUsers.push(newUser);
        } else {
          newUsers.push(user);
        }
      });
      dispatch({
        type: userActions.EDIT_USER,
        users: newUsers.sort(ascendingSort),
      });
    }
  },
  deleteUser: (id) => {
    return (dispatch, getState) => {
      const users = getState().Users.get('users');
      const seectedId = getState().Users.get('seectedId');
      const newUsers = [];
      users.forEach(user => {
        if (user.id === id) {
        } else {
          newUsers.push(user);
        }
      });
      dispatch({
        type: userActions.DELETE__USER,
        users: newUsers,
        seectedId: id === seectedId ? undefined : seectedId,
      });
    };
  },
  viewChange: (view) => ({
    type: userActions.EDIT_VIEW,
    view,
  }),
};
export default userActions;