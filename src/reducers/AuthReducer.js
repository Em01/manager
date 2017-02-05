import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: ''};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
    console.log('ec')
     return {...state, email: action.payload};
    default:
    console.log('def')
      return state;
  }
}
