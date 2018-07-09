<template>
	<section>
		<hero :images="['hero-gallery.jpg']">
			<h2>Always in good form for nails</h2>
			<h4>Your friends will be trying to find who did your nails.</h4>
			<a href="https://www.instagram.com/nnnailsartsss/" target="_blank"><h4>@nnnailsartsss</h4></a>
			<button type="button" class="btn btn-lg btn-pb-b text-white py-3 px-4 mt-1" @click="goToBooking">{{$t('BOOK NOW')}}</button>
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
			<a href="https://www.instagram.com/nnnailsartsss/" target="_blank" class="mt-5 btn btn-lg btn-pb-b">{{$t('See more')}}...</a>
		</div>
	</section>
</template>
