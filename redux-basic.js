const redux = require("redux")
const createStore = redux.createStore;

const initialState = {
  counter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
  console.log(`ACTION dipanggil (dispatch [${action.type}])`);
  return state;
}

// Store
const store = createStore(rootReducer)
console.log(store.getState());

// Action (Dispatching Action)
store.dispatch({
  type: "INCREMENT_COUNTER"
})
console.log(store.getState());
