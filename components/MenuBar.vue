<template>
	<div>
		<div class="container py-2 d-flex" style="height: 4rem;">
			<div class="w-100"><img class="h-3 pointer" src="~assets/img/logo.jpg" @click="$router.push('/')"></div>
			<div class="ml-auto d-none d-md-flex">
				<p v-for="l in links" :key="l.text" class="my-auto mr-3 pointer" @click="$router.push(l.path)">{{l.text}}</p>
				<button type="button" class="my-auto btn btn-sm btn-pb-outline" @click="goToBooking">BOOKING</button>
			</div>
			<div class="ml-auto d-md-none">
				<img class="h-3 pointer" src="~/assets/img/menu.png" @click="$store.commit('setIsMenuExpanded', !expanded)">
			</div>
		</div>
		<div v-show="expanded" class="py-2 border-bottom d-md-none">
			<div class="container">
				<p v-for="l in links" :key="l.text" class="pointer" @click="$router.push(l.path)">{{l.text}}</p>
				<button type="button" class="my-auto btn btn-sm btn-pb-outline">BOOKING</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		expanded () { return this.$store.state.isMenuExpanded }
	},
	data: () => ({
		links: [
			{text: 'HOME', path: '/'},
			{text: 'GALLERY', path: '/gallery'},
			{text: 'SERVICE', path: '/service'},
		]
	})
}
</script>