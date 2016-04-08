import lodash from 'lodash'
import getAll from './posts/getAll'

export const PostSchema = new SimpleSchema({
  name: {
    type: String,
    max: 50
  },
  title: {
    type: String
  },
  content: {
    type: String
  },
  date: {
    type: Date
  }
})

export const Posts = new Mongo.Collection('posts')

Posts.attachSchema(PostSchema)

Posts.getAll = getAll();