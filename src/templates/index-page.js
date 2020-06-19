import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import useScript from '../hooks/useScript';

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
    useScript('https://cdn.lightwidget.com/widgets/lightwidget.js');

    return (
        <div>
            <section className="section section--gradient blog-section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-two-thirds-tablet">
                            <div className="column is-12 p-0">
                                <div className="column is-12 p-0">
                                    <FeaturedPost/>
                                </div>
                            </div>
                            <div className="column is-12 p-0">
                                <div className="column is-12 p-0">
                                    <BlogRoll/>
                                </div>
                                <div className="column is-12 has-text-centered">
                                    <Link className="btn" to="/blog">
                                        Read more
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="column is-one-third-tablet">
                            <div className="column is-12 p-0">
                                <h3 className="has-text-weight-semibold is-size-3 m-b-0">
                                    Photos
                                </h3>
                            </div>
                            <div className="column is-12 p-0">
                                <PhotoRoll/>
                            </div>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-12">
                            <section>
                                {/* LightWidget WIDGET */}
                                <iframe 
                                    src="//lightwidget.com/widgets/dd6d047a9611578e836f6a8daa2a1052.html"
                                    title="lightwidget"
                                    scrolling="no" 
                                    allowtransparency="true" 
                                    className="lightwidget-swidget" 
                                    style={{width:"100%",border: '0',overflow: 'hidden'}}
                                ></iframe>
                            </section>
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
