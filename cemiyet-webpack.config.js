module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('tailwindcss')('./cemiyet-tailwind.config.js')]
            }
          }
        ]
      }
    ]
  }
};
