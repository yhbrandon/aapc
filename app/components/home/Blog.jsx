import React, { Component, PropTypes } from 'react'
import moment from 'moment'
import Colors from 'material-ui/lib/styles/colors'
import Content from '../app/Content'
import Card from 'material-ui/lib/card/card'
import CardActions from 'material-ui/lib/card/card-actions'
import CardHeader from 'material-ui/lib/card/card-header'
import CardMedia from 'material-ui/lib/card/card-media'
import CardTitle from 'material-ui/lib/card/card-title'
import CardText from 'material-ui/lib/card/card-text'
import FlatButton from 'material-ui/lib/flat-button'
import Styles from '../../constants/Styles'

function getStyles() {
  return {
    root: {
      padding: '48px 0 86px'
    },
    header: {
      color: 'rgba(0, 0, 0, 0.54)',
      fontWeight: 300,
      marginBottom: 32,
      width: '100%',
      textAlign: 'center'
    },
    post: {
      flex: '0 0 auto',
      padding: '8px',
      flexBasis: '33.33%',
      boxSizing: 'border-box'
    },
    postHeader: {
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
      display: 'flex',
      alignItems: 'center',
      height: 64
    },
    postText: {
      height: 75,
      maxHeight: 75,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      wordWrap: 'none'
    },
    postImage: {
      maxHeight: 155,
      overflow: 'hidden'
    },
    title: {
      fontSize: 16
    }
  }
}

class BlogPreview extends Component {

  constructor (props) {
    super(props)
  }

  onPostClick(id) {
    console.log(id)
  }

  render() {
    const { posts, visible } = this.props
    const styles = getStyles()

    const items = []

    if (posts.length > 0) {
      posts.forEach((post) => {
        let image = post.banner ? <CardMedia style={ styles.postImage }><img src={ post.banner }  /></CardMedia> : null

        items.push(
          <div style={ styles.post } key={ post.title }>
            <Card>
              {image}
              <CardTitle title={ post.title } subtitle={ moment(post.date).format("MMM Do YYYY") } titleStyle={ styles.title }/>
              <CardText style={ styles.postText } dangerouslySetInnerHTML={{__html: post.content}}></CardText>
              <CardActions>
                <FlatButton label="Read More" primary={true} onClick={ this.onPostClick(post.id) } />
              </CardActions>
            </Card>
          </div>
        )
      }, this)
    }

    return (
      <Content layout="column" style={ Object.assign(styles.root, Styles.container) }>
        <h3 style={ styles.header }>From the blog</h3>
        <br/>
        <Content layout="row" wrap={true} align="stretch" margin="-8px">
          { items }
        </Content>
      </Content>
    )
  }
}

BlogPreview.propTypes = {
  posts: PropTypes.array.isRequired,
  visible: PropTypes.number
}


export default BlogPreview
