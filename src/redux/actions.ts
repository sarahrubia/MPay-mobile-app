export const INCREMENT_VALUE = 'INCREMENT_VALUE';

export const DECREMENT_VALUE = 'DECREMENT_VALUE';

export const increment = value => dispatch => {
  dispatch({
    type: INCREMENT_VALUE,
    payload: value,
  });
};

export const decrement = value => dispatch => {
  dispatch({
    type: DECREMENT_VALUE,
    payload: value,
  });
};
