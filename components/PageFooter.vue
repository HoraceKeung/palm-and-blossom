<template>
	<div class="bg-footer">
		<div class="container py-4">
			<div class="row">
				<div class="col-md"></div>
				<div class="col-md mb-3 px-below-md-5">
					<p v-for="l in links" :key="'footer'+l.text" class="pointer mb-0" @click="$router.push(l.path)">{{l.text}}</p>
				</div>
				<div class="col-md mb-3 px-below-md-5">
					<h4>Follow Us</h4>
					<p v-for="s in socials" :key="s.text" class="pointer mb-0" @click="goTo(s.url)">{{s.text}}</p>
					<div class="d-flex text-white mt-1">
						<div v-for="s in socials" :key="s.text+'icon'" class="rounded-circle bg-dark d-flex pointer mr-2" style="height: 1.5rem; width: 1.5rem;" @click="goTo(s.url)">
							<fa class="m-auto" :icon="['fab', s.icon]"/>
						</div>
					</div>
				</div>
				<div class="col-md mb-3 px-below-md-5">
					<h4>Make A Booking</h4>
					<button type="button" class="btn btn-pb-outline" @click="goToBooking">Book now</button>
				</div>
				<div class="col-md"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		links: [
			{text: 'Home', path: '/'},
			{text: 'Gallery', path: '/gallery'},
			{text: 'Our Servce', path: '/service'},
		],
		socials: [
			{text: 'Instagram', url: '', icon: 'instagram'},
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