var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('styles.scss', 'public/assets/css/styles.css');
    mix.scripts([
        '*.js',
    ], 'public/assets/js/main.js');
    mix.scripts([
        'jquery/dist/jquery.min.js',
        'typed.js/dist/typed.min.js',
    ], 'public/assets/js/vendor.js', 'node_modules');
});
