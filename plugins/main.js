import Vue from 'vue'
import Snotify from 'vue-snotify'
import VueCarousel from 'vue-carousel'
import Hero from '~/components/Hero'
Vue.use(Snotify)
Vue.use(VueCarousel)
Vue.component('hero', Hero)

// Global mixin
Vue.mixin({
	methods: {
		goToBooking () {
			if (this.$route.path === '/') {
				document.getElementById('contact-section').scrollIntoView()
			} else { this.$router.push('/#contact-section') }
		}
	}
})