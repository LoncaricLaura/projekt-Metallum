<template>
	<div class="menu u-flex u-flex-fd--c mtb-xl ml-footer">
		<div class="u-flex u-flex-fd--r u-flex-ai--c u-flex-jc--sb">
			<NuxtLink :to="localePath('/Proizvodi')" class="menu--item fs-lg mtb-xl">Proizvodi</NuxtLink>
			<div class="u-flex u-flex-ai--c hamburger" @click="setActiveCategory('proizvodi')" :class="{ active: activeCategory == 'proizvodi' }">
				<div class="hamb-btn">
					<div class="hamb-line" />
					<div class="hamb-line" />
				</div>
			</div>
		</div>
		<transition name="fadeFromUp">
			<div class="sub-menu u-flex u-flex-fd--c" v-show="activeCategory === 'proizvodi'">
				<div class="sub-menu mb-xs mt-xs">
					<div class="u-flex u-flex-fd--r u-flex-ai--c u-flex-jc--sb fs-md">
						<NuxtLink :to="localePath('/proizvodi/pletivo')">Pletivo</NuxtLink>
					</div>
				</div>
				<div class="sub-menu mb-xxs mt-xs fs-md"><NuxtLink :to="localePath('/proizvodi/valovit-mreza')">Valovita (vibro) mreža</NuxtLink></div>
				<div class="sub-menu mtb-sm fs-md"><NuxtLink :to="localePath('/proizvodi/stupovi')">Stupovi (kosnici, konzole, prečke)</NuxtLink></div>
				<div class="sub-menu mb-sm mt-xxs">
					<div class="u-flex u-flex-fd--r u-flex-ai--c u-flex-jc--sb fs-md">
						<NuxtLink :to="localePath('/proizvodi/panelni-sustav')">Panelni sustav</NuxtLink>
					</div>
				</div>
				<div class="sub-menu mb-sm mt-xxs fs-md"><NuxtLink :to="localePath('/proizvodi/pruzni-sustav')">Pružni sustavi</NuxtLink></div>
				<div class="sub-menu mb-sm mt-xxs fs-md"><NuxtLink :to="localePath('/proizvodi/ogradni-gabioni')">Ogradni gabioni</NuxtLink></div>
				<div class="sub-menu mt-xxs">
					<div class="u-flex u-flex-fd--r u-flex-ai--c u-flex-jc--sb fs-md">
						<NuxtLink :to="localePath('/proizvodi/vrata')">Vrata</NuxtLink>
					</div>
				</div>
				<div class="sub-menu mb-sm mt-xxs">
					<div class="u-flex u-flex-fd--r u-flex-ai--c u-flex-jc--sb fs-md">
						<NuxtLink :to="localePath('/proizvodi/izrada-po-nacrtu')">Izrada po nacrtu</NuxtLink>
					</div>
				</div>
			</div>
		</transition>

		<div class="u-flex u-flex-fd--r u-flex-ai--c u-flex-jc--sb menu--line">
			<NuxtLink :to="localePath('/Proizvodi')" class="menu--item fs-lg mtb-xl">Vrsta nekretnine</NuxtLink>
			<div class="u-flex u-flex-ai--c hamburger" @click="setActiveCategory('nekretnine')" :class="{ active: activeCategory == 'nekretnine' }">
				<div class="hamb-btn">
					<div class="hamb-line" />
					<div class="hamb-line" />
				</div>
			</div>
		</div>
		<transition name="fadeFromUp">
			<div class="sub-menu u-flex u-flex-fd--c" v-show="activeCategory === 'nekretnine'">
				<div class="sub-menu mb-xs mt-xs">
					<div class="u-flex u-flex-fd--r u-flex-ai--c u-flex-jc--sb fs-md">
						<NuxtLink :to="localePath('/proizvodi/pletivo')">Ville</NuxtLink>
					</div>
				</div>
				<div class="sub-menu mb-xxs mt-xs fs-md"><NuxtLink :to="localePath('/proizvodi/valovit-mreza')">Novogradnja</NuxtLink></div>
				<div class="sub-menu mtb-sm fs-md"><NuxtLink :to="localePath('/proizvodi/stupovi')">Industrija</NuxtLink></div>
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
			this.activeCategory == category ? (this.activeCategory = '') : (this.activeCategory = category);
		}
	}
});
</script>

<style lang="scss" scoped>
.menu {
	position: absolute;
	font-family: $ff-serif;
	color: $iron;
	width: 19%;
	height: 100%;
	z-index: 50;

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
}
.hamburger {
	display: flex;
	z-index: 60;
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

@media (max-width: 1800px) {
	.menu {
		margin-left: 50px;
	}
}

@media (max-width: 1550px) {
	.menu {
		display: none;
	}
}
</style>
