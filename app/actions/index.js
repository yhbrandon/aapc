import rooms from '../api/rooms'
import * as types from '../constants/ActionTypes'

function receiveRooms(rooms) {
  return {
    type: types.RECEIVE_ROOMS,
    rooms: rooms
  }
}

export function getAllRooms() {
  return dispatch => {
    rooms.getRooms(rooms => {
      dispatch(receiveRooms(rooms))
    })
  }
}
