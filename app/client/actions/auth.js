import actionTypeBuilder from './actionTypeBuilder';

export const LOGGING_IN = actionTypeBuilder.type('LOGGING_IN')
export const USER = actionTypeBuilder.type('USER')

export function loadUser() {
  return dispatch => {
    dispatch({
      type: LOGGING_IN,
      meteor: {
        get: () => Meteor.loggingIn()
      }
    });

    dispatch({
      type: USER,
      meteor: {
        subscribe: () => Meteor.subscribe('userData'),
        get: () => Meteor.user()
      }
    });
  }
}

export function loginWithPassword(email, password) {
  return dispatch => {
    Meteor.loginWithPassword(email, password, err => {
      if (err) {
        console.log(err);
      }
    });
  };
}
