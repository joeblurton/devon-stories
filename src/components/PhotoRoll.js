import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class PhotoRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: photos } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {photos &&
          photos.map(({ node: photo }) => (
            <div className="is-parent column is-12" key={photo.id}>
              <article className={`blog-list-item tile is-child notification box`}>
                <div>
                  <p className="post-meta m-t-10">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={photo.fields.slug}
                    >
                      {photo.frontmatter.title}
                    </Link>
                    <span></span>
                    <span className="subtitle is-size-5 is-block">
                      {photo.frontmatter.author}
                    </span>
                    <span className="subtitle is-size-5 is-block">
                      {photo.frontmatter.caption}
                    </span>
                  </p>
                </div>
                <p className="m-t-10">
                  <br />
                  <br />
                  <Link className="button is-primary" to={photo.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

PhotoRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query PhotoRollQuery {
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
    render={(data, count) => <PhotoRoll data={data} count={count} />}
  />
)
