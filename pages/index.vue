<template>
	<section>
		<hero :images="['slide1.jpg', 'slide2.jpg']"/>
		<!-- START About us -->
		<div class="container py-5">
			<div class="row">
				<div class="col-md-6 d-flex px-6">
					<div class="my-auto px-lg-1">
						<h1 class="text-uppercase">{{$t('About us')}}</h1>
						<p>Palm & Blooms is a new high-end place in London to chill out with friends for instant beauty gratification. We provide a fancy environment with plants and flowers, we are also one of the beauty industry of most innovative talents. Our services including both classic work manicures, deluxe manicures, or our recommended shellac treatments with nail arts following the fashion trend.</p>
					</div>
				</div>
				<div class="col-md-1"></div>
				<div class="col-md-4 my-5">
					<img class="w-100" src="~/assets/img/about-us.jpg">
				</div>
			</div>
		</div>
		<!-- END About us -->
		<div class="bg-pink py-5"  style="height: 30rem;">
			<div class="position-relative"><bubbles/></div>
			<div class="container py-5">
				<div class="row">
					<div class="col-md-8 px-lg-4" style="padding-top: 5rem;">
						<h2 class="text-capitalize">Where Details Means Everything</h2>
						<h4>Do you want to be the center of the party? Bring your nails to us.</h4>
						<nuxt-link class="btn btn-lg btn-pb-b text-white py-3 px-4 mt-1" :to="localePath('gallery')">{{$t('GALLERY')}}</nuxt-link>
					</div>
				</div>
			</div>
		</div>
		<contact/>
	</section>
</template>

<script>
import Contact from '~/components/Contact'
import Bubbles from '~/components/Bubbles'
export default {
	components: {Contact, Bubbles}
}
</script>
