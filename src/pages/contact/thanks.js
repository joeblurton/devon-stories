import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import TitleBar from '../../components/TitleBar'

export default () => (
  <Layout>
    <TitleBar title={"Thank you!"} description={"We'll get back to you shortly."} />
    <section className="section header-section has-background-clay">
      <div className="container">
        <div className="content">
          <p>In the meantime, do enjoy our <Link to="/blog">current stories</Link>.</p>
        </div>
      </div>
    </section>
  </Layout>
)
