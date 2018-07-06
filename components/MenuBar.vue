<template>
	<div class="fixed-top bg-white border-bottom">
		<div class="container py-2 d-flex" style="height: 4rem;">
			<nuxt-link :to="localePath('index')"><img class="h-3" src="~assets/img/logo.jpg"></nuxt-link>
			<div class="ml-auto d-none d-md-flex font-weight-bold">
				<nuxt-link v-for="l in links" :key="l.text" class="my-auto mr-3 pointer text-capitalize" :to="localePath(l.path)">{{l.text}}</nuxt-link>
				<button type="button" class="my-auto btn btn-sm btn-pb-b mr-3 text-capitalize" @click="goToBooking">{{$t('booking')}}</button>
				<nuxt-link class="my-auto" :to="switchLocalePath(langSwitcher.code)">{{langSwitcher.name}}</nuxt-link>
			</div>
			<div class="ml-auto d-md-none">
				<img class="h-3 pointer" src="~/assets/img/menu.png" @click="$store.commit('setIsMenuExpanded', !expanded)">
			</div>
		</div>
		<div v-show="expanded" class="py-2 d-md-none">
			<div class="container font-weight-bold">
				<nuxt-link v-for="l in links" :key="l.text" class="pointer d-block mb-3 text-capitalize" :to="localePath(l.path)">{{l.text}}</nuxt-link>
				<button type="button" class="btn btn-sm btn-pb-b text-capitalize d-block mb-3">{{$t('booking')}}</button>
				<nuxt-link :to="switchLocalePath(langSwitcher.code)">{{langSwitcher.name}}</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		langSwitcher () {
			return this.$i18n.locales.filter(l => l.code !== this.$i18n.locale)[0]
		},
		expanded () { return this.$store.state.isMenuExpanded },
		links () {
			return [
				{text: this.$t('home'), path: 'index'},
				{text: this.$t('gallery'), path: 'gallery'},
				{text: this.$t('service'), path: 'service'},
			]
		}
	}
}
</script>
