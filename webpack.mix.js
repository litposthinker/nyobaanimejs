let mix = require("laravel-mix");

mix
  .js("src/app.js", "./dist/app.js")
  .postCss("src/app.css", "./dist/app.css", [require("tailwindcss")]);
