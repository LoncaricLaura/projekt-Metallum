<template>
	<div class="contact u-flex u-flex-fd--r pr-6xl">
		<div class="contact__map u-flex">
			<GmapMap :center="{ lat: 45.19993, lng: 14.05346 }" :zoom="12" style="width: 100%; height: 877px"> </GmapMap>
		</div>
		<!--<img src="~/assets/img/contact/map.png" class="contact__map u-flex" />-->
		<div class="contact__box u-flex u-flex-fd--r u-flex-ai--fs">
			<div class="u-flex u-flex-fd--c u-flex-jc--sb">
				<div class="contact__adress fs-base">
					<div class="pb-md fs-md">{{ $t('footer.address.title') }}</div>
					<p>{{ $t('footer.address.street') }}</p>
					<p>{{ $t('footer.address.city') }}</p>
					<p>{{ $t('footer.address.cntry') }}</p>
				</div>

				<div class="contact_time pt-4xl fs-base">
					<div class="pb-md fs-md">{{ $t('footer.time.title') }}</div>
					<p class="">{{ $t('footer.time.day1') }}</p>
					<p>{{ $t('footer.time.hour') }}</p>
					<p>{{ $t('footer.time.day2') }}</p>
					<p>{{ $t('footer.time.hour2') }}</p>
				</div>
				<div class="contact__mail fs-md pt-4xl">
					{{ $t('footer.mail.title') }}
					<p class="footer--text4 pr-3xl fs-base pt-md">{{ $t('footer.mail.email') }}</p>
				</div>
				<div class="contact__tel fs-md pt-4xl">
					{{ $t('footer.phone.title') }}
					<p class="fs-base pt-md">{{ $t('footer.phone.numb') }}</p>
				</div>
			</div>
			<form @submit.prevent="sendMail" class="contact__form u-flex u-flex-fd--c">
				<input id="name" v-model="name" type="text" required maxlength="50" placeholder="Ime i prezime" class="fs-base pb-xs" />

				<input id="name" v-model="company" type="text" required maxlength="50" placeholder="naziv tvrtke" class="fs-base pb-xs" />

				<input id="email" v-model="email" type="email" required maxlength="50" placeholder="mail" class="fs-base ptb-xs" />

				<input id="email" v-model="telephone" type="text" required maxlength="50" placeholder="telefon (nije obavezno)" class="fs-base ptb-xs" />

				<!--<label for="message">Poruka opis terena i specifikacije</label> -->
				<textarea id="message" v-model="message" required rows="4" placeholder="Poruka opis terena i specifikacije" class="fs-base ptb-xs" />

				<label class="contact__checkbox u-flex">
					<input type="checkbox" required class="mr-md mt-xxs" />
					Pročitao/la sam i prihvaćam pravila o zaštiti osobnih podataka
				</label>

				<button type="submit" class="btn btn--primary">POŠALJI</button>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		name: '',
		company: '',
		email: '',
		telephone: '',
		message: ''
	}),

	mounted() {
		this.initRecaptcha();
	},

	beforeUnmount() {
		this.$recaptcha.destroy();
	},

	methods: {
		async initRecaptcha() {
			try {
				await this.$recaptcha.init();
			} catch (e) {
				this.handleErrorState(e.message);
			}
		},

		async sendMail() {
			try {
				const recaptchaToken = await this.$recaptcha.execute('submit');
				const recaptchaResponse = await this.verifyRecaptchaResponse(recaptchaToken);

				if (!recaptchaResponse?.data?.data?.success) {
					this.handleErrorState('Invalid reCAPTCHA verification.');

					return;
				}
			} catch (e) {
				this.handleErrorState('Invalid reCAPTCHA verification.');

				return;
			}

			try {
				const response = await this.$mail.send({
					replyTo: {
						name: this.name,
						address: this.email
					},
					subject: 'Contact form',
					html: this.getMailBody()
				});

				if (response !== 'OK') {
					this.handleErrorState('Error sending message.');
				}
			} catch (e) {
				this.handleErrorState('Error sending message.');
			}

			this.name = this.email = this.message = '';
		},

		async verifyRecaptchaResponse(recaptchaToken) {
			const response = await this.$axios.post('/api/verify-recaptcha', {
				response: recaptchaToken
			});

			return response;
		},

		handleErrorState(message) {
			alert(message);
		},

		getMailBody() {
			return `
				<b>From:</b> ${this.name}<br>
				<b>E-mail:</b> <a href="mailto:${this.email}">${this.email}</a><br>
				<b>Message:</b><br>${this.message}
			`;
		}
	}
};
</script>

<style lang="scss" scoped>
.contact {
	color: $iron;
	padding-top: 130px;
	&__map {
		width: 100%;
		height: 100%;
	}

	&__box {
		padding-top: 110px;
		margin-left: 125px;
		justify-content: end;
		width: 100%;
	}
	p,
	textarea {
		font-family: $ff-sans;
		color: $iron80;
	}
	&__mail,
	&__tel {
		p {
			text-decoration: underline;
		}
	}
	&__form {
		font-family: $ff-sans;
		gap: 20px;
		width: 100%;
		input,
		textarea {
			border-bottom: 1px;
			border-style: solid;
			border-color: $oxfordBlue;
			border-top: 0;
			border-left: 0;
			border-right: 0;
		}
		.btn {
			margin-top: 100px;
		}
	}
}

@media (max-width: 1450px) {
	.contact {
		&__box {
			margin-left: 40px;
		}
	}
}

@media (max-width: 1350px) {
	.contact {
		flex-direction: column;
		width: 100%;
		padding-right: 0;
		&__box {
			padding-right: 50px;
			padding-left: 50px;
			padding-bottom: 110px;
			margin-left: 0;

			//padding-right: 80px;
		}
	}
}

@media (max-width: 550px) {
	.contact {
		&__box {
			flex-direction: column;
			padding-right: 24px;
			padding-left: 24px;
		}
		&__form {
			padding-top: 60px;
		}
	}
}
</style>
