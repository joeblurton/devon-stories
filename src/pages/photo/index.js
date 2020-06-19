import React from 'react'

import Layout from '../../components/Layout'
import PhotoRoll from '../../components/PhotoRoll'

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
              padding: '1rem 1rem 0 1rem',
            }}
          >
            Photos
          </h1>
          <h2
            style={{
              padding: '0 1rem',
            }}>Kindly submitted by readers.</h2>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <PhotoRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
