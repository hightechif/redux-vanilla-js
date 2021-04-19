const redux = require("redux")
const createStore = redux.createStore;

const initialState = {
  counter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
  console.log(`ACTION dipanggil (dispatch [${action.type}])`);
  
  // Cara 1
  // if (action.type === "INCREMENT_COUNTER") {
  //   const newState = {
  //     ...state,
  //     counter: state.counter + 1
  //   }
  //   return newState
  // }

  // if (action.type === "ADDING_COUNTER") {
  //   const newState = {
  //     ...state,
  //     counter: state.counter + action.payload.value
  //   }
  //   return newState
  // }

  // return state;

  // Cara 2
  let newState ;
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      newState = {
        ...state,
        counter: state.counter + 1
      }
      return newState
    case 'ADDING_COUNTER':
      newState = {
        ...state,
        counter: state.counter + action.payload.value
      }
      return newState
    default:
      return state;
  }
}

// Store
const store = createStore(rootReducer)
console.log(store.getState());

// Subscription
store.subscribe(() => {
  console.log("[Subscription] ke-trigger", store.getState());
})

// Action (Dispatching Action)
store.dispatch({              // Setiap ada dispatch maka reducer pasti dijalankan
  type: "INCREMENT_COUNTER"
})

store.dispatch({
  type: "ADDING_COUNTER",
  payload: {
    value: 10
  }
})

console.log(store.getState());
