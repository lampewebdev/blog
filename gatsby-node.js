const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(graphql(`{
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date]}
        limit: 100
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }`).then(result => {
      if (result.errors) {
        console.log(result.errors)
        return reject(result.errors)
      }
      const blogTemplate = path.resolve('./src/templates/blog-post.jsx')
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: blogTemplate,
          context: {
            slug: node.fields.slug
          }
        })
      })
    })
    )
  })
}
