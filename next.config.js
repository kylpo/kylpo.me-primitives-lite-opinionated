const LINARIA_EXTENSION = '.linaria.module.css'

const isDev = process.env.NODE_ENV !== 'production'

function traverse(rules) {
  for (let rule of rules) {
    if (typeof rule.loader === 'string' && rule.loader.includes('css-loader')) {
      if (
        rule.options &&
        rule.options.modules &&
        typeof rule.options.modules.getLocalIdent === 'function'
      ) {
        let nextGetLocalIdent = rule.options.modules.getLocalIdent
        rule.options.modules.mode = 'local'
        rule.options.modules.auto = true
        rule.options.modules.exportGlobals = true
        // rule.options.modules.exportOnlyLocals = false
        rule.options.modules.getLocalIdent = (
          context,
          _,
          exportName,
          options
        ) => {
          if (context.resourcePath.includes(LINARIA_EXTENSION)) {
            return exportName
          }
          return nextGetLocalIdent(context, _, exportName, options)
        }
      }
    }
    if (typeof rule.use === 'object') {
      traverse(Array.isArray(rule.use) ? rule.use : [rule.use])
    }
    if (Array.isArray(rule.oneOf)) {
      traverse(rule.oneOf)
    }
  }
}

module.exports = {
  reactStrictMode: true,
  webpack(config, options) {
    traverse(config.module.rules)
    config.module.rules.push({
      test: /\.(tsx|ts|js|mjs|jsx)$/,
      exclude: /node_modules/,
      use: [
        // options.defaultLoaders.babel,
        {
          loader: require.resolve('@linaria/webpack-loader'),
          options: {
            sourceMap: isDev,
            displayName: isDev,
            extension: LINARIA_EXTENSION,
          },
        },
        // {
        //   ...options.defaultLoaders.babel,
        //   options: {
        //     ...options.defaultLoaders.babel.options,
        //     plugins: [['chronstruct-primitives-lite']],
        //     presets: ['@babel/preset-typescript'],
        //   },
        // },
      ],
    })

    return config
  },
}
