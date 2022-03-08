<template>
	<main class="main" />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	head() {
		return {
			title: 'Page title | ' + this.$config.appName,
			meta: [
				{
					hid: 'og:title',
					property: 'og:title',
					content: 'Page title | ' + this.$config.appName
				},
				{
					hid: 'description',
					name: 'description',
					content: 'Page description'
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: 'Page description'
				},
				{
					hid: 'og:url',
					property: 'og:url',
					content: this.$config.appUrl + this.$nuxt.$route.fullPath
				}

				/*
				 * {
				 *   hid: 'og:image',
				 *   property: 'og:image',
				 *   content:
				 *     this.$config.appUrl + require('~/assets/img/image-name.jpg'),
				 * },
				 */
			]
		};
	}
});
</script>

<style lang="scss" scoped></style>
