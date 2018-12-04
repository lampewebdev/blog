import React from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Metatags from '../components/Metatags'

const Container = styled.div`
  text-decoration: none;
  max-width: 630px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
`
const Header = styled.h1`
  padding: 15px;
  margin-bottom: 15px;
`
const Content = styled.div`
  padding-top: 15px;
`

function BlogPost (props) {
  const post = props.data.markdownRemark
  const url = props.data.site.siteMetadata.siteUrl
  const { title, description } = post.frontmatter
  const thumbnail = post.frontmatter.image.childImageSharp.resize.src
  return (
    <Layout>
      <Metatags
        title={title}
        description={description}
        thumbnail={url + thumbnail}
        url={url}
        pathname={props.location.pathname}
      />
      <Container>
        <Header>{title}</Header>
        <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        image {
          childImageSharp {
            resize(width: 1500, height: 1500) {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    site {
      siteMetadata {
        title
      }
    }
  }
`
