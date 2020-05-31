const mix = require('laravel-mix');
require('laravel-mix-alias');

const path = require('path');

mix.alias({
    "react": '../node_modules/react',
    "react-dom": '../node_modules/react-dom',
    "@components": '../shared_components/'
});

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

// process.env.REACT_APP_SOURCE = 'SERVER';

// 

// global.yeet = "yeet"


mix.react('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');
