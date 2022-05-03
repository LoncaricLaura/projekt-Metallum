<template>
	<section v-if="imgs" class="slider-products ptb-main max-width">
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
				type: 'fade',
				lazyLoad: 'nearby',
				rewind: true,
				perPage: 1.5,

				focus: 'center',
				pagination: false,

				perMove: 1,
				arrows: false,

				arrowPath: 'M14.9999 7H2.74994L7.99994 12.25L7.33594 13L0.835938 6.5L7.33594 0L7.99994 0.75L2.74994 6H14.9999V7Z',
				fill: 'white',
				breakpoints: {
					1150: {
						perPage: 1,
						pagination: 'slider'
					}
				}
			},
			sliderThumb: {
				fixedWidth: 100,
				fixedHeight: 60,
				gap: 10,
				rewind: true,
				pagination: false,
				isNavigation: true,
				breakpoints: {
					600: {
						fixedWeight: 60,
						fixedHeight: 44
					},
				},
			}
		}
	},
});

</script>

<style lang="scss" scoped>

.slider-products {
	padding-bottom: 80px;
}

</style>
