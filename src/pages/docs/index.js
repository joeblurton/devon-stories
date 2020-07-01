import React from 'react'

import Layout from '../../components/Layout'
import DocRoll from '../../components/DocRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="running-text">
          <header className="section header-section has-background-clay">
            <div className="container">
              <div className="content">
                <h1 className="mb-0">Documents</h1>
              </div>
            </div>
          </header>
          <section className="section">
            <div className="container">
              <div className="content">
                <DocRoll />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}
