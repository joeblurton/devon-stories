import React from 'react'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'

const Footer = class extends React.Component {
	render() {
		return ( 
			<footer className="footer" >
				<div className="content" >
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
				</div>
			</footer>
		)
	}
}

export default Footer