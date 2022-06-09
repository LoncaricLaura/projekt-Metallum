<template>
	<div class="menu u-flex u-flex-fd--c mtb-xl">
		<div class="u-flex u-flex-fd--r u-flex-ai--c u-flex-jc--sb">
			<NuxtLink :to="localePath('/Usluge')" class="menu--item fs-lg mtb-3xl">{{ $t('services.menu.title') }}</NuxtLink>
		</div>

		<div class="sub-menu u-flex u-flex-fd--c">
			<div class="u-flex u-flex-fd--r u-flex-ai--c u-flex-jc--sb menu--line mb-sm fs-md">
				<NuxtLink :to="localePath('/Usluge/#izvid-terena')">{{ $t('services.menu.submenu.field') }}</NuxtLink>
			</div>
			<div class="sub-menu mb-xxs mt-xs menu--line fs-md">
				<NuxtLink :to="localePath('/Usluge/#izrada-nacrtne')">{{ $t('services.menu.submenu.docs') }}</NuxtLink>
			</div>
			<div class="sub-menu mtb-sm menu--line fs-md">
				<NuxtLink :to="localePath('/Usluge/#prozivodnja-ograde-vrata')">{{ $t('services.menu.submenu.fence_door') }}</NuxtLink>
			</div>
			<div class="sub-menu mtb-sm menu--line fs-md">
				<NuxtLink :to="localePath('/usluge/#antikorozivna-zastita')">{{ $t('services.menu.submenu.protection') }}</NuxtLink>
			</div>
			<div class="sub-menu mtb-sm menu--line fs-md">
				<NuxtLink :to="localePath('/usluge/#dijamantno-busenje')">{{ $t('services.menu.submenu.drilling') }}</NuxtLink>
			</div>
			<div class="sub-menu mtb-sm menu--line fs-md">
				<NuxtLink :to="localePath('/usluge/#montaza-ograde-vrata')">{{ $t('services.menu.submenu.installation') }}</NuxtLink>
			</div>
			<div class="sub-menu mtb-sm menu--line fs-md">
				<NuxtLink :to="localePath('/usluge/#automatizacija-vrata')">{{ $t('services.menu.submenu.automation') }}</NuxtLink>
			</div>
			<div class="sub-menu mtb-xs menu--bline fs-md">
				<NuxtLink :to="localePath('/usluge/#servisiranje')">{{ $t('services.menu.submenu.service') }}</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	data() {
		return {
			visible: false,
			activeCategory: '',
			productsMenu: false
		};
	},
	mounted() {
		window.addEventListener('scroll', e => {
			requestAnimationFrame(() => {
				const scrollPos = window.scrollY;

				if (scrollPos > 200) {
					this.visible = true;
				} else {
					this.visible = false;
				}
			});
		});
	},
	methods: {
		setActiveCategory(category: any) {
			this.activeCategory == category ? (this.activeCategory = '') : (this.activeCategory = category);
		}
	}
});
</script>

<style lang="scss" scoped>
.menu {
	position: relative;
	font-family: $ff-serif;
	color: $iron;
	width: 65%;
	height: 100%;
	//z-index: 50;
	top: 150px;

	&--nav {
		padding: 150px 40px;
		padding-bottom: 50px;
		width: 100%;
	}
	&--text {
		font-family: $ff-serif;
		font-size: 27px;
	}
	&--item:hover {
		text-decoration: underline;
	}
	&.open {
		display: flex;
	}
	&--line {
		border-style: solid;
		border-color: $iron20;
		border-left: 0;
		border-right: 0;
		border-block-end: 0px;
		padding-top: 25px;
		padding-bottom: 5px;
	}
	&--bline {
		border-style: solid;
		border-color: $iron20;
		border-left: 0;
		border-right: 0;
		border-bottom-right-radius: 1px;
		padding-bottom: 25px;
		padding-top: 25px;
	}
}
.sub-menu {
	font-family: $ff-sans;
	color: $iron;
	&--item {
		font-family: $ff-sans;
		font-size: 18px;
		line-height: 21.6px;
		letter-spacing: 0.1em;
		color: $iron80;
	}
}

@media (max-width: 1500px) {
	.menu {
		width: 100%;
		margin-top: 0;
	}
}
</style>
