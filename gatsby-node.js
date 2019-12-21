/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const fs = require(`fs`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const createCategoryPages = (createPage, posts) => {
  const TaxsTemplate = path.resolve(`./src/templates/taxonomies.tsx`)
  const postsByCategories = {}
  posts.forEach(({ node }) => {
    console.log(node.frontmatter)
    if (node.frontmatter.categories) {
      node.frontmatter.categories.forEach(category => {
        if (!postsByCategories[category]) {
          postsByCategories[category] = []
        }
        postsByCategories[category].push(node)
      })
    }
  })

  const categories = Object.keys(postsByCategories)
  createPage({
    path: `/blog/category`,
    component: TaxsTemplate,
    context: {
      categories: categories.sort(),
    },
  })

  const postsTemplate = path.resolve("src/templates/posts.tsx")
  categories.forEach(categoryName => {
    const posts = postsByCategories[categoryName]
    createPage({
      path: `/blog/category/${categoryName}`,
      component: postsTemplate,
      context: {
        posts,
        categoryName,
      },
    })
  })
}

const createPosts = (createPage, posts) => {
  // 投稿ページの生成
  const PostComponent = path.resolve(`./src/templates/post.tsx`)
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
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
                    date
                    title
                    path
                    type
                    categories
                    tags
                    excerpt
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
        const searchJSON = posts.map(post => {
          const postNode = post.node
          const {
            date,
            title,
            excerpt,
            path,
            categories,
            tags,
          } = postNode.frontmatter
          return {
            date,
            title,
            excerpt,
            categories,
            tags,
            path,
          }
        })
        fs.writeFileSync(
          "./static/search.json",
          JSON.stringify(searchJSON, null, 2)
        )
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
