import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PostContent = contentComponent || Content

  return (
    <div className="running-text">
      <header className="section header-section has-background-clay">
        <div className="container">
          <div className="content">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <h1 className="mb-0">{title}</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="section body-section">
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <PostContent content={content} />
              <span className="sunflower-medium is-italic ">Joe Blurton, Chudleigh, Devonshire</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data, location }) => {
  const { markdownRemark: post } = data

  return (
    <Layout path={location.pathname}>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
