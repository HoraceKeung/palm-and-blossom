module.exports = {
	mode: 'spa',
	modules: ['nuxt-fontawesome'],
	fontawesome: {
		component: 'fa',
		imports: [
			{set: '@fortawesome/fontawesome-free-brands', icons: ['faFacebookF', 'faInstagram', 'faWeixin', 'faWeibo']}
		]
	},
	/*
	** Headers of the page
	*/
	head: {
		title: 'Palm & Blossom',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Palm & Blossom' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	/*
	** Customize the progress bar color
	*/
	loading: false,
	/*
	** Build configuration
	*/
	build: {
		/*
		** Run ESLint on save
		*/
		extend (config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		}
	},
	css: [
		'bootstrap-css-only/css/bootstrap.css',
		'@/assets/css/global.css'
	],
	plugins: ['~/plugins/main.js'],
	router: {
		middleware: 'routeGuard'
	}
}
