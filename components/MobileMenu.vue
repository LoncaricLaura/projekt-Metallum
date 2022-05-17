<template>
	<div class="mobile-menu" :class="{ open: $store.state.openMenu }">
		<div class="mobile-menu--nav u-flex u-flex-fd--c">
			<div class="mobile-menu--text u-flex u-flex-fd--c">
				<div class="u-flex u-flex-fd--r u-flex-ai--c u-flex-jc--sb">
					<NuxtLink :to="localePath('/Proizvodi')" class="mobile-menu--item mb-xs">Proizvodi</NuxtLink>
					<div class="u-flex u-flex-ai--c hamburger" @click="productsMenu = !productsMenu">
						<div class="hamb-btn">
							<div class="hamb-line" />
							<div class="hamb-line" />
						</div>
					</div>
				</div>
				<transition name="fadeFromUp">
					<div class="sub-menu u-flex u-flex-fd--c" v-show="productsMenu">
						<div class="sub-menu mb-xs mt-xs">
							<div class="u-flex u-flex-fd--r u-flex-ai--c u-flex-jc--sb mobile-menu--line">
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
									<NuxtLink :to="localePath('/proizvodi/pletivo/#uni-pletivo')" class="mtb-sm">Univerzalno pletivo</NuxtLink>
									<NuxtLink :to="localePath('/proizvodi/pletivo/#plastificirano-pletivo')" class="mtb-sm">Plastificirano pletivo</NuxtLink>
									<NuxtLink :to="localePath('/proizvodi/pletivo/#farmer-pletivo')" class="mtb-sm">Farmer pletivo</NuxtLink>
									<NuxtLink :to="localePath('/proizvodi/pletivo/#vareno-pletivo')" class="mtb-sm">Vareno plastificirano pletivo</NuxtLink>
									<NuxtLink :to="localePath('/proizvodi/pletivo/#pribor')" class="mtb-sm">Pribor</NuxtLink>
									<NuxtLink :to="localePath('/proizvodi/pletivo/#mreže')" class="mtb-sm">Mreže i ostala oprema za sportske objekte</NuxtLink>
								</div>
							</transition>
						</div>
						<div class="sub-menu mb-xxs mt-xs mobile-menu--line"><NuxtLink :to="localePath('/proizvodi/valovita-mreza')">Valovita (vibro) mreža</NuxtLink></div>
						<div class="sub-menu mtb-sm mobile-menu--line"><NuxtLink :to="localePath('/proizvodi/stupovi')">Stupovi (kosnici, konzole, prečke)</NuxtLink></div>
						<div class="sub-menu mb-sm mt-xxs">
							<div class="u-flex u-flex-fd--r u-flex-ai--c u-flex-jc--sb mobile-menu--line">
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
									<NuxtLink :to="localePath('/proizvodi/panelni-sustav/#panel-m3-5mm')" class="mtb-sm">Panel M3 5mm</NuxtLink>
									<NuxtLink :to="localePath('/proizvodi/panelni-sustav/#panel-m3-4mm')" class="mtb-sm">Panel M3 4mm</NuxtLink>
									<NuxtLink :to="localePath('/proizvodi/panelni-sustav/#panel-m2-6-5-6-mm')" class="mtb-sm">Panel M2 6-5-6 mm</NuxtLink>
									<NuxtLink :to="localePath('/proizvodi/panelni-sustav/#panel-m2-8-6-8-mm')" class="mtb-sm">Panel M2 8-6-8 mm</NuxtLink>
									<NuxtLink :to="localePath('/proizvodi/panelni-sustav/#stup-metallum')" class="mtb-sm">Stup Metallum</NuxtLink>
									<NuxtLink :to="localePath('/proizvodi/panelni-sustav/#stup-omega')" class="mtb-sm">Stup omega</NuxtLink>
									<NuxtLink :to="localePath('/proizvodi/panelni-sustav/#stup-sport')" class="mtb-sm">Stup sport</NuxtLink>
									<NuxtLink :to="localePath('/proizvodi/panelni-sustav/#sjenila-za-privatnost')" class="mtb-sm">Sjenila za privatnost</NuxtLink>
								</div>
							</transition>
						</div>
						<div class="sub-menu mb-sm mt-xxs mobile-menu--line"><NuxtLink :to="localePath('/proizvodi/pruzni-sustav')">Pružni sustavi</NuxtLink></div>
						<div class="sub-menu mb-sm mt-xxs mobile-menu--line"><NuxtLink :to="localePath('/proizvodi/ogradni-gabioni')">Ogradni gabioni</NuxtLink></div>
						<div class="sub-menu mt-xxs">
							<div class="u-flex u-flex-fd--r u-flex-ai--c u-flex-jc--sb mobile-menu--line">
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
									<NuxtLink :to="localePath('/vrata/#pjesacka-vrata')" class="mtb-sm">Pješačka vrata</NuxtLink>
									<NuxtLink :to="localePath('/vrata/#krilna-vrata')" class="mtb-sm">Krilna vrata</NuxtLink>
									<NuxtLink :to="localePath('/vrata/#klizna-vrata')" class="mtb-sm">Klizna vrata</NuxtLink>
									<NuxtLink :to="localePath('/vrata/#samonosiva-vrata')" class="mtb-sm">Samonosiva vrata</NuxtLink>
									<NuxtLink :to="localePath('/vrata/#dodatna-oprema')" class="mtb-sm">Dodatna oprema za vrata</NuxtLink>
								</div>
							</transition>
						</div>
						<div class="sub-menu mb-sm mt-xxs mobile-menu--bline">
							<div class="u-flex u-flex-fd--r u-flex-ai--c u-flex-jc--sb mobile-menu--line">
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
									<NuxtLink :to="localePath('/vrata/izrada-po-nacrtu/#zastitna-ograda')" class="mtb-sm">Zaštitna pješačka ograda</NuxtLink>
									<NuxtLink :to="localePath('/vrata/izrada-po-nacrtu/#vanstandardna-ograda')" class="mtb-sm">Vanstandardna ograda</NuxtLink>
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
		&.open {
			display: flex;
		}
		&--line {
			border-style: solid;
			border-color: $metallum40;
			border-left: 0;
			border-right: 0;
			border-block-end: 0px;
			padding-top: 15px;
		}
		&--bline {
			border-style: solid;
			border-color: $metallum40;
			border-left: 0;
			border-right: 0;
			border-top: 0;
			border-bottom-right-radius: 1px;
			padding-bottom: 15px;
			padding-top: 12px;
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
