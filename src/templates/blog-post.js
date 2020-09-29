import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

class BlogPost extends Component {
  render() {
    const { title, content } = this.props.data.contentfulPost

    return (
      <>
        <h1>{title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }}
        />
      </>
    )
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
