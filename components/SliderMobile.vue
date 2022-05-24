<template>
	<section v-if="services" class="slider-services pt-3xl pb-6xl">
		<div class="u-flex slider-image">
			<splide :options="slider" class="main__slider">
				<splide-slide v-for="(service, i) in services" :key="i" class="slide__track">
					<img :src="require(`~/assets/img/index/image-${service.img}.png`)" :data-splide-lazy="require(`~/assets/img/index/image-${service.img}.png`)" />
					<p class="slide__track--title">{{ service.title }}</p>
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
		services: {
			type: Array,
			default: () => ['1']
		}
	},
	data() {
		return {
			slider: {
				type: 'loop',
				lazyLoad: 'nearby',
				//padding: '30rem',
				rewind: false,
				perPage: 1,

				focus: 'center',
				pagination: 'slider',
				perMove: 1,
				arrows: true,

				arrowPath: 'M14.9999 7H2.74994L7.99994 12.25L7.33594 13L0.835938 6.5L7.33594 0L7.99994 0.75L2.74994 6H14.9999V7Z',
				fill: 'white'
			}
		};
	}
});
</script>

<style lang="scss" scoped></style>
