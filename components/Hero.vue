<template>
	<div>
		<carousel v-if="images.length > 1" :perPage="1" :autoplay="true" :autoplayTimeout="5000" :autoplayHoverPause="true">
			<slide v-for="i in images" :key="i">
				<img class="w-100" :src="`/img/${i}`">
			</slide>
		</carousel>
		<div v-else :style="`background-image: url('/img/${images[0]}'); background-size: cover; background-position: center; height: 25rem;`">
			<div class="container h-100 d-flex px-md-5 text-white"><div class="my-auto"><slot/></div></div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		images: {type: Array, required: true}
	}
}
</script>