import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo@2x.png'
import _ from 'lodash'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'


const BrandHeader = class extends React.Component {

    render() {
        const { path } = this.props;

        const miniturisedHeader = (path == "/" || (_.startsWith(path, "/photo/photo"))) ? true : false
        return (
            <header className="ds-header">
                <div className="content">
                    <div className="container">
                        <div style={{ maxWidth: '100vw' }} className="columns mb-0">
                        <div className="column is-3 is-hidden-mobile social is-vcentered pt-5">
                                <nav className="navbar">
                                    <a title="facebook" className="navbar-item" href="https://www.facebook.com/devonstoriesdotcom">
                                    <img
                                        src={facebook}
                                        alt="Facebook"
                                        style={{ width: '1.6em', height: '1.6em' }}
                                    />
                                    </a>
                                    <a title="twitter" className="navbar-item" href="https://twitter.com/DevonStories">
                                    <img
                                        className="fas fa-lg"
                                        src={twitter}
                                        alt="Twitter"
                                        style={{ width: '1.6em', height: '1.6em' }}
                                    />
                                    </a>
                                    <a title="instagram" className="navbar-item" href="https://www.instagram.com/devonstoriesdotcom/">
                                    <img
                                        src={instagram}
                                        alt="Instagram"
                                        style={{ width: '1.6em', height: '1.6em' }}
                                    />
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

const Brand = ({ path }) => {
    return (
        <BrandHeader path={path} />
    )
}

export default Brand