let mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public')
  .vue()
  .postCss('resources/css/app.css', 'public/css', [
    //
  ])