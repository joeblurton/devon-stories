import React from 'react'
import { Link } from 'gatsby'

const MaybeLink = (props) => {

    const { title, link } = props

    return (
        <Link to={link}>
            {title}
        </Link>
    )
}

const PrevNext = (props) => {

    const { prev, next } = props

    console.log(props)

    return (
        <div className="columns">
            <div className="column is-6">
            {prev && <div>
                <p className="is-text-size-5">Previous article</p>
                <MaybeLink link={prev.fields.slug} title={prev.frontmatter.title} />
            </div>}
            </div>
            <div className="column is-6">
            {next && <div className="is-pulled-right">
                <p className="is-text-size-5">Next article</p>
                <MaybeLink link={next.fields.slug} title={next.frontmatter.title} />
            </div>}
            </div>
        </div>
    )
}

export default PrevNext;