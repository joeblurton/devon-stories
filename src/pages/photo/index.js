import React from 'react'

import Layout from '../../components/Layout'
import Gallery from '../../components/Gallery'
import TitleBar from '../../components/TitleBar'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="running-text">
          <TitleBar 
              title={"The Photo Gallery"}
              description={"A selection of photos taken by us, along with brilliant pictures submitted by readers."}
          />
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
