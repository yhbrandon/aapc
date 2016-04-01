import * as types from '../constants/ActionTypes'

export function addTest(test) {
  return {
    type: types.TEST,
    test
  }
}
