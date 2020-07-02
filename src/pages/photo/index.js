import React from 'react'

import Layout from '../../components/Layout'
import Gallery from '../../components/Gallery'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="running-text">
          <header className="section header-section has-background-clay">
            <div className="container">
              <div className="content">
                <h1 className="mb-0">The Photo Gallery</h1>
                <p>A selection of photos taken by us, along with brilliant pictures submitted by readers.</p>
              </div>
            </div>
          </header>
          <section className="section">
            <div className="container">
              <Gallery />
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}
