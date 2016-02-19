import { RECEIVE_ROOMS } from '../constants/ActionTypes'

export default function getRooms(state = [], action) {
  switch (action.type) {
    case RECEIVE_ROOMS:
      return action.rooms
    default:
      return state
  }
}
