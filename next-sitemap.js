const prod = process.env.VERCEL_ENV === 'production'

module.exports = {
    siteUrl: prod ? 'https://alldone.app' : 'https://staging.alldone.app',
    generateRobotsTxt: true,
    exclude: ['/community-sitemap.xml'],
    sitemapSize: 5000,
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', disallow: '/community-sitemap.xml' },
            { userAgent: '*', allow: '/' },
        ],
        additionalSitemaps: [`${prod ? 'https://alldone.app' : 'https://staging.alldone.app'}/community-sitemap.xml`],
    },
}
