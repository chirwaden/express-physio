import { LIST_USERS, ERROR_RESPONSE } from '../actions/types';

const INITIAL_STATE = { profile: {}, message: '', error: '' };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LIST_USERS:
      return { ...state, profile: action.payload.users };
    case ERROR_RESPONSE:
      return { ...state, error: action.payload };
  }

  return state;
}