import _rooms from './rooms.json'

const TIMEOUT = 200

export default {
  getRooms(cb, timeout) {
    setTimeout(() => cb(_rooms, timeout || TIMEOUT))
  }
}
