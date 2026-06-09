/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://mandemit.com',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    exclude: ['/admin*'],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
}
