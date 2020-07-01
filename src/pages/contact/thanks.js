import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'

export default () => (
  <Layout>
    <section className="section header-section has-background-clay">
      <div className="container">
        <div className="content">
          <h1>Thank you!</h1>
          <p>We'll get back to you shortly.</p>
          <p>In the meantime, do enjoy our <Link to="/blog">current stories</Link>.</p>
        </div>
      </div>
    </section>
  </Layout>
)
