const initialState = [];

export default function collections(state = initialState, action) {
  const results = action.body ? action.body.results : {};

  const newState = {
  	...state,
  	...results
  }

  return newState;
}
