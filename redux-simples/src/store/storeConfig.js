import { createStore, combineReducers } from "redux"

const reducers = combineReducers({
  numeros: function(state, action) {
    console.log(state, " ", action);
    return {
      min: 31,
      max: 140
    }
  },
  nomes: function(state, action) {
    console.log(state, " ", action);
    return [
      'Ana',
      'Bia',
      'Carlos'
    ]
  }
})

function storeConfig() {
  return createStore(reducers)
}

export default storeConfig