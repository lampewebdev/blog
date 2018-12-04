import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import Footer from './footer'
import styled from 'styled-components'
import AdSense from 'react-adsense'
import './layout.css'

const Content = styled.div`
  @media only screen and (max-width: 650px) {
      padding-left: 10px;
      padding-right: 10px;
  }
`
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <script src="https://unpkg.com/ionicons@4.2.2/dist/ionicons.js" />
          <html lang="en" />
          <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <AdSense.Google
            client='ca-pub-5940437378624677'
            slot='7806394621'
          />
        </Helmet>
        <div className='content'>
          <div className="content-inside">
            <Header siteTitle={data.site.siteMetadata.title} />
            <Content>
              {children}
            </Content>
          </div>
        </div>
        <Footer />
      </Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
