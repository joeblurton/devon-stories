import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import BackgroundImage from 'gatsby-background-image-es5'

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
                  <Link to={post.fields.slug} className="no-decoration">
                    <article
                      className={`card ${
                        post.frontmatter.featuredpost ? 'is-featured' : ''
                      }`}
                    >
                        <BackgroundImage
                            Tag="section"
                            className={"background-image"}
                            fluid={post.frontmatter.featuredimage.childImageSharp.fluid}
                        >
                          <div className="blur blog-roll-content">
                            {post.frontmatter.featuredimage ? (
                              <div className="card-image">
                                <PreviewCompatibleImage
                                  imageInfo={{
                                    image: post.frontmatter.featuredimage,
                                    alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                                  }}
                                />
                              </div>
                            ) : null}
                            <div className="card-content">
                              <p className="title has-text-primary is-size-4">
                                {post.frontmatter.title}
                              </p>
                              <p className="subtitle is-size-5 is-block">
                                {post.frontmatter.date}
                              </p>
                              <p className="m-t-10">
                                {post.excerpt}
                              </p>
                            </div>
                          </div>
                        </BackgroundImage>
                    </article>
                  </Link>
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
    render={(data, count) => <BlogRoll includeFeatured={props.includeFeatured} data={data} count={count} />}
  />
)
