module.exports = {
    siteMetadata: {
        title: 'Devon Stories',
        description: 'Tales from deepest Devonshire.',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        {
            // keep as first gatsby-source-filesystem plugin for gatsby image support
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/static/img`,
                name: 'uploads',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/img`,
                name: 'images',
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [{
                        resolve: 'gatsby-remark-relative-images',
                        options: {
                            name: 'uploads',
                        },
                    },
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 2048,
                        },
                    },
                    {
                        resolve: 'gatsby-remark-copy-linked-files',
                        options: {
                            destinationDir: 'static',
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-lunr`,
            options: {
                languages: [{
                    // ISO 639-1 language codes. See https://lunrjs.com/guides/language_support.html for details
                    name: 'en',
                    // A function for filtering nodes. () => true by default
                    // filterNodes: node => node.frontmatter.lang === 'en',
                    // Add to index custom entries, that are not actually extracted from gatsby nodes
                    customEntries: [],
                }],
                // Fields to index. If store === true value will be stored in index file.
                // Attributes for custom indexing logic. See https://lunrjs.com/docs/lunr.Builder.html for details
                fields: [{
                        name: 'title',
                        store: true,
                        attributes: {
                            boost: 20
                        }
                    },
                    {
                        name: 'description'
                    },
                    {
                        name: 'tags',
                        store: true
                    },
                ],
                // How to resolve each field's value for a supported node type
                resolvers: {
                    // For any node of type MarkdownRemark, list how to resolve the fields' values
                    MarkdownRemark: {
                        title: node => node.frontmatter.title,
                        content: node => node.rawMarkdownBody,
                        url: node => node.fields.url,
                    },
                },
                //custom index file name, default is search_index.json
                filename: 'search_index.json'
            },
        },
        {
            resolve: 'gatsby-plugin-netlify-cms',
            options: {
                modulePath: `${__dirname}/src/cms/cms.js`,
            },
        },
        {
            resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
            options: {
                develop: true, // Activates purging in npm run develop
                purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
            },
        }, // must be after other CSS plugins
        'gatsby-plugin-netlify', // make sure to keep it last in the array
    ],
}