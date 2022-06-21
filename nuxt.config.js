const env = require('./env');

const IS_PRODUCTION = env.isProduction;
const SSR_PORT = env.ssrPort;
const BASE_APP_URL = env.baseAppUrl;

const APP_NAME = 'Metallum';
const APP_EMAIL = IS_PRODUCTION ? 'info@domain.com' : 'ricardo@lloyds.design';

export default {
	server: {
		host: IS_PRODUCTION ? 'localhost' : '0.0.0.0',
		port: SSR_PORT
	},

	head: {
		title: APP_NAME + ' |  ',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
			{ name: 'format-detection', content: 'telephone=no' },
			{ name: 'google-site-verification', content: '' },
			{ property: 'og:type', content: 'website' },
			{
				hid: 'twitter:card',
				name: 'twitter:card',
				content: 'summary_large_image'
			},
			{
				hid: 'og:title',
				property: 'og:title',
				content: APP_NAME + ' - Lorem Ipsum'
			},
			{
				hid: 'description',
				name: 'description',
				content: 'Project description'
			},
			{
				hid: 'og:description',
				property: 'og:description',
				content: 'Project description'
			},
			{
				hid: 'og:image',
				property: 'og:image',
				content: BASE_APP_URL + '/img/og-image.png'
			},
			{
				hid: 'og:url',
				property: 'og:url',
				content: BASE_APP_URL
			}
		],

		link: [
			{ rel: 'icon', type: 'image/png', href: '/img/favicon.png' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&family=Raleway:wght@400;500&display=swap' }
		]
	},

	publicRuntimeConfig: {
		appUrl: BASE_APP_URL,
		appBackApiUrl: env.baseBackApiUrl,
		appName: APP_NAME,
		appEmail: APP_EMAIL,
		isProduction: IS_PRODUCTION
	},

	components: true,

	loading: { color: '#fff' },

	serverMiddleware: [
		{ path: '/api/verify-recaptcha', handler: '~/server-middleware/recaptcha.js' },
		{ path: '/api/hnb', handler: '~/server-middleware/hnb.js' },
		{ path: '/api/status', handler: '~/server-middleware/status.js' }
	],

	css: ['@/assets/scss/main.scss'],

	styleResources: {
		scss: ['@/assets/scss/var.colors.scss', '@/assets/scss/var.typo.scss']
	},

	buildModules: ['@nuxt/typescript-build', '@aceforth/nuxt-optimized-images'],

	plugins: [
		'@/plugins/cms-helpers',
		'@/plugins/fontawesome.js',
		'@/plugins/responsive-images',
		'@/plugins/google-map',
		// { src: '@/plugins/google-analytics', mode: 'client' },
		{
			src: '@/plugins/accessibility-tab-handler',
			mode: 'client'
		},
		{
			src: '@/plugins/global-stuff',
			mode: 'client'
		},
		{
			src: '@/plugins/splide',
			mode: 'client'
		}
	],

	build: {
		babel: {
			presets({ isServer }, [preset, options]) {
				return [
					[
						preset,
						{
							browsers: ['last 1 Chrome version', 'last 1 Firefox version', 'last 1 Safari version']
						}
					]
				];
			}
		},
		transpile: [/^vue2-google-maps($|\/)/]
	},

	optimizedImages: {
		optimizeImages: true,
		imagesName: ({ isDev }) => isDev ? '[path][name][hash:optimized].[ext]' : '[path][name][hash:7].[ext]',
		responsive: {
			sizes: [500, 1024, 1367, 1601, 1921],
			placeholder: true,
			placeholderSize: 50
		},
		mozjpeg: {
			quality: 86
		},
		pngquant: {
			quality: [0.85, 0.9]
		}
	},

	modules: ['@nuxtjs/style-resources', '@nuxtjs/axios', '@nuxtjs/recaptcha', '@nuxtjs/sitemap', '@nuxtjs/i18n', '@nuxtjs/redirect-module', 'nuxt-mail'],

	i18n: {
		locales: [
			{ code: 'hr', iso: 'hr-HR' },
			{ code: 'en', iso: 'en-US' }
		],
		detectBrowserLanguage: false,
		defaultLocale: 'hr',
		baseUrl: BASE_APP_URL,
		vueI18n: {
			fallbackLocale: 'hr',
			messages: {
				hr: require('./locales/hr.json'),
				en: require('./locales/en.json')
			}
		}
	},

	axios: {
		baseURL: BASE_APP_URL
	},

	recaptcha: {
		version: 3,
		siteKey: env.recaptcha.siteKey
	},

	sitemap: {
		hostname: BASE_APP_URL,
		defaults: {
			lastmod: new Date,
			changefreq: 'monthly',
			priority: 0.9
		}
	},

	mail: {
		message: {
			to: {
				name: APP_NAME,
				address: APP_EMAIL
			},
			from: {
				name: APP_NAME,
				address: 'noreply@lloyds-design.hr'
			}
		},
		smtp: {
			host: 'mail.lloyds-design.hr',
			port: 465, // 25, 465 or 587
			secure: true,
			auth: {
				user: 'noreply@lloyds-design.hr',
				pass: 'x5LV%x1z@,Bp'
			}
		}
	},

	redirect: {
		statusCode: 301,
		rules: [
			//{ from: '^/old-page', to: '/new-page' }
		]
	}
};
