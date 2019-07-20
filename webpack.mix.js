const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
Mix.listen('configReady', (webpackConfig) => {
    // Create SVG sprites
    // webpackConfig.module.rules.unshift({
    //     test: /\.svg$/,
    //     loader: 'svg-sprite-loader',
    //     include: /(resources\/js\/icons\/svg)/,
    //     options: {
    //         symbolId: 'icon-[name]',
    //     }
    // });

    // Exclude 'svg' folder from font loader
    let fontLoaderConfig = webpackConfig.module.rules.find(rule => String(rule.test) === String(/(\.(png|jpe?g|gif|webp)$|^((?!font).)*\.svg$)/));
    fontLoaderConfig.exclude = /(resources\/js\/icons\/svg)/;
});

mix.webpackConfig({
    // resolve: {
    //   alias: {
    //     '@': path.resolve(__dirname, 'resources/js'),
    //   }
    // },
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: 'svg-sprite-loader',
          include: [path.resolve(__dirname, 'resources/js/icons/svg')],
          options: {
            symbolId: 'icon-[name]'
          }
        }
      ],
    }
  });



mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');
