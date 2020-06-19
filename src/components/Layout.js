import React from 'react'
import { Helmet } from 'react-helmet'
import Brand from '../components/Brand'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../css/all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import "isomorphic-fetch"

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" className="has-navbar-fixed-bottom" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="194x194" href="/favicon-194x194.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#028c40" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <Brand />
      <div id="wrapper">{children}</div>
      <Footer />
      <Navbar />
    </div>
  )
}

export default TemplateWrapper
