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
					<div class="my-auto">
						<h3>About Us</h3>
						<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
					</div>
				</div>
			</div>
		</div>
		<!-- END About us -->
		<div class="bg-pink py-5">
			<div class="container">
				<div class="row">
					<div class="col-md-8 px-below-md-5">
						<h3>Living It Up In Vaucluse</h3>
						<p class="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
					</div>
				</div>
			</div>
		</div>
		<contact/>
	</section>
</template>

<script>
import Contact from '~/components/Contact'
export default {
	components: {Contact}
}
</script>
