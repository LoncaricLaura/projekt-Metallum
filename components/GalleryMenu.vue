<template>
	<div class="menu u-flex u-flex-fd--c">
		<div class="u-flex u-flex-fd--r u-flex-ai--c u-flex-jc--sb">
			<NuxtLink
				:to="localePath('/Proizvodi')"
				class="menu--item fs-md mtb-xl"
			>
				{{ $t('gallery.menu.products.title') }}
			</NuxtLink>
			<div
				class="u-flex u-flex-ai--c hamburger"
				:class="{ active: activeCategory == 'proizvodi' }"
				@click="setActiveCategory('proizvodi')"
			>
				<div class="hamb-btn">
					<div class="hamb-line" />
					<div class="hamb-line" />
				</div>
			</div>
		</div>
		<transition name="fadeFromUp">
			<div
				v-show="activeCategory === 'proizvodi'"
				class="sub-menu u-flex u-flex-fd--c"
			>
				<div class="sub-menu mb-xs">
					<div class="u-flex u-flex-fd--r u-flex-ai--c u-flex-jc--sb fs-base">
						<NuxtLink :to="localePath('/galerija/#pletivo')">
							{{ $t('gallery.menu.products.sub_knit') }}
						</NuxtLink>
					</div>
				</div>
				<div class="sub-menu mb-xxs mt-xs fs-base">
					<NuxtLink :to="localePath('/galerija/#valovit-mreza')">
						{{ $t('gallery.menu.products.sub_mesh') }}
					</NuxtLink>
				</div>
				<div class="sub-menu mtb-sm fs-base">
					<NuxtLink :to="localePath('/galerija/#stupovi')">
						{{ $t('gallery.menu.products.sub_pillars') }}
					</NuxtLink>
				</div>
				<div class="sub-menu mb-sm mt-xxs">
					<div class="u-flex u-flex-fd--r u-flex-ai--c u-flex-jc--sb fs-base">
						<NuxtLink :to="localePath('/proizvodi/panelni-sustav')">
							Panelni sustav
						</NuxtLink>
					</div>
				</div>
				<div class="sub-menu mb-sm mt-xxs fs-base">
					<NuxtLink :to="localePath('/proizvodi/pruzni-sustav')">
						{{ $t('gallery.menu.products.sub_panel') }}
					</NuxtLink>
				</div>
				<div class="sub-menu mb-sm mt-xxs fs-base">
					<NuxtLink :to="localePath('/proizvodi/ogradni-gabioni')">
						{{ $t('gallery.menu.products.sub_gabions') }}
					</NuxtLink>
				</div>
				<div class="sub-menu mt-xxs">
					<div class="u-flex u-flex-fd--r u-flex-ai--c u-flex-jc--sb fs-base">
						<NuxtLink :to="localePath('/proizvodi/vrata')">
							{{ $t('gallery.menu.products.sub_doors') }}
						</NuxtLink>
					</div>
				</div>
				<div class="sub-menu mt-sm mb-lg">
					<div class="u-flex u-flex-fd--r u-flex-ai--c u-flex-jc--sb fs-base">
						<NuxtLink :to="localePath('/proizvodi/izrada-po-nacrtu')">
							{{ $t('gallery.menu.products.sub_draft') }}
						</NuxtLink>
					</div>
				</div>
			</div>
		</transition>

		<div class="u-flex u-flex-fd--r u-flex-ai--c u-flex-jc--sb menu--line">
			<NuxtLink
				:to="localePath('/Proizvodi')"
				class="menu--item fs-md mtb-xl"
			>
				{{ $t('gallery.menu.property.title') }}
			</NuxtLink>
			<div
				class="u-flex u-flex-ai--c hamburger"
				:class="{ active: activeCategory == 'nekretnine' }"
				@click="setActiveCategory('nekretnine')"
			>
				<div class="hamb-btn">
					<div class="hamb-line" />
					<div class="hamb-line" />
				</div>
			</div>
		</div>
		<transition name="fadeFromUp">
			<div
				v-show="activeCategory === 'nekretnine'"
				class="sub-menu u-flex u-flex-fd--c"
			>
				<div class="sub-menu mb-xs">
					<div class="u-flex u-flex-fd--r u-flex-ai--c u-flex-jc--sb fs-base">
						<NuxtLink :to="localePath('/proizvodi/pletivo')">
							{{ $t('gallery.menu.property.sub_ville') }}
						</NuxtLink>
					</div>
				</div>
				<div class="sub-menu mb-xxs mt-xs fs-base">
					<NuxtLink :to="localePath('/proizvodi/valovit-mreza')">
						{{ $t('gallery.menu.property.sub_const') }}
					</NuxtLink>
				</div>
				<div class="sub-menu mtb-sm fs-base">
					<NuxtLink :to="localePath('/proizvodi/stupovi')">
						{{ $t('gallery.menu.property.sub_industry') }}
					</NuxtLink>
				</div>
			</div>
		</transition>
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
			this.activeCategory == category ? this.activeCategory = '' : this.activeCategory = category;
		}
	}
});
</script>

<style lang="scss" scoped>
.menu {
	position: relative;
	font-family: $ff-serif;
	color: $iron;
	width: 100%;
	height: 100%;

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
	a {
		font-family: $ff-sans;
		color: $iron80;
	}
}
.hamburger {
	display: flex;
	cursor: pointer;
	.hamb-line {
		width: 18px;
		height: 2px;
		margin: 3px;
		background-color: $iron;
		transition: all 0.6s;
		margin-right: 12px;
	}
	.hamb-line:nth-child(1) {
		width: 18px;
		height: 2px;
		margin: 3px;
		background-color: $iron;
		transition: all 0.6s;
		margin-right: 12px;
		transform: rotate(0deg) translateX(0px) translateY(5px);
	}
	.hamb-line:nth-child(2) {
		width: 18px;
		height: 2px;
		margin: 3px;
		background-color: $iron;
		transition: all 0.6s;
		margin-right: 12px;
		transform: rotate(90deg) translateX(0px) translateY(0px);
	}
}
.hamburger.active {
	.hamb-line:nth-child(1) {
		visibility: hidden;
		background-color: transparent;
	}
	.hamb-line:nth-child(2) {
		transform: rotate(0deg) translateX(0px) translateY(-3px);
		background-color: $iron;
	}
}

@media (max-width: 1650px) {
	.menu {
		display: flex;
		width: 100%;
	}
}
</style>
