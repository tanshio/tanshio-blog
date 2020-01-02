const React = require('react')
const { action } = require('@storybook/addon-actions')

const linkActionHandler = action('Link:')
const navigateActionHandler = action('NavigateTo:')

module.exports = {
  graphql: (args) => args,
  Link: ({ to, ...rest }) =>
    React.createElement('a', {
      ...rest,
      href: to,
      onClick: (e) => {
        e.preventDefault()
        linkActionHandler(to)
      },
    }),
  StaticQuery: () => {},
  useStaticQuery: (args) => {
    const query = args[0]
    if (query.indexOf('query SEOQuery') > -1) {
      return {
        site: {
          siteMetadata: {
            title: '百人一首 簡単に暗記',
            description: '説明',
            author: 'rei-m',
          },
        },
        ogpImage: {
          publicURL: iconImage,
        },
      }
    }
    return {}
  },
  navigate: (to, options) => {
    navigateActionHandler(to, options)
  },
}
