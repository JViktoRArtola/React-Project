const prod = process.env.VERCEL_ENV === 'production'
const destinationHost = prod ? 'https://alldonealeph.firebaseapp.com' : 'https://alldonestaging.firebaseapp.com'

module.exports = {
    images: {
        domains: ['lh3.googleusercontent.com'],
    },
    async rewrites() {
        return [
            // we need to define a no-op rewrite to trigger checking
            // all pages/static files before we attempt proxying
            {
                source: '/:path*',
                destination: '/:path*',
            },
            // {
            //     source: '/:path*',
            //     has: [{ type: 'host', value: 'alldone.app' }],
            //     destination: `https://alldonealeph.firebaseapp.com/:path*`,
            // },
            // {
            //     source: '/:path*',
            //     has: [{ type: 'host', value: 'staging.alldone.app' }],
            //     destination: `https://alldonestaging.firebaseapp.com/:path*`,
            // },
            // {
            //     source: '/:path*',
            //     destination: `https://alldonestaging.firebaseapp.com/:path*`,
            // },

            /**
             * Rewrites for Alldone app Static files
             */
            {
                source: '/favicon.ico',
                destination: `${destinationHost}/favicon.ico`,
            },
            {
                source: '/manifest.json',
                destination: `${destinationHost}/manifest.json`,
            },
            {
                source: '/service-worker-handler.js',
                destination: `${destinationHost}/service-worker-handler.js`,
            },
            {
                source: '/service-worker.js',
                destination: `${destinationHost}/service-worker.js`,
            },
            {
                source: '/static/:path*',
                destination: `${destinationHost}/static/:path*`,
            },
            {
                source: '/fonts/:path*',
                destination: `${destinationHost}/fonts/:path*`,
            },
            {
                source: '/pwa/:path*',
                destination: `${destinationHost}/pwa/:path*`,
            },


            /**
             * Rewrites for Alldone app Views
             */
            {
                source: '/:path*',
                has: [{ type: 'query', key: 'from_landing' }],
                destination: `${destinationHost}/:path*`,
            },
            {
                source: '/team/:path*',
                destination: `/_preview/team/:path*`,
            },
            {
                source: '/teams/:path*',
                destination: `/_preview/teams/:path*`,
            },
            {
                source: '/community/:path*',
                destination: `/_preview/community/:path*`,
            },
            {
                source: '/settings/:path*',
                destination: `/_preview/settings/:path*`,
            },
            {
                source: '/updates/:path*',
                destination: `/_preview/updates/:path*`,
            },


            /**
             * Rewrites for rest of Alldone app Resources
             */
            {
                source: '/:path*',
                destination: `${destinationHost}/:path*`,
            },
        ]
    },
}
