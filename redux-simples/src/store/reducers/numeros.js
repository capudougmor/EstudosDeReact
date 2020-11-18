import { NUM_MAX_ALTERADO, NUM_MIN_ALTERADO } from './actionsTypes'

const initialState = {
    min: 0,
    max: 10
}

export default function(state = initialState, action) {
  switch(action.type) {
    case NUM_MIN_ALTERADO: 
      return {
        ...state,
        min: action.payload
      }
    case NUM_MAX_ALTERADO: 
      return {
        ...state,
        max: action.payload
      }
    default: 
      return state
  }
}