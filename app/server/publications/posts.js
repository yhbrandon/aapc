export default function(postCollection, blogAccess) {
  Meteor.publish('PostSchema', function publishPosts(userId) {
    if (userId && userId !== this.userId && !blogAccess(this.userId, userId)) {
      return this.error(new Meteor.Error(401, 'Unauthorized'))
    }

    return postCollection.getAll()
  });
}
