import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class DocRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline m-b-10">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-6" key={post.id}>
              <Link to={post.fields.slug} className="no-decoration">
                <article
                  className={`blog-list-item tile is-child notification box ${
                    post.frontmatter.featuredpost ? 'is-featured' : ''
                  }`}
                >
                  <div>
                    <p className="post-meta m-t-10">
                      <span className="title has-text-primary is-size-4 is-underlined">
                        {post.frontmatter.title}
                      </span>
                      <span></span>
                      <span className="subtitle is-size-5 is-block">
                        {post.frontmatter.date}
                      </span>
                    </p>
                  </div>
                </article>
              </Link>
            </div>
          ))}
      </div>
    )
  }
}

DocRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query DocRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "doc" } } }
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
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <DocRoll data={data} count={count} />}
  />
)
