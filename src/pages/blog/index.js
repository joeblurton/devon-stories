import React from 'react'

import Layout from '../../components/Layout'
import BlogRollFull from '../../components/BlogRollFull'
import TitleBar from '../../components/TitleBar'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <TitleBar title={"All Stories"} />
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRollFull includeFeatured={true} />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
