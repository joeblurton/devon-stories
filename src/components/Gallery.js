import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class Gallery extends React.Component {
  render() {
    const { data } = this.props
    const { edges: photos } = data.allMarkdownRemark

    return (
        <div className="columns is-multiline">
          {photos &&
            photos.map(({ node: photo }) => (
              <div className="column is-12 is-one-third-tablet is-one-third-desktop is-one-quarter-widescreen" key={photo.id}>
                  <Link
                      className="no-decoration square-link"
                      title={photo.frontmatter.title}
                      to={photo.fields.slug}
                  >
                      <article className="square box is-child" style={{
                          backgroundImage: `url(${photo.frontmatter.photo})`,
                      }}>
                          <div className="photo-byline">
                              <p className="has-text-white is-block is-size-3 is-line-height-equal sunflower-medium">
                                  {photo.frontmatter.title}
                              </p>
                              <p className="is-block">
                                  <span className="is-size-5 has-text-white ">
                                  {photo.frontmatter.author}
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

Gallery.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query GalleryQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "photo" } } }
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
                photo
                author
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Gallery data={data} count={count} />}
  />
)
