import registerAuth from './server/auth/auth'
import registerAuthPublications from './server/publications/auth'
import createAuthServiceConfigurationFactory from './server/methods/createAuthServiceConfiguration'

registerAuth(Meteor.users)

Meteor.startup(() => {
  //Lets put in some code here for users
});
