import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import TitleBar from '../components/TitleBar'
import PrevNext from '../components/PrevNext'
import Content, { HTMLContent } from '../components/Content'
import Tags from '../components/Tags'
import Img from 'gatsby-image'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  context,
  featuredimage
}) => {
  const PostContent = contentComponent || Content
  const { prev, next } = context;

  return (
    <div className="running-text">
      <TitleBar title={title} description={description} constrained={true} />
      <section className="section image-section">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <Img
                fluid={featuredimage.childImageSharp.fluid}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
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
      <section className="section pt-5 pb-6 has-background-clay">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1 is-flex-mobile">
              <PrevNext prev={prev} next={next} />
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              {tags && tags.length ? (
                  <Tags tags={tags} />
                ) : null}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data, pageContext, location }) => {
  const { markdownRemark: post } = data
  
  return (
    <Layout path={location.pathname}>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        context={pageContext}
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
        featuredimage={post.frontmatter.featuredimage}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
