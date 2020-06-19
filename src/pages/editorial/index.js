import React from 'react'

import Layout from '../../components/Layout'
import EditorialRoll from '../../components/EditorialRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-topop-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              padding: '1rem',
            }}
          >
            Editorials
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <EditorialRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
