<template>
	<div class="mobile-menu" :class="{ open: $store.state.openMenu }">
		<div class="mobile-menu--nav u-flex u-flex-fd--c">
			<div class="mobile-menu--text u-flex u-flex-fd--c">
				<div class="u-flex u-flex-fd--r u-flex-ai--c u-flex-jc--sb">
					<NuxtLink :to="localePath('/Proizvodi')" class="mobile-menu--item">Proizvodi</NuxtLink>
					<div class="u-flex u-flex-ai--c hamburger" @click="productsMenu = !productsMenu">
						<div class="hamb-btn">
							<div class="hamb-line" />
							<div class="hamb-line" />
						</div>
					</div>
				</div>
				<transition name="fadeFromUp">
					<div class="sub-menu u-flex u-flex-fd--c" v-show="productsMenu">
						<div class="sub-menu mtb-sm">
							<div class="u-flex u-flex-fd--r u-flex-ai--c u-flex-jc--sb">
								<NuxtLink :to="localePath('/proizvodi/pletivo')">Pletivo</NuxtLink>
								<div class="u-flex u-flex-ai--c hamburger" @click="setActiveCategory('pletivo')" :class="{ active: activeCategory == 'pletivo' }">
									<div class="hamb-btn">
										<div class="hamb-line" />
										<div class="hamb-line" />
									</div>
								</div>
							</div>
							<transition name="fadeFromUp">
								<div class="sub-menu--item u-flex u-flex-fd--c mt-sm" v-show="activeCategory === 'pletivo'">
									<div class="mtb-sm">Univerzalno pletivo</div>
									<div class="mtb-sm">Plastificirano pletivo</div>
									<div class="mtb-sm">Farmer pletivo</div>
									<div class="mtb-sm">Vareno plastificirano pletivo</div>
									<div class="mtb-sm">Pribor</div>
									<div class="mtb-sm">Mreže i ostala oprema za sportske objekte</div>
								</div>
							</transition>
						</div>
						<div class="sub-menu mb-sm">Valovita (vibro) mreža</div>
						<div class="sub-menu mtb-sm">Stupovi (kosnici, konzole, prečke)</div>
						<div class="sub-menu mtb-sm">
							<div class="u-flex u-flex-fd--r u-flex-ai--c u-flex-jc--sb">
								<NuxtLink :to="localePath('/proizvodi/panelni-sustav')">Panelni sustav</NuxtLink>
								<div class="u-flex u-flex-ai--c hamburger" @click="setActiveCategory('panelni')" :class="{ active: activeCategory == 'panelni' }">
									<div class="hamb-btn">
										<div class="hamb-line" />
										<div class="hamb-line" />
									</div>
								</div>
							</div>
							<transition name="fadeFromUp">
								<div class="sub-menu--item u-flex u-flex-fd--c mt-sm" v-show="activeCategory === 'panelni'">
									<NuxtLink :to="localePath('/proizvodi/panelni-sustav/panel-m3-5mm')" class="mtb-sm">Panel M3 5mm</NuxtLink>
									<NuxtLink :to="localePath('/proizvodi/panelni-sustav/panel-m3-4mm')" class="mtb-sm">Panel M3 4mm</NuxtLink>
									<NuxtLink :to="localePath('/proizvodi/panelni-sustav/panel-m2-6-5-6-mm')" class="mtb-sm">Panel M2 6-5-6 mm</NuxtLink>
									<NuxtLink :to="localePath('/proizvodi/panelni-sustav')" class="mtb-sm">Panel M2 8-6-8 mm</NuxtLink>
									<NuxtLink :to="localePath('/proizvodi/panelni-sustav')" class="mtb-sm">Stup Metallum</NuxtLink>
									<NuxtLink :to="localePath('/proizvodi/panelni-sustav')" class="mtb-sm">Stup omega</NuxtLink>
									<NuxtLink :to="localePath('/proizvodi/panelni-sustav')" class="mtb-sm">Stup sport</NuxtLink>
									<NuxtLink :to="localePath('/proizvodi/panelni-sustav')" class="mtb-sm">Sjenila za privatnost</NuxtLink>
								</div>
							</transition>
						</div>
						<div class="sub-menu mtb-sm">Pružni sustavi</div>
						<div class="sub-menu mtb-sm">Ogradni gabioni</div>
						<div class="sub-menu mtb-sm">
							<div class="u-flex u-flex-fd--r u-flex-ai--c u-flex-jc--sb">
								<NuxtLink :to="localePath('/proizvodi/vrata')">Vrata</NuxtLink>
								<div class="u-flex u-flex-ai--c hamburger" @click="setActiveCategory('vrata')" :class="{ active: activeCategory == 'vrata' }">
									<div class="hamb-btn">
										<div class="hamb-line" />
										<div class="hamb-line" />
									</div>
								</div>
							</div>
							<transition name="fadeFromUp">
								<div class="sub-menu--item u-flex u-flex-fd--c mt-sm" v-show="activeCategory === 'vrata'">
									<div class="mtb-sm">Pješačka vrata</div>
									<div class="mtb-sm">Krilna vrata</div>
									<div class="mtb-sm">Klizna vrata</div>
									<div class="mtb-sm">Samonosiva vrata</div>
									<div class="mtb-sm">Dodatna oprema za vrata</div>
								</div>
							</transition>
						</div>
						<div class="sub-menu mtb-sm">
							<div class="u-flex u-flex-fd--r u-flex-ai--c u-flex-jc--sb">
								<NuxtLink :to="localePath('/proizvodi/izrada-po-nacrtu')">Izrada po nacrtu</NuxtLink>
								<div class="u-flex u-flex-ai--c hamburger" @click="setActiveCategory('poNacrtu')" :class="{ active: activeCategory == 'poNacrtu' }">
									<div class="hamb-btn">
										<div class="hamb-line" />
										<div class="hamb-line" />
									</div>
								</div>
							</div>
							<transition name="fadeFromUp">
								<div class="sub-menu--item u-flex u-flex-fd--c mt-sm" v-show="activeCategory === 'poNacrtu'">
									<div class="mtb-sm">Zaštitna pješačka ograda</div>
									<div class="mtb-sm">Vanstandardna ograda</div>
								</div>
							</transition>
						</div>
					</div>
				</transition>
			</div>
			<NuxtLink :to="localePath('/Usluge')" class="mobile-menu--text mtb-md"><div class="mobile-menu--item">Usluge</div></NuxtLink>
			<NuxtLink :to="localePath('/Galerija')" class="mobile-menu--text mtb-md"><div class="mobile-menu--item">Galerija</div></NuxtLink>
			<NuxtLink :to="localePath('/Kontakt')" class="mobile-menu--text mtb-md"><div class="mobile-menu--item">Kontakt</div></NuxtLink>
			<div class="sub-menu--text mtb-md">HR | EN</div>
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
		toggleHam() {
			this.$store.commit('toggleOpen', 'openSubMenu');
			if (this.$store.state.openSubMenu) {
				document.body.classList.add('noscroll');
			} else {
				document.body.classList.remove('noscroll');
			}
		},
		setActiveCategory(category: any) {
			this.activeCategory == category ? (this.activeCategory = '') : (this.activeCategory = category);
		}
	}
});
</script>

<style lang="scss" scoped>
.mobile-menu {
	display: none;
}

@media (max-width: 1080px) {
	.mobile-menu {
		display: none;
		font-family: $ff-sans;
		color: $secondary-color;
		position: fixed;
		width: 100%;
		height: 100%;
		z-index: 50;
		top: 0;
		left: 0;
		background-color: $oxfordBlue;
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
	}
	.sub-menu {
		font-family: $ff-sans;
		font-size: 18px;
		&--item {
			font-family: $ff-serif;
			font-size: 12px;
			line-height: 21.6px;
			letter-spacing: 0.1em;
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
			background-color: $metallum0;
			transition: all 0.6s;
			margin-right: 12px;
		}
		.hamb-line:nth-child(1) {
			width: 18px;
			height: 2px;
			margin: 3px;
			background-color: $metallum0;
			transition: all 0.6s;
			margin-right: 12px;
			transform: rotate(0deg) translateX(0px) translateY(5px);
		}
		.hamb-line:nth-child(2) {
			width: 18px;
			height: 2px;
			margin: 3px;
			background-color: $metallum0;
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
			background-color: $metallum0;
		}
	}
}
</style>
