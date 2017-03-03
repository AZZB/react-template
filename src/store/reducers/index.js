import { SET_USER } from '../actions/user';

export default function(state = {}, action) {
  if(action.type === SET_USER) {
    return {name: action.payload};
  }
  return state;
}
