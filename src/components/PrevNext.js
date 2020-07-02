import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const PrevNext = (props) => {

    const { prev, next } = props

    return (
        <div className="columns">
            <div className="column is-6">
            {prev && <Link to={prev.fields.slug} title={prev.frontmatter.title}>
                <div className="card card-link px-4 py-3 is-pulled-right">
                    <div className="columns is-mobile">
                        <div className="column is-1 pr-5">
                            <FontAwesomeIcon icon={faArrowLeft} size="lg"/>
                        </div>
                        <div className="column">
                            <p className="is-text-size-5">Previous article</p>
                            <p className="is-underlined has-text-primary">{prev.frontmatter.title}</p>
                        </div>
                    </div>
                </div>
             </Link>}
            </div>
            <div className="column is-6">
            {next && <Link to={next.fields.slug} title={next.frontmatter.title}>
                <div className="card card-link px-4 py-3 is-pulled-right">
                    <div className="columns is-mobile">
                        <div className="column">
                            <p className="is-text-size-5">Next article</p>
                            <p className="is-underlined has-text-primary">{next.frontmatter.title}</p>
                        </div>
                        <div className="column is-1 pl-5 pr-5 mr-2">
                            <FontAwesomeIcon icon={faArrowRight} size="lg"/>
                        </div>
                    </div>
                </div>
             </Link>}
            </div>
        </div>
    )
}

export default PrevNext;