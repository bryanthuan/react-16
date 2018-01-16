import { Map } from "immutable";
import fakeData from "../../containers/Users/fakeData";
import userActions from "./actions";

const users = new fakeData(10).getAll();

const initState = new Map({
  users,
  seectedId: users[0].id,
  editView: false
});

export default function userReducer(state = initState, action) {
  switch (action.type) {
    case userActions.CHANGE_USER:
      return state.set("seectedId", action.id).set("editView", false);
    case userActions.ADD_USER:
      return state
        .set("users", action.users)
        .set("seectedId", action.selectedId)
        .set("editView", true);
    case userActions.EDIT_USER:
      return state.set("users", action.users);
    case userActions.DELETE__USER:
      return state
        .set("users", action.users)
        .set("seectedId", action.seectedId);
    case userActions.EDIT_VIEW:
      return state.set("editView", action.view);
    default:
      return state;
  }
}

export { users };
