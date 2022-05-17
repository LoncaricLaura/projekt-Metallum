<template>
	<section v-if="imgs" class="product-slider-mobile ptb-2xl">
		<div class="u-flex slider-image">
			<splide :options="slider" class="main__slider">
				<splide-slide v-for="(img, i) in imgs" :key="i" class="slide__track">
					<img :src="require(`/static/img/image-${img}.jpg`)" :data-splide-lazy="require(`/static/img/image-${img}.jpg`)" />
				</splide-slide>
			</splide>
		</div>
	</section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'Slider',
	props: {
		imgs: {
			type: Array,
			default: () => ['1']
		}
	},
	data() {
		return {
			slider: {
				type: 'loop',
				lazyLoad: 'nearby',
				rewind: true,
				perPage: 1,
				focus: 'center',
				pagination: 'slider',

				perMove: 1,
				arrows: false,
				width: '100vw'
			}
		};
	}
});
</script>

<style lang="scss" scoped></style>
