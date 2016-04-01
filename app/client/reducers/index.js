import { TEST } from '../constants/ActionTypes'

export default function getTest(state = [], action) {
  switch (action.type) {
    case TEST:
      return action.name
    default:
      return state
  }
}
