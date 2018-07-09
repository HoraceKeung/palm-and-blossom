<template>
<div>
	<div id="contact-section" class="container py-5">
		<div class="row mb-3">
			<div class="col-md-2 col-lg-3"></div>
			<div class="col-md-8 col-lg-6 px-below-md-5">
				<h1 class="text-center text-uppercase mt-4">{{$t('Make a booking')}}</h1>
				<h4 class="text-center">So many nail polishes, not enough fingers</h4>
				<!-- START Booking form -->
				<form class="mb-3 mt-5">
					<div class="form-row">
						<div v-for="f in fields" :key="f.id" class="form-group col-md-6">
							<label for="inputFirstName" class="col-form-label">{{f.label}}</label>
							<input type="text" class="form-control" id="inputFirstName" v-model="form[f.model]">
						</div>
						<div class="form-group col-md-6">
							<label class="text-capitalize">{{$t('time')}} *</label>
							<flat-pickr v-model="form.time" :config="dateTimeConfig" class="form-control"></flat-pickr>
						</div>
					</div>
					<label for="inputMsg" class="col-form-label">{{$t('Request')}} *</label>
					<textarea rows="4" class="form-control mb-3" id="inputMsg" v-model="form.msg"></textarea>
					<button :disabled="disabled" @click.prevent="submitForm" type="submit" class="btn btn-pb-b py-2 px-3">{{$t('SEND')}}</button>
				</form>
				<!-- END Booking form -->
			</div>
		</div>
	</div>

	<div class="bg-or py-5"  style="height: 40rem;">
			<div class="row">
				<div class="col-md-2 col-lg-3"></div>
				<div class="col-md-8 col-lg-6 px-below-md-5 " style="margin-top: 10rem;">

						<div class="col-md-12 px-lg-4 py-5 bg-white">
							<h1 class="text-center text-uppercase mb-4">{{$t('Or')}}</h1>
							<div class="row col-md-8">
								<div v-for="c in orContacts" :key="c.info" class="col-sm-6 d-flex mb-1">
									<fa class="text-white bg-green rounded-circle my-auto mr-3 green-dot p-2" :icon="c.icon"/>
									<p class="my-auto">{{c.info}}</p>
								</div>
							</div>
						</div>

				</div>
			</div>

	</div>

	<div class="container py-5">
      <iframe class="w-100" height="500" frameborder="0" style="border:0" :src="'https://www.google.com/maps/embed/v1/place?key=AIzaSyA4zujbsG3Uu44j2qGVTYlKFURNL2uX82U&q='+orContacts[3].info.split(' ').join('+')" allowfullscreen></iframe>
	</div>



</div>


</template>

<script>
export default {
	computed: {
		disabled () { return !(this.form.firstName && this.form.lastName && this.form.phone && this.form.msg) },
		fields () {
			return [
				{label: `${this.$t('First Name')} *`, type: 'text', id: 'inputFirstName', model: 'firstName'},
				{label: `${this.$t('Last Name')} *`, type: 'text', id: 'inputLastName', model: 'lastName'},
				{label: this.$t('Email Address'), type: 'email', id: 'inputEmail', model: 'email'},
				{label: `${this.$t('Phone')} *`, type: 'tel', id: 'inputPhone', model: 'phone'}
			]
		}
	},
	methods: {
		submitForm () {
			fetch('https://formspree.io/michellehanyeung@gmail.com', {
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
		form: {
			firstName: null,
			lastName: null,
			email: null,
			phone: null,
			time: null,
			msg: null
		},
		orContacts: [
			{icon: ['fab', 'whatsapp'], info: '+44 7521 563050'},
			{icon: ['fab', 'weixin'], info: '3703829230'},
			{icon: ['fas', 'phone'], info: '+020 5131 13513'},
			{icon: ['fas', 'map-marker-alt'], info: '21 Carnaby Street, Soho, W1F 7DA'}
		],
		dateTimeConfig: {
			enableTime: true,
			altInput: true
		}
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
