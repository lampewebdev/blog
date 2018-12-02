import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
            relativePath: { eq: "logoWithoutFont.png" }
          ) {
          childImageSharp {
            fixed(height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data =>
      <Img
        fixed={data.placeholderImage.childImageSharp.fixed}
        style={{
          display: 'flex',
        }}
      />
    }
  />
)
