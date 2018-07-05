<template>
	<section>
		<hero :images="['hero-gallery.jpg']">
			<h1 class="font-weight-bold">SEE OUR WORKS</h1>
			<h5>Nails Arts Fashion | Following Fashion Trends</h5>
			<h5>Luxurious Nail Treatments</h5>
			<a href="https://www.instagram.com/nnnailsartsss/" target="_blank"><h5>@nnnailsartsss</h5></a>
			<button type="button" class="btn btn-pb-w" @click="goToBooking">{{$t('Book now')}}</button>
		</hero>
		<div class="container py-5 px-below-md-0 text-center">
			<vue-instagram token="7945594090.1677ed0.5524bce228674e1e86e2434567c22a19" :count="12">
				<template slot="feeds" slot-scope="props">
					<a :href="props.feed.link" target="_blank"><img style="width: 33.33%;" :src="props.feed.images.low_resolution.url"></a>
				</template>
				<template slot="error" slot-scope="props">
					<div>{{props.error.error_message}}</div>
				</template>
			</vue-instagram>
			<a href="https://www.instagram.com/nnnailsartsss/" target="_blank" class="mt-5 btn btn-lg btn-pb-b font-weight-bold">{{$t('See more')}}...</a>
		</div>
	</section>
</template>
