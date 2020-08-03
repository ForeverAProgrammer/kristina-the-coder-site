import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import BlogPreview from '../components/blog-preview'
import SiteBanner from '../components/site-banner'

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [siteBanner] = get(this, 'props.data.allContentfulBanner.edges')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title="Kristina Codes" />
          <SiteBanner  data = {siteBanner.node}/>
          <div className="wrapper">
            <h2 className="section-headline">Recent posts</h2>
            <ul className="post-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <BlogPreview post={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBanner(limit: 1) {
      edges {
        node {
          id
          siteTitle
          siteSubTitle
          banner {
            fluid(resizingBehavior: FILL) {
              ...GatsbyContentfulFluid_tracedSVG
            }
            title
          }
        }
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }, limit: 3) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
