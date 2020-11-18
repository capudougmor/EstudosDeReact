import { NUM_MAX_ALTERADO, NUM_MIN_ALTERADO } from './actionsTypes'

export function alterarNumeroMin(novoNum) {
  return {
    type: NUM_MIN_ALTERADO,
    payload: novoNum
  }
}

export function alterarNumeroMax(novoNum) {
  return {
    type: NUM_MAX_ALTERADO,
    payload: novoNum
  }
}