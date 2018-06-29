<template>
	<div id="contact-section" class="container py-5">
		<div class="row mb-3">
			<div class="col-md-2 col-lg-3"></div>
			<div class="col-md-8 col-lg-6 px-below-md-5">
				<h3 class="text-center">Make A Booking</h3>
				<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
				<!-- START Booking form -->
				<form class="mb-3">
					<div class="form-row">
						<div v-for="f in fields" :key="f.id" class="form-group col-md-6">
							<label for="inputFirstName" class="col-form-label">{{f.label}}</label>
							<input type="text" class="form-control" id="inputFirstName" v-model="form[f.model]">
						</div>
					</div>
					<label for="inputMsg" class="col-form-label">What to do and when *</label>
					<textarea rows="4" class="form-control mb-3" id="inputMsg" v-model="form.msg"></textarea>
					<button :disabled="disabled" @click.prevent="submitForm" type="submit" class="btn btn-sm btn-pb-outline">Send</button>
				</form>
				<!-- END Booking form -->
				<h3 class="text-center mb-3">Or</h3>
				<div class="row">
					<div v-for="c in orContacts" :key="c" class="col-sm-6 d-flex mb-1">
						<div class="bg-green rounded-circle my-auto mr-3 green-dot"></div>
						<p class="my-auto">{{c}}</p>
					</div>
				</div>
			</div>
		</div>
		<iframe class="w-100" height="400" frameborder="0" style="border:0" :src="'https://www.google.com/maps/embed/v1/place?key=AIzaSyA4zujbsG3Uu44j2qGVTYlKFURNL2uX82U&q='+orContacts[3].split(' ').join('+')" allowfullscreen></iframe>
	</div>
</template>

<script>
export default {
	computed: {
		disabled () { return !(this.form.firstName && this.form.lastName && this.form.phone && this.form.msg) }
	},
	methods: {
		submitForm () {
			fetch('https://formspree.io/chenjiangquan123@gmail.com', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(this.form)
			}).then(r => {
				if (r.status >= 200 && r.status < 300) {
					this.$snotify.success('Form submitted!', 'Success!', {
						timeout: 2000,
						showProgressBar: false,
						closeOnClick: false,
						pauseOnHover: true
					})
				} else {
					this.$snotify.error('Something went wrong!', 'Error!', {
						timeout: 2000,
						showProgressBar: false,
						closeOnClick: false,
						pauseOnHover: true
					})
				}
			})	
		}
	},
	data: () => ({
		fields: [
			{label: 'First Name *', type: 'text', id: 'inputFirstName', model: 'firstName'},
			{label: 'Last Name *', type: 'text', id: 'inputLastName', model: 'lastName'},
			{label: 'Email Address', type: 'email', id: 'inputEmail', model: 'email'},
			{label: 'Phone *', type: 'tel', id: 'inputPhone', model: 'phone'}
		],
		form: {
			firstName: null,
			lastName: null,
			email: null,
			phone: null,
			msg: null
		},
		orContacts: [
			'+44 7521 563050',
			'3703829230',
			'+020 5131 13513',
			'21 Carnaby Street, Soho, W1F 7DA'
		]
	})
}
</script>

<style scoped>
.green-dot {
	height: 2rem;
	min-height: 2rem;
	width: 2rem;
	min-width: 2rem;
}
</style>