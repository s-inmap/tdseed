// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    "plugins": {
        "postcss-import": {},
        "postcss-url": {},
        "postcss-simple-vars": {},
        "postcss-extend": {},
        "postcss-nested": {},
        // to edit target browsers: use "browserslist" field in package.json
        "autoprefixer": {},
        "postcss-mixins": {
            mixins: {
                shadow: {
                    'box-shadow': '0px 2px 12px rgba(0, 0, 0, .2)'
                }
            }
        }
    }
}
