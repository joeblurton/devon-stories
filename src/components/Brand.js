import React from 'react'
import RetinaImage from 'react-retina-image'
import { Link } from 'gatsby'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'

const Brand = class extends React.Component {

    render() {

        return (
            <header>
                <div className="content">
                <div className="container">
                    <div style={{ maxWidth: '100vw' }} className="columns">
                        <div className="column is-3">
                        </div>
                        <div className="column is-6 has-text-centered">
                            <Link to="/">
                                <RetinaImage src={"/img/logo.png"} 
                                    alt="Devon Stories" 
                                    checkIfRetinaImgExists={false}
                                    className="over-the-top"
                                />
                            </Link>
                        </div>
                        <div className="column is-3 social is-vcentered">
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

export default Brand