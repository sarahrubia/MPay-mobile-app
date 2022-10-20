import { INCREMENT_VALUE, DECREMENT_VALUE } from './actions';

const initialState = {
  value: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_VALUE:
      return { value: state.value + 1 };
    case DECREMENT_VALUE:
      return { value: state.value - 1 };
    default:
      return state;
  }
}

export default counterReducer;
