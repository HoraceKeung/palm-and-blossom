<template>
	<div class="bg-footer">
		<div class="container py-5">
			<div class="row">
				<div class="col-md"></div>
				<div class="col-md mb-3 px-below-md-5">
					<h4 class="text-capitalize font-weight-bold">{{$t('Get in touch')}}</h4>
					<div v-for="c in contacts" :key="c.info" class="d-flex">
						<div class="footer-icon bg-dark mr-2"><fa class="m-auto" :icon="c.icon"/></div>
						<p class="mb-2">{{c.info}}</p>
					</div>
				</div>
				<div class="col-md mb-3 px-below-md-5">
					<h4 class="text-capitalize font-weight-bold">{{$t('Follow us')}}</h4>
					<div v-for="s in socials" :key="s.text" class="d-flex pointer" @click="goTo(s.url)">
						<div class="footer-icon bg-dark mr-2"><fa class="m-auto" :icon="['fab', s.icon]"/></div>
						<p class="mb-2">{{s.text}}</p>
					</div>
				</div>
				<div class="col-md mb-3 px-below-md-5">
					<h4 class="text-capitalize font-weight-bold">{{$t('Make a booking')}}</h4>
					<button type="button" class="btn btn-pb-b" @click="goToBooking">{{$t('Book now')}}</button>
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
	data: () => ({
		contacts: [
			{icon: ['fab', 'whatsapp'], info: '+44 7521 563050'},
			{icon: ['fas', 'phone'], info: '+020 5131 13513'},
			{icon: ['fas', 'map-marker-alt'], info: '21 Carnaby Street, Soho, W1F 7DA'}
		],
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
.footer-icon {
	color: #fff;
	border-radius: 50%;
	display: flex;
	height: 1.5rem;
	min-height: 1.5rem;
	width: 1.5rem;
	min-width: 1.5rem;
}
</style>