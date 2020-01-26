import glob from 'glob'

let files = glob.sync('**/*.md', {cwd: 'articles'});
files = files.map(file => file.substr(0, file.lastIndexOf('.')));

module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: "A Software Crafter's Journey",
        meta: [
            {charset: 'utf-8'},
            {
                name: 'viewport',
                content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui'
            },
            {hid: 'description', name: 'description', content: "A Software Crafter's Journey"}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    /*
    ** Customize the progress bar color
    */
    loading: {color: '#3B8070'},
    generate: {
        routes: files
    },
    router: {
        extendRoutes(routes, resolve) {
            routes.push({
                name: 'custom',
                path: '*',
                component: resolve(__dirname, 'pages/article.vue')
            })
        }
    },
    /*
    ** Build configuration
    */
    build: {
        /*
        ** Run ESLint on save
        */
        extend(config, {isDev, isClient}) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }

            config.module.rules.push({
                test: /\.md$/,
                loader: 'frontmatter-markdown-loader'
            })
        }
    },
    modules: [
        '@nuxtjs/bulma',
        '@nuxtjs/sitemap'
    ],
    sitemap: {
        hostname: 'http://la-combe-du-lion-vert.fr/'
    },
    dev: (process.env.NODE_ENV !== 'production')
};

