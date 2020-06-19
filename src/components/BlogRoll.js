import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
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
                <div className="is-parent column is-6" key={post.id}>
                  <article
                    className={`blog-list-item tile is-child notification box ${
                      post.frontmatter.featuredpost ? 'is-featured' : ''
                    }`}
                  >
                    <div>
                      {post.frontmatter.featuredimage ? (
                        <div className="featured-thumbnail">
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: post.frontmatter.featuredimage,
                              alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                            }}
                          />
                        </div>
                      ) : null}
                      <p className="post-meta m-t-10">
                        <Link
                          className="title has-text-primary is-size-4"
                          to={post.fields.slug}
                        >
                          {post.frontmatter.title}
                        </Link>
                        <span></span>
                        <span className="subtitle is-size-5 is-block">
                          {post.frontmatter.date}
                        </span>
                      </p>
                    </div>
                    <p className="m-t-10">
                      {post.excerpt}
                      <br />
                      <br />
                      <Link className="button is-primary" to={post.fields.slug}>
                        Keep Reading →
                      </Link>
                    </p>
                  </article>
                </div>
              )
            } else {
              return null
            }
          })}
      </div>
    )
  }
}

BlogRoll.propTypes = {
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
      query BlogRollQuery {
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
                    fluid(maxWidth: 120, quality: 90) {
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
    render={(data, count) => <BlogRoll includeFeatured={props.includeFeatured} data={data} count={count} />}
  />
)
