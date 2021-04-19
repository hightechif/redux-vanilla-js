const redux = require("redux")
const createStore = redux.createStore;

const initialState = {
  counter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
  console.log(`ACTION dipanggil (dispatch [${action.type}])`);
  
  if (action.type === "INCREMENT_COUNTER") {
    const newState = {
      ...state,
      counter: state.counter + 1
    }
    return newState
  }

  if (action.type === "ADDING_COUNTER") {
    const newState = {
      ...state,
      counter: state.counter + action.payload.value
    }
    return newState
  }

  return state;
}

// Store
const store = createStore(rootReducer)
console.log(store.getState());

// Action (Dispatching Action)
store.dispatch({              // Setiap ada dispatch maka reducer pasti dijalankan
  type: "INCREMENT_COUNTER"
})

store.dispatch({
  type: "ADDING_COUNTER",
  payload: {
    value: 5
  }
})

console.log(store.getState());
