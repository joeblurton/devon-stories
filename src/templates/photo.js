import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'

export const PhotoTemplate = ({
  caption,
  photo,
  tags,
  author,
  title,
  helmet,
}) => {

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <div className="columns has-background-dark">
                <div className="column is-10 is-offset-1">
                    <img className="solo-photo" src={photo} alt={title}/>
                    <p className="has-text-white has-text-weight-normal">&#169; {author}</p>
                    <p className="has-text-white has-text-weight-normal">{caption}</p>
                </div>
            </div>
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

/*BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}*/

const Photo = ({ data, location }) => {
  const { markdownRemark: post } = data

  return (
    <Layout path={location.pathname}>
      <PhotoTemplate
        caption={post.frontmatter.title}
        photo={post.frontmatter.photo}
        author={post.frontmatter.author}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.caption}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

Photo.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Photo

export const PhotoQuery = graphql`
  query PhotoByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        caption
        author
        photo
        tags
      }
    }
  }
`
