import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"

const BlogPost = ({ node }) => {
  return (
    <li>
      <Link to={node.slug}>{node.title}</Link>
      <img src={node.featureImage.responsiveResolution.src} />
      <div>{node.content.childMarkdownRemark.excerpt}</div>
    </li>
  )
}

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <ul>
        {data.allContentfulPost.edges.map(edge => (
          <BlogPost node={edge.node} />
        ))}
      </ul>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulPost(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          slug
          content {
            childMarkdownRemark {
              excerpt
            }
          }
          featureImage {
            responsiveResolution(width: 300, height: 300) {
              src
            }
          }
        }
      }
    }
  }
`
