import '../styles/components/blog.scss'
import React, { Component, PropTypes } from 'react'
import Divider from 'material-ui/lib/divider'
import GridList from 'material-ui/lib/grid-list/grid-list'
import GridTile from 'material-ui/lib/grid-list/grid-tile'

const styles = {
  item: {
    boxShadow: '0 1px 6px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.12)',
    backgroundColor: '#FFFFFF'
  }
}

class Blog extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { title } = this.props

    return (
      <section id="blog" className="container flex-column">
        <h1>{title}</h1>
        <Divider />
        <GridList padding={16}>
          <GridTile key="test"
            title="Blog Title"
            titlePosition="top"
            cols={1}
            rows={1}
            style={styles.item}
          >
            <img src="http://loremflickr.com/320/240/dog?random=1" />
          </GridTile>
          <GridTile key="test1"
            title="Blog Title"
            titlePosition="top"
            cols={1}
            rows={1}
            style={styles.item}
          >
            <img src="http://loremflickr.com/320/240/dog?random=2" />
          </GridTile>
          <GridTile key="test2"
            title="Blog Title"
            titlePosition="top"
            cols={2}
            rows={1}
            style={styles.item}
          >
            <img src="http://loremflickr.com/320/240/dog?random=3" />
          </GridTile>
        </GridList>
      </section>
    )
  }
}

Blog.propTypes = {
  title: PropTypes.string.isRequired
}

export default Blog
