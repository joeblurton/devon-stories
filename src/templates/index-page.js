import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
//import useScript from '../hooks/useScript';
import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import PhotoRoll from '../components/PhotoRoll' 
import FeaturedPost from '../components/FeaturedPost';
import TitleBar from '../components/TitleBar'

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
            <TitleBar title={title} description={"A highly irregular local interest magazine."} descriptionItalic={true} />
            <section className="section section--gradient blog-section pt-5">
                <div className="container pt-2">
                    <div className="columns">
                        <div className="column is-two-thirds-tablet no-padding-mobile no-padding-right-tablet">
                            <div className="column is-12 px-0 padding-1-mobile">
                                <div className="column is-12 px-0 py-0">
                                    <FeaturedPost/>
                                </div>
                            </div>
                            <div className="column is-12 px-0 padding-1-mobile">
                                <div className="column is-12 px-0 py-0">
                                    <BlogRoll/>
                                </div>
                                <div className="column is-12 has-text-centered pt-6">
                                    <Link className="btn no-decoration" to="/blog">
                                        <button className="button is-primary is-medium">Read more stories</button>
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
                                <h3 className="sunflower-bold is-size-3 ml-2 mb-1">From the Gallery</h3>
                                <PhotoRoll/>
                                <Link className="btn no-decoration" to="/photo">
                                    <button className="button is-primary is-medium">View the full gallery</button>
                                </Link>
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

const IndexPage = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout path={location.pathname}>
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
