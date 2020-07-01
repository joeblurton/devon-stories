import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
//import useScript from '../hooks/useScript';

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import PhotoRoll from '../components/PhotoRoll' 
import FeaturedPost from '../components/FeaturedPost';

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
    //useScript('script url');

    return (
        <div>
            <section className="section section--gradient blog-section has-background-clay">
                <div className="container">
                    <div className="columns">
                        <div className="column is-two-thirds-tablet no-padding-mobile no-padding-right-tablet">
                            <div className="column is-12 no-padding-right-tablet">
                                <div className="column is-12 px-0 py-0">
                                    <FeaturedPost/>
                                </div>
                            </div>
                            <div className="column is-12">
                                <div className="column is-12 px-0 py-0">
                                    <BlogRoll/>
                                </div>
                                <div className="column is-12 has-text-centered">
                                    <Link className="btn" to="/blog">
                                        Read more
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="column is-one-third-tablet no-padding-mobile">
                            <div className="column is-12 is-parent">
                                <Link to="/contact/submissions" className="big-button big-button-link">
                                    <div className="tile is-child box has-background-link">
                                        <article className="media">
                                            <div className="media-content">
                                                <p className="is-size-3 has-text-white sunflower-medium">Submit a story</p>
                                            </div>
                                        </article>
                                    </div>
                                </Link>
                            </div>
                            <div className="column is-12">
                                <PhotoRoll/>
                            </div>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-12">
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        description
        intro {
          heading
          description
        }
      }
    }
  }
`
