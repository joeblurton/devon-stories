import React from 'react'
import { Link } from 'gatsby'
import Search from '../components/Search'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    var lng = "en";
    return (
      <nav
        className="navbar is-fixed-bottom"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-bottom">
              <Search lng={lng} />
              {/* Hamburger menu */}
              <div className="navbar-item">
                <div
                  className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                  data-target="navMenu"
                  onClick={() => this.toggleHamburger()}
                >
                  <span />
                  <span />
                  <span />
                </div>
              </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/">
                Home
              </Link>
              <Link className="navbar-item" to="/blog">
                Stories
              </Link>
              <Link className="navbar-item" to="/photo">
                Gallery
              </Link>
              <Link className="navbar-item" to="/editorial">
                Editorial
              </Link>
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/contact/submissions">
                Submissions
              </Link>
              {/*<Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>*/}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
