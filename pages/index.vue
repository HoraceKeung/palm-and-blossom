<template>
	<section>
		<hero :images="['slide1.jpg', 'slide2.jpg']"/>
		<!-- START About us -->
		<div class="container py-5">
			<div class="row">
				<div class="col-md-6 mb-3">
					<img class="w-100" src="~/assets/img/about-us.jpg">
				</div>
				<div class="col-md-6 d-flex px-5">
					<div class="my-auto px-lg-5">
						<h3 class="text-uppercase">{{$t('About us')}}</h3>
						<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
						<nuxt-link class="btn btn-lg btn-pb-b text-capitalize" :to="localePath('gallery')">{{$t('gallery')}}</nuxt-link>
					</div>
				</div>
			</div>
		</div>
		<!-- END About us -->
		<div class="bg-pink py-5">
			<div class="position-relative"><bubbles/></div>
			<div class="container py-5">
				<div class="row">
					<div class="col-md-8 px-below-md-5">
						<h3 class="text-capitalize">Where Details Means Everything</h3>
						<p class="mb-0">Do you want to be the center of the party? Bring your nails to us.</p>
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
