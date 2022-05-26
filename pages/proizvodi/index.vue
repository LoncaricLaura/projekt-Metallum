<template>
	<div class="product pt-footer">
		<ProductCard :products="products" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			products: [
				{
					img: 'fence_blue_1',
					title: this.$t('products.knit.title'),
					text: this.$t('products.knit.desc'),
					button: '/pletivo'
				},
				{
					img: 'fence_blue_1',
					title: this.$t('products.mesh.title'),
					text: this.$t('products.mesh.desc'),
					button: 'valovita-mreza'
				},
				{
					img: 'fence_blue_1',
					title: this.$t('products.pillars.title'),
					text: this.$t('products.pillars.desc'),
					button: 'stupovi'
				},
				{
					img: 'Barbed-Wire-Fence.G03',
					title: this.$t('products.panel.title'),
					text: this.$t('products.panel.desc'),
					button: 'panelni-sustav'
				},
				{
					img: 'Barbed-Wire-Fence.G03',
					title: this.$t('products.rail.title'),
					text: this.$t('products.rail.desc'),
					button: 'pruzni-sustav'
				},
				{
					img: 'Barbed-Wire-Fence.G03',
					title: this.$t('products.gabions.title'),
					text: this.$t('products.gabions.desc'),
					button: 'ogradni-gabioni'
				},
				{
					img: 'fence_blue_door',
					title: this.$t('products.doors.title'),
					text: this.$t('products.doors.desc'),
					button: 'vrata'
				},
				{
					img: 'fence_blue_draft',
					title: this.$t('products.drafting.title'),
					text: this.$t('products.drafting.desc'),
					button: 'izrada-po-nacrtu'
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped></style>
