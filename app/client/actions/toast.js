import actionTypeBuilder from './actionTypeBuilder'

export const NEW_TOAST = actionTypeBuilder.type('NEW_TOAST')

export function newToast(message, error) {
  return {
    type: NEW_TOAST,
    message,
    error
  }
}
