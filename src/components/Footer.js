import React from 'react'
import { Link } from 'gatsby'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'

const Footer = class extends React.Component {
	render() {
		return ( 
			<div>
				<footer className="footer is-hidden-tablet" >
					<div className="container" >
						<div className="columns">
							<div className="column is-3 is-hidden-tablet social is-vcentered p-b-30">
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
				</footer>
				<footer className="second-footer">
					<hr className="is-hidden-touch"/>
					<div className="columns">
						<div className="column is-12">
							<p className="is-size-5 has-text-centered">&#169; Devon Stories 2020</p>
							<hr className="is-hidden-touch"/>
						</div>
					</div>
					<div className="columns is-hidden-touch">
						<div className="column is-6-tablet is-offset-3">
							<nav className="level">
								<p className="level-item has-text-centered">
									<Link className="link is-info" to="/contact/submissions">Submissions</Link>
								</p>
								<p className="level-item has-text-centered">
									<Link to="/about" className="link is-info">About</Link>
								</p>
								<p className="level-item has-text-centered">
									<Link to="/docs/privacy-policy-19-06-2020/" className="link is-info">Privacy Policy</Link>
								</p>
							</nav>
						</div>
					</div>
				</footer>
			</div>
		)
	}
}

export default Footer