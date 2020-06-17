import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

// Search component
export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ``,
            results: [],
            active: '',
            showDelete: '',
            deleteButtonShown: '',
        }
    }

    render() {

        return (
            <div className="navbar-item search-container p-r-0">
                <input type="text" className={"input is-medium " + this.state.deleteButtonShown} value={this.state.query} onChange={this.search} placeholder="Search..." />
                <button className={"button is-danger is-medium delete-button " + this.state.showDelete} onClick={this.clear}>
                    <span className="icon is-small">
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </button>
                <ul className={"results " + this.state.active}>{this.state.results.length > 0 ? (this.state.results.map(
                    (page, index) => <Link to={page.slug} key={index} title={page.title}>
                                <li className="is-size-5">{page.title}</li>
                            </Link>
                )) : <li>No results found.</li>}</ul>
            </div>
        )
    }

    getSearchResults(query) {
        if (!query || !window.__LUNR__) return []
        const lunrIndex =  window.__LUNR__[this.props.lng];
        const results = lunrIndex.index.search(query) // you can  customize your search , see https://lunrjs.com/guides/searching.html
        return results.map(({ ref }) => lunrIndex.store[ref])
    }

    clear = () => {
        this.setState(s => {
            return {
                query: ``,
                results: [],
                active: '',
                showDelete: '',
                deleteButtonShown: '',
            }
        })
    }

    search = event => {
        const query = event.target.value
        const results = this.getSearchResults(query)
        const enoughResults = results.length > 0
        const active = enoughResults ? 'is-active' : ''
        const showDelete = enoughResults ? 'is-active' : ''
        const deleteButtonShown = enoughResults ? 'delete-button-shown' : ''
        this.setState(s => {
            return {
                results,
                query,
                active,
                showDelete,
                deleteButtonShown
            }
        })
    }
}