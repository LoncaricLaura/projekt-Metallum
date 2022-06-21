<template>
	<section
		v-if="imgs"
		class="slider-products u-flex u-flex-ai--c u-flex-jc--c ptb-main max-width"
	>
		<div class="u-flex u-flex-fd--c slider-image">
			<splide
				ref="mainSlider"
				:options="slider"
				class="main__slider"
			>
				<splide-slide
					v-for="(img, i) in imgs"
					:key="i"
					class="slide__track"
				>
					<img
						:src="require(`~/assets/img/products/pletivo/image-${img}.jpg`)"
						:data-splide-lazy="require(`~/assets/img/products/pletivo/image-${img}.jpg`)"
					>
				</splide-slide>
			</splide>

			<splide
				ref="sliderThumb"
				:options="sliderThumb"
				class="thumb__slider"
			>
				<splide-slide
					v-for="(img, i) in imgs"
					:key="i"
					class="slide__track"
				>
					<img
						:src="require(`~/assets/img/products/pletivo/image-${img}.jpg`)"
						:data-splide-lazy="require(`~/assets/img/products/pletivo/image-${img}.jpg`)"
					>
				</splide-slide>
			</splide>
		</div>
		<img
			src="~/assets/img/nofollow/close.png"
			class="close mr-xl mt-xl"
			@click="$emit('close')"
		>
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

				/*
				 * lazyLoad: 'nearby',
				 * rewind: true,
				 */
				perPage: 1,

				//focus: 'center',
				pagination: false,
				//width: 500

				//perMove: 1,
				arrows: false
			},

			sliderThumb: {
				type: 'loop',
				gap: 40,
				rewind: true,
				pagination: false,
				perMove: 1,
				arrows: true,
				isNavigation: true,
				perPage: 5,
				arrowPath: 'M14.9999 7H2.74994L7.99994 12.25L7.33594 13L0.835938 6.5L7.33594 0L7.99994 0.75L2.74994 6H14.9999V7Z',
				fill: 'white',
				breakpoints: {
					600: {
						fixedWeight: 60,
						fixedHeight: 44
					}
				}
			}
		};
	},

	mounted() {
		//	this as any.$refs.mainSlider.sync(this as any.$refs.sliderThumb.splide);
	}
});
</script>

<style lang="scss" scoped>
.slider-products {
	padding-bottom: 80px;
}
.close {
	position: absolute;
	right: 0;
	top: 0;
	height: 25px;
	cursor: pointer;
}
</style>
