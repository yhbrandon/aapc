import * as type from '../constants/ActionTypes'

export function setTitle(title) {
  return {
    type: type.SET_TITLE,
    title
  }
}
