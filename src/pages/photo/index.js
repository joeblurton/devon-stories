import React from 'react'

import Layout from '../../components/Layout'
import PhotoRoll from '../../components/PhotoRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="running-text">
          <header className="section header-section has-background-clay">
            <div className="container">
              <div className="content">
                <h1 className="mb-0">Photos</h1>
                <p>Kindly submitted by readers.</p>
              </div>
            </div>
          </header>
          <section className="section">
            <div className="container">
              <div className="content">
                <PhotoRoll />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}
