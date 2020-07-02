import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import RollPost from './RollPost'

class BlogRollFull extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const { includeFeatured } = this.props

    return (
      <div className="columns is-multiline m-b-10">
        {posts &&
          posts.map(({ node: post }) => {
            if (
                (includeFeatured) || 
                (!includeFeatured && !post.frontmatter.featuredpost)  
              ) {
              return (
                <RollPost post={post} key={post.id}/>
              )
            } else {
              return null
            }
          })}
      </div>
    )
  }
}

BlogRollFull.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
  includeFeatured: PropTypes.bool,
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query BlogRollFullQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "DD MMMM, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 340, quality: 90) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRollFull includeFeatured={props.includeFeatured} data={data} count={count} />}
  />
)
