/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const createCategoryPages = (createPage, posts) => {
  const TaxsComponent = path.resolve(`./src/templates/taxonomies.tsx`)
  const postsByCategories = {}
  posts.forEach(({ node }) => {
    console.log(node.frontmatter)
    if (node.frontmatter.categories) {
      node.frontmatter.categories.forEach((category) => {
        if (!postsByCategories[category]) {
          postsByCategories[category] = []
        }
        postsByCategories[category].push(node)
      })
    }
  })

  const categories = Object.keys(postsByCategories)
  console.log(categories)
  createPage({
    path: `/blog/category`,
    component: TaxsComponent,
    context: {
      categories: categories.sort()
    }
  })

  // const templateSingle = Path.resolve('src/templates/category-single.js')
  // categories.forEach((categoryName) => {
  //   const posts = postsByCategories[categoryName]
  //   createPage({
  //     path: `/blog/category/${categoryName}`,
  //     component: templateSingle,
  //     context: {
  //       posts,
  //       categoryName
  //     }
  //   })
  // })
}

const createPosts = (createPage, posts)=> {
  // 投稿ページの生成
  const PostComponent = path.resolve(`./src/templates/post.tsx`)
  posts.forEach((post, index) => {
    const previous =
      index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.frontmatter.path,
      component: PostComponent,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    // graphqlからデータの取得
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  id
                  html
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    path
                    type
                    categories
                    tags
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allMarkdownRemark.edges

        createCategoryPages(createPage, posts)
        createPosts(createPage, posts)
      })
    )
  })
}
// slugの生成
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
