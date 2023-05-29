// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: '网站标题',
            meta: [
                { name: 'description', content: 'My amazing site.' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
            ],
        },
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})