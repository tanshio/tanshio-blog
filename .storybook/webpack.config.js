module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(js|jsx|ts|tsx)$/,
    use: [
      {
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
        loader: require.resolve('babel-loader'),
      },
    ],
  })
  config.module.rules.push({
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  })

  config.resolve.extensions.push('.ts', '.tsx')
  return config
}
