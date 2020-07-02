import React from 'react'

import Layout from '../../components/Layout'
import EditorialRoll from '../../components/EditorialRoll'
import TitleBar from '../../components/TitleBar'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <TitleBar title={"Editorials"} />
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
