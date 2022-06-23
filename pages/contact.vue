<template>
	<div class="contact u-flex u-flex-fd--r pr-6xl">
		<div class="contact__map u-flex">
			<GmapMap
				:center="{ lat: 45.19993, lng: 14.05346 }"
				:zoom="12"
				:options="{ styles }"
				style="width: 100%; height: 877px;"
			>
				<GmapMarker :position="{ lat: 45.19993, lng: 14.05346 }" />
			</GmapMap>
		</div>
		<!--<img src="~/assets/img/contact/map.png" class="contact__map u-flex" />-->
		<div class="contact__box u-flex u-flex-fd--r u-flex-ai--fs">
			<div class="u-flex u-flex-fd--c u-flex-jc--sb">
				<div class="contact__adress fs-base">
					<div class="pb-md fs-md">
						{{ $t('footer.address.title') }}
					</div>
					<p>{{ $t('footer.address.street') }}</p>
					<p>{{ $t('footer.address.city') }}</p>
					<p>{{ $t('footer.address.cntry') }}</p>
				</div>

				<div class="contact_time pt-4xl fs-base">
					<div class="pb-md fs-md">
						{{ $t('footer.time.title') }}
					</div>
					<p class="">
						{{ $t('footer.time.day1') }}
					</p>
					<p>{{ $t('footer.time.hour') }}</p>
					<p>{{ $t('footer.time.day2') }}</p>
					<p>{{ $t('footer.time.hour2') }}</p>
				</div>
				<div class="contact__mail fs-md pt-4xl">
					{{ $t('footer.mail.title') }}
					<p class="footer--text4 pr-3xl fs-base pt-md">
						<a href="mailto:metallum@metallum.hr">{{ $t('footer.mail.email') }}</a>
					</p>
				</div>
				<div class="contact__tel fs-md pt-4xl">
					{{ $t('footer.phone.title') }}
					<p class="fs-base pt-md">
						<a href="tel:+385 52 869 006">{{ $t('footer.phone.numb') }}</a>
					</p>
				</div>
			</div>
			<form
				class="contact__form u-flex u-flex-fd--c"
				@submit.prevent="sendMail"
			>
				<input
					id="name"
					v-model="name"
					type="text"
					required
					maxlength="50"
					:placeholder="$t('contact.input_name')"
					class="fs-base pb-xs"
				>

				<input
					id="name"
					v-model="company"
					type="text"
					required
					maxlength="50"
					:placeholder="$t('contact.input_company')"
					class="fs-base pb-xs"
				>

				<input
					id="email"
					v-model="email"
					type="email"
					required
					maxlength="50"
					:placeholder="$t('contact.input_email')"
					class="fs-base ptb-xs"
				>

				<input
					id="email"
					v-model="telephone"
					type="text"
					required
					maxlength="50"
					:placeholder="$t('contact.input_tel')"
					class="fs-base ptb-xs"
				>

				<!--<label for="message">Poruka opis terena i specifikacije</label> -->
				<textarea
					id="message"
					v-model="message"
					required
					rows="4"
					:placeholder="$t('contact.input_mess')"
					class="fs-base ptb-xs"
				/>

				<label class="contact__checkbox u-flex">
					<input
						type="checkbox"
						required
						class="mr-md mt-xxs"
					>
					{{ $t('contact.checkbox') }}
				</label>

				<button
					type="submit"
					class="btn btn--primary"
				>
					{{ $t('contact.send') }}
				</button>
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
		message: '',
		styles: [
			{
				featureType: 'all',
				elementType: 'geometry',
				stylers: [
					{
						visibility: 'on'
					}
				]
			},
			{
				featureType: 'all',
				elementType: 'labels',
				stylers: [
					{
						visibility: 'off'
					},
					{
						color: '#173a64'
					}
				]
			},
			{
				featureType: 'all',
				elementType: 'labels.text',
				stylers: [
					{
						visibility: 'on'
					}
				]
			},
			{
				featureType: 'all',
				elementType: 'labels.text.fill',
				stylers: [
					{
						visibility: 'on'
					},
					{
						color: '#151515'
					}
				]
			},
			{
				featureType: 'all',
				elementType: 'labels.text.stroke',
				stylers: [
					{
						visibility: 'simplified'
					},
					{
						color: '#ffffff'
					}
				]
			},
			{
				featureType: 'administrative',
				elementType: 'all',
				stylers: [
					{
						visibility: 'on'
					}
				]
			},
			{
				featureType: 'landscape',
				elementType: 'all',
				stylers: [
					{
						color: '#d1d8e0'
					},
					{
						lightness: -7
					}
				]
			},
			{
				featureType: 'poi',
				elementType: 'all',
				stylers: [
					{
						visibility: 'off'
					}
				]
			},
			{
				featureType: 'poi.business',
				elementType: 'all',
				stylers: [
					{
						color: '#fae122'
					},
					{
						lightness: 38
					},
					{
						visibility: 'off'
					}
				]
			},
			{
				featureType: 'poi.government',
				elementType: 'all',
				stylers: [
					{
						color: '#9e5916'
					},
					{
						lightness: 46
					},
					{
						visibility: 'off'
					}
				]
			},
			{
				featureType: 'poi.medical',
				elementType: 'all',
				stylers: [
					{
						visibility: 'off'
					}
				]
			},
			{
				featureType: 'poi.medical',
				elementType: 'geometry.fill',
				stylers: [
					{
						color: '#813033'
					},
					{
						lightness: 38
					},
					{
						visibility: 'off'
					}
				]
			},
			{
				featureType: 'poi.park',
				elementType: 'all',
				stylers: [
					{
						color: '#645c20'
					},
					{
						lightness: 39
					},
					{
						visibility: 'off'
					}
				]
			},
			{
				featureType: 'poi.school',
				elementType: 'all',
				stylers: [
					{
						color: '#a95521'
					},
					{
						lightness: 35
					},
					{
						visibility: 'off'
					}
				]
			},
			{
				featureType: 'poi.sports_complex',
				elementType: 'all',
				stylers: [
					{
						color: '#9e5916'
					},
					{
						lightness: 32
					},
					{
						visibility: 'off'
					}
				]
			},
			{
				featureType: 'road',
				elementType: 'all',
				stylers: [
					{
						color: '#173a64'
					},
					{
						lightness: '0'
					}
				]
			},
			{
				featureType: 'road.local',
				elementType: 'geometry.fill',
				stylers: [
					{
						color: '#173a64'
					},
					{
						weight: 1.3
					},
					{
						visibility: 'on'
					},
					{
						lightness: '0'
					}
				]
			},
			{
				featureType: 'road.local',
				elementType: 'geometry.stroke',
				stylers: [
					{
						color: '#f19f53'
					},
					{
						lightness: -10
					},
					{
						visibility: 'off'
					}
				]
			},
			{
				featureType: 'transit',
				elementType: 'all',
				stylers: [
					{
						lightness: 38
					},
					{
						visibility: 'off'
					}
				]
			},
			{
				featureType: 'transit.line',
				elementType: 'all',
				stylers: [
					{
						color: '#813033'
					},
					{
						lightness: 22
					},
					{
						visibility: 'off'
					}
				]
			},
			{
				featureType: 'transit.station',
				elementType: 'all',
				stylers: [
					{
						visibility: 'off'
					}
				]
			},
			{
				featureType: 'water',
				elementType: 'all',
				stylers: [
					{
						saturation: '0'
					},
					{
						gamma: '1.35'
					},
					{
						lightness: '0'
					},
					{
						visibility: 'on'
					},
					{
						color: '#3377a3'
					}
				]
			}
		]
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
		margin-left: 130px;
		justify-content: end;
		width: 100%;
	}
	p, a,
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
			border-color: $oxford-blue;
			border-top: 0;
			border-left: 0;
			border-right: 0;
			border-bottom: 1px solid $oxford-blue;
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
			padding-top: 80px;
		}
		&__form {
			padding-top: 60px;
		}
	}

}
</style>
