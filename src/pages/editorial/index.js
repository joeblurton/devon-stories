import React from 'react'

import Layout from '../../components/Layout'
import EditorialRoll from '../../components/EditorialRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="running-text">
          <header className="section header-section has-background-clay">
            <div className="container">
              <div className="content">
                <h1 className="mb-0">Editorials</h1>
              </div>
            </div>
          </header>
          <section className="section">
            <div className="container">
              <div className="content">
                <EditorialRoll />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}
