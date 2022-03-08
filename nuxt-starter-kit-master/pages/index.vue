<template>
	<main class="main">
		<div class="first-section center">
			<h1 class="fs-xxl">
				{{ $config.appName }}
			</h1>
		</div>
		<div class="black-section">
			<button
				class="btn"
				type="button"
				@click="$scrollIntoView('.yellow-section')"
			>
				CLICK ME
			</button>
		</div>
		<div class="yellow-section" />
	</main>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	head() {
		return {
			title: this.$config.appName + ' - Lorem Ipsum',
			meta: [
				{
					hid: 'og:title',
					property: 'og:title',
					content: this.$config.appName + ' - Lorem Ipsum'
				},
				{
					hid: 'twitter:card',
					name: 'twitter:card',
					content: 'summary_large_image'
				},
				{
					hid: 'description',
					name: 'description',
					content: 'Project description'
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: 'Project description'
				},
				{
					hid: 'og:url',
					property: 'og:url',
					content: this.$config.appUrl + this.$nuxt.$route.fullPath
				}
			]
		};
	}
});
</script>

<style lang="scss" scoped>
.first-section {
  height: 100vh;
}
.black-section {
  background: black;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background: #fff;
    padding: 15px;
  }
}
.yellow-section {
  background: yellow;
  height: 100vh;
}
</style>
