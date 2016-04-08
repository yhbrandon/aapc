export default function(postCollection) {
  postCollection.allow({
    insert: (userId, doc) => userId === doc.userId,
    update: (userId, doc, fieldNames) => userId === doc.userId && !fieldNames.some(field => field === 'userId'),
    remove: (userId, doc) => userId === doc.userId,
  });
}
