import React from 'react'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'

const Tags = (props) => {

    return (
        <div style={{ marginTop: `1rem` }}>
            <p className="is-size-5">Tags</p>
            <ul className="taglist">
                {props.tags.map((tag) => (
                <li key={tag + `tag`}>
                    <Link to={`/tags/${kebabCase(tag)}/`}>
                    <span className="tag is-primary is-medium">{tag}</span>
                    </Link>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default Tags