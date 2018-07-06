import Vue from 'vue'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import Snotify from 'vue-snotify'
import VueCarousel from 'vue-carousel'
import VueInstagram from 'vue-instagram'
import Hero from '~/components/Hero'
Vue.use(flatPickr)
Vue.use(Snotify)
Vue.use(VueCarousel)
Vue.use(VueInstagram)
Vue.component('hero', Hero)

// Global mixin
Vue.mixin({
	methods: {
		goToBooking () {
			if (this.$route.path === `/${this.$i18n.locale}`) {
				document.getElementById('contact-section').scrollIntoView()
			} else { this.$router.push(`/${this.$i18n.locale}#contact-section`) }
		}
	}
})