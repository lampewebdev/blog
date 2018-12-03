import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'

const Container = styled.div`
  text-decoration: none;
  max-width: 630px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  box-shadow: 
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
    rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
`

const Date = styled.div`
  padding: 15px;
  color: black;
`

const Excerpt = styled.p`
  color: black;
  padding: 15px;
  padding-top:0;
`

const Header = styled.h1`
  padding: 15px;
`

const IndexPage = props => {
  const postList = props.data.allMarkdownRemark
  return (
    <Layout>
      {postList.edges.map(({ node }, i) => (
        <Container>
          <Link to={node.fields.slug} className="link" key={i}>
            <div className="post-list-item">
              <Header>{node.frontmatter.title}</Header>
              <Date>{node.frontmatter.date}</Date>
              <Excerpt>{node.excerpt}</Excerpt>
            </div>
          </Link>
        </Container>
      ))}
    </Layout>
  )
}

export default IndexPage

export const ListQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "Do MMMM YYYY")
            title
          }
        }
      }
    }
  }
`
