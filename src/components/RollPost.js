import React from 'react'
import { Link } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import BackgroundImage from 'gatsby-background-image-es5'

const RollPost = ({post}) => {
    
    return (
        <div className="is-parent column is-6">
            <Link to={post.fields.slug} className="no-decoration">
            <article
                className={`card ${
                post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
            >
                <BackgroundImage
                    Tag="section"
                    className={"background-image"}
                    fluid={post.frontmatter.featuredimage.childImageSharp.fluid}
                >
                    <div className="blur blog-roll-content">
                    {post.frontmatter.featuredimage ? (
                        <div className="card-image">
                        <PreviewCompatibleImage
                            imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                            }}
                        />
                        </div>
                    ) : null}
                    <div className="card-content">
                        <p className="title has-text-primary is-size-4">
                        {post.frontmatter.title}
                        </p>
                        <p className="subtitle is-size-5 is-block">
                        {post.frontmatter.date}
                        </p>
                        <p className="m-t-10">
                        {post.excerpt}
                        </p>
                    </div>
                    </div>
                </BackgroundImage>
            </article>
            </Link>
        </div>
    )
}

export default RollPost
