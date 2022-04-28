<template>
	<div class="menu u-flex u-flex-fd--c mtb-xl ml-footer">
		<div class="u-flex u-flex-fd--r u-flex-ai--c u-flex-jc--sb">
			<NuxtLink :to="localePath('/Proizvodi')" class="menu--item fs-lg mtb-3xl">Proizvodi</NuxtLink>
		</div>
		<transition name="fadeFromUp">
			<div class="sub-menu u-flex u-flex-fd--c">
				<div class="sub-menu mb-xs mt-xs">
					<div class="u-flex u-flex-fd--r u-flex-ai--c u-flex-jc--sb menu--line fs-md">
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
							<NuxtLink :to="localePath('/proizvodi/pletivo/#uni-pletivo')" class="mtb-md">Univerzalno pletivo</NuxtLink>
							<NuxtLink :to="localePath('/proizvodi/pletivo/#plastificirano-pletivo')" class="mtb-md">Plastificirano pletivo</NuxtLink>
							<NuxtLink :to="localePath('/proizvodi/pletivo/#farmer-pletivo')" class="mtb-md">Farmer pletivo</NuxtLink>
							<NuxtLink :to="localePath('/proizvodi/pletivo/#vareno-pletivo')" class="mtb-md">Vareno plastificirano pletivo</NuxtLink>
							<NuxtLink :to="localePath('/proizvodi/pletivo/#pribor')" class="mtb-md">Pribor</NuxtLink>
							<NuxtLink :to="localePath('/proizvodi/pletivo/#mreze')" class="mtb-md">Mreže i ostala oprema za sportske objekte</NuxtLink>
						</div>
					</transition>
				</div>
				<div class="sub-menu mb-xxs mt-xs menu--line fs-md"><NuxtLink :to="localePath('/proizvodi/valovit-mreza')">Valovita (vibro) mreža</NuxtLink></div>
				<div class="sub-menu mtb-sm menu--line fs-md"><NuxtLink :to="localePath('/proizvodi/stupovi')">Stupovi (kosnici, konzole, prečke)</NuxtLink></div>
				<div class="sub-menu mb-sm mt-xxs">
					<div class="u-flex u-flex-fd--r u-flex-ai--c u-flex-jc--sb menu--line fs-md">
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
							<NuxtLink :to="localePath('/proizvodi/panelni-sustav/panel-m3-5mm')" class="mtb-md">Panel M3 5mm</NuxtLink>
							<NuxtLink :to="localePath('/proizvodi/panelni-sustav/panel-m3-4mm')" class="mtb-md">Panel M3 4mm</NuxtLink>
							<NuxtLink :to="localePath('/proizvodi/panelni-sustav/panel-m2-6-5-6-mm')" class="mtb-md">Panel M2 6-5-6 mm</NuxtLink>
							<NuxtLink :to="localePath('/proizvodi/panelni-sustav/panel-m2-8-6-8-mm')" class="mtb-md">Panel M2 8-6-8 mm</NuxtLink>
							<NuxtLink :to="localePath('/proizvodi/panelni-sustav/stup-metallum')" class="mtb-md">Stup Metallum</NuxtLink>
							<NuxtLink :to="localePath('/proizvodi/panelni-sustav/stup-omega')" class="mtb-md">Stup omega</NuxtLink>
							<NuxtLink :to="localePath('/proizvodi/panelni-sustav/stup-sport')" class="mtb-md">Stup sport</NuxtLink>
							<NuxtLink :to="localePath('/proizvodi/panelni-sustav/sjenila-za-privatnost')" class="mtb-md">Sjenila za privatnost</NuxtLink>
						</div>
					</transition>
				</div>
				<div class="sub-menu mb-sm mt-xxs menu--line fs-md"><NuxtLink :to="localePath('/proizvodi/pruzni-sustav')">Pružni sustavi</NuxtLink></div>
				<div class="sub-menu mb-sm mt-xxs menu--line fs-md"><NuxtLink :to="localePath('/proizvodi/ogradni-gabioni')">Ogradni gabioni</NuxtLink></div>
				<div class="sub-menu mt-xxs">
					<div class="u-flex u-flex-fd--r u-flex-ai--c u-flex-jc--sb menu--line fs-md">
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
							<NuxtLink :to="localePath('/vrata/pjesacka-vrata')" class="mtb-md">Pješačka vrata</NuxtLink>
							<NuxtLink :to="localePath('/vrata/krilna-vrata')" class="mtb-md">Krilna vrata</NuxtLink>
							<NuxtLink :to="localePath('/vrata/klizna-vrata')" class="mtb-md">Klizna vrata</NuxtLink>
							<NuxtLink :to="localePath('/vrata/samonosiva-vrata')" class="mtb-md">Samonosiva vrata</NuxtLink>
							<NuxtLink :to="localePath('/vrata/dodatna-oprema')" class="mtb-md">Dodatna oprema za vrata</NuxtLink>
						</div>
					</transition>
				</div>
				<div class="sub-menu mb-sm mt-xxs menu--bline">
					<div class="u-flex u-flex-fd--r u-flex-ai--c u-flex-jc--sb menu--line fs-md">
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
							<NuxtLink :to="localePath('/vrata/izrada-po-nacrtu/zastitna-ograda')" class="mtb-md">Zaštitna pješačka ograda</NuxtLink>
							<NuxtLink :to="localePath('/vrata/izrada-po-nacrtu/vanstandardna-ograda')" class="mtb-md">Vanstandardna ograda</NuxtLink>
						</div>
					</transition>
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
		padding-top: 25px;
		padding-bottom: 5px;
	}
	&--bline {
		border-style: solid;
		border-color: $iron20;
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
</style>
