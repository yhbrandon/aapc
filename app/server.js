import registerAuth from './server/auth/auth'
import registerPosts from './server/posts/posts'

import registerAuthPublications from './server/publications/auth'
import registerPostPublications from './server/publications/posts'

import createAuthServiceConfigurationFactory from './server/methods/createAuthServiceConfiguration'

import { Posts } from './collections/posts'

registerAuth(Meteor.users)
registerPosts(Posts)

Meteor.startup(() => {
  //Lets put in some code here for users
});
