<template>
	<div class="bg-footer">
		<div class="container py-5">
			<div class="row">
				<div class="col-md"></div>
				<div class="col-md mb-3 px-below-md-5">
					<nuxt-link v-for="l in links" :key="'footer'+l.text" class="pointer d-block text-capitalize mb-2" :to="localePath(l.path)">{{l.text}}</nuxt-link>
				</div>
				<div class="col-md mb-3 px-below-md-5">
					<h4 class="text-capitalize font-weight-bold">{{$t('Follow us')}}</h4>
					<p v-for="s in socials" :key="s.text" class="pointer mb-2" @click="goTo(s.url)">{{s.text}}</p>
					<div class="d-flex text-white mt-1">
						<div v-for="s in socials" :key="s.text+'icon'" class="rounded-circle bg-dark d-flex pointer mr-2" style="height: 1.5rem; width: 1.5rem;" @click="goTo(s.url)">
							<fa class="m-auto" :icon="['fab', s.icon]"/>
						</div>
					</div>
				</div>
				<div class="col-md mb-3 px-below-md-5">
					<h4 class="text-capitalize font-weight-bold">{{$t('Make a booking')}}</h4>
					<button type="button" class="btn btn-pb-inverse" @click="goToBooking">{{$t('Book now')}}</button>
				</div>
				<div class="col-md"></div>
			</div>
		</div>
	</div>
</template>

<script>
// https://www.npmjs.com/package/vue-qr
// https://www.npmjs.com/package/@xkeshi/vue-qrcode
export default {
	computed: {
		links () {
			return [
				{text: this.$t('home'), path: 'index'},
				{text: this.$t('gallery'), path: 'gallery'},
				{text: this.$t('service'), path: 'service'},
			]
		}
	},
	data: () => ({
		socials: [
			{text: 'Instagram', url: 'https://www.instagram.com/nnnailsartsss/', icon: 'instagram'},
			{text: 'Facebook', url: '', icon: 'facebook-f'},
			{text: 'WeChat', url: '', icon: 'weixin'},
			{text: 'Weibo', url: '', icon: 'weibo'}
		]
	}),
	methods: {
		goTo (url) {
			window.open(url, '_blank')
		}
	}
}
</script>

<style scoped>
.bg-footer {
	background-image: url('~/assets/img/bg-footer.jpg');
	background-size: cover;
	background-position: center;
}
</style>