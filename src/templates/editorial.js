import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import TitleBar from '../components/TitleBar'
import Content, { HTMLContent } from '../components/Content'

export const EditorialTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div className="running-text">
      <TitleBar title={title} description={description} constrained={true} />
      <section className="section body-section">
        {helmet || ''}
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <PostContent content={content} />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              {tags && tags.length ? (
                <div style={{ marginTop: `3rem` }}>
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
    </div>
  )
}

EditorialTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const Editorial = ({ data, location }) => {
  const { markdownRemark: post } = data

  return (
    <Layout path={location.pathname}>
      <EditorialTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

Editorial.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Editorial

export const pageQuery = graphql`
  query EditorialByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
