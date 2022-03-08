<template>
	<form @submit.prevent="sendMail">
		<label for="name">Your Name:</label>
		<input
			id="name"
			v-model="name"
			type="text"
			required
			maxlength="50"
		>

		<label for="email">Your E-mail:</label>
		<input
			id="email"
			v-model="email"
			type="email"
			required
			maxlength="50"
		>

		<label for="message">Message:</label>
		<textarea
			id="message"
			v-model="message"
			required
			rows="10"
		/>

		<label>
			<input
				type="checkbox"
				required
			>
			Accept <nuxt-link to="gdpr">GDPR</nuxt-link>
		</label>

		<button type="submit">
			Send
		</button>
	</form>
</template>

<script>
export default {
	data: () => ({
		name: '',
		email: '',
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
