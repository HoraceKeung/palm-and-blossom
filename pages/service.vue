<template>
	<section>
		<hero :images="['hero-service.jpg']">
			<h2>Beauty, Delicacy, Charm.</h2>
			<h2>Your nails will be part of it.</h2>
			<h4>Let your nails be the center of every occasion</h4>
			<button type="button" class="btn btn-lg btn-pb-b text-white py-3 px-4 mt-1" @click="goToBooking">{{$t('BOOK NOW')}}</button>
		</hero>
		<div class="container py-5">
			<div v-for="s in service" :key="s.title">
				<table class="w-100">
					<thead>
						<tr>
							<td><h2 class="mb-5 font-weight-bold">{{s.title}}</h2></td>
							<td class="text-center"><h5 class="mb-5 font-weight-bold text-uppercase">{{$t('time')}}</h5></td>
							<td class="text-center" style="min-width: 3rem;"><h5 class="mb-5 font-weight-bold text-uppercase">{{$t('price')}}</h5></td>
						</tr>
					</thead>
					<tbody>
						<tr v-for="i in s.items" :key="i.name">
							<td class="pr-2">
								<p class="mb-0">{{i.name}}</p>
								<p class="small">{{i.detail.join('. ')}}</p>
							</td>
							<td class="text-center">{{i.time}}mins</td>
							<td class="text-center">£{{i.price}}</td>
						</tr>
					</tbody>
				</table>
				<hr class="border-dark my-5">
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data: () => ({
		service: [
			{
				title: 'Polish',
				items: [
					{
						name: 'Reshape & Polish',
						detail: ['file', 'polish'],
						time: 20,
						price: 20
					},
					{
						name: 'Speedy',
						detail: ['file', 'cuticles', 'polish', 'moisturise', 'oil'],
						time: 20,
						price: 20
					},
					{
						name: 'Full Works',
						detail: ['file', 'cuticles', 'scrub', 'massage', 'polish', 'moisturise', 'oil'],
						time: 20,
						price: 20
					},
					{
						name: 'Ultra Moisturising Treatment',
						detail: ['file', 'cuticles', 'scrub', 'massage', 'paraffin wax', 'polish', 'moisturise', 'oil'],
						time: 20,
						price: 20
					}
				]
			}
		]
	})
}
</script>
