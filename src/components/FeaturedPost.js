import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import BackgroundImage from 'gatsby-background-image-es5'

class FeaturedPost extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns mb-1">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-12" key={post.id}>
                <Link
                    className="no-decoration"
                    to={post.fields.slug}
                >
                    <article
                        className={`is-child box featured-tile px-0 py-0 ${
                        post.frontmatter.featuredpost ? 'is-featured' : ''
                        }`}
                    >
                        <BackgroundImage
                            Tag="section"
                            className={"background-image"}
                            fluid={post.frontmatter.featuredimage.childImageSharp.fluid}
                        >
                            <div className="blur">
                                <div className="column is-12 pt-0-mobile pr-0-mobile pl-0-mobile pb-0-tablet">
                                    <h2 className="is-size-3 sunflower-bold">
                                        {post.frontmatter.title}
                                    </h2>
                                </div>
                                <div className="column is-12 pt-0-mobile pr-0-mobile pl-0-mobile">
                                    {post.frontmatter.featuredimage ? (
                                        <div className="featured-thumbnail post-info-anchor">
                                            <PreviewCompatibleImage
                                                imageInfo={{
                                                image: post.frontmatter.featuredimage,
                                                alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                                                }}
                                            />
                                            <div className="post-info">
                                                <p className="subtitle">
                                                    {post.frontmatter.date} | By {post.frontmatter.author}
                                                </p>
                                            </div>
                                        </div>
                                        ) : null}
                                </div>
                                <div className="column is-12 no-padding-mobile">
                                    <div className="content p-t-10 pt-0-mobile pr-0-mobile pl-0-mobile">
                                        {post.frontmatter.description}
                                        <span className="has-text-link">&nbsp;Read more →</span>
                                    </div>
                                </div>
                            </div>
                        </BackgroundImage>
                    </article>
                </Link>
            </div>
          ))}
      </div>
    )
  }
}

FeaturedPost.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query FeaturedPostQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" }, featuredpost: { eq: true } } }
          limit: 1
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                description
                author
                date(formatString: "DD MMMM, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 512, quality: 100) {
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
    render={(data, count) => <FeaturedPost data={data} count={count} />}
  />
)
