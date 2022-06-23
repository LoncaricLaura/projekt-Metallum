<template>
	<div class="menu u-flex u-flex-fd--c mtb-xl ml-footer">
		<div class="u-flex u-flex-fd--r u-flex-ai--c u-flex-jc--sb">
			<NuxtLink
				:to="localePath('/Proizvodi')"
				class="menu--item fs-lg mtb-3xl"
			>
				{{ $t('header.products') }}
			</NuxtLink>
		</div>
		<transition name="fadeFromUp">
			<div class="sub-menu u-flex u-flex-fd--c">
				<div class="sub-menu mb-xs mt-xs">
					<div class="u-flex u-flex-fd--r u-flex-ai--c u-flex-jc--sb menu--line fs-md">
						<NuxtLink :to="localePath('/proizvodi/pletivo')">
							{{ $t('mobileMenu.knit_title') }}
						</NuxtLink>
						<div
							class="u-flex u-flex-ai--c hamburger"
							:class="{ active: activeCategory == 'pletivo' }"
							@click="setActiveCategory('pletivo')"
						>
							<div class="hamb-btn">
								<div class="hamb-line" />
								<div class="hamb-line" />
							</div>
						</div>
					</div>
					<transition name="fadeFromUp">
						<div
							v-show="activeCategory === 'pletivo'"
							class="sub-menu--item u-flex u-flex-fd--c mt-sm"
						>
							<NuxtLink
								:to="localePath('/proizvodi/pletivo/#uni-pletivo')"
								class="mtb-md"
							>
								{{ $t('mobileMenu.knit_submenu.uni_knit') }}
							</NuxtLink>
							<NuxtLink
								:to="localePath('/proizvodi/pletivo/#plastificirano-pletivo')"
								class="mtb-md"
							>
								{{ $t('mobileMenu.knit_submenu.plast_knit') }}
							</NuxtLink>
							<NuxtLink
								:to="localePath('/proizvodi/pletivo/#farmer-pletivo')"
								class="mtb-md"
							>
								{{ $t('mobileMenu.knit_submenu.farm_knit') }}
							</NuxtLink>
							<NuxtLink
								:to="localePath('/proizvodi/pletivo/#vareno-pletivo')"
								class="mtb-md"
							>
								{{ $t('mobileMenu.knit_submenu.boiled_knit') }}
							</NuxtLink>
							<NuxtLink
								:to="localePath('/proizvodi/pletivo/#pribor')"
								class="mtb-md"
							>
								{{ $t('mobileMenu.knit_submenu.acc_knit') }}
							</NuxtLink>
							<NuxtLink
								:to="localePath('/proizvodi/pletivo/#mreze')"
								class="mtb-md"
							>
								{{ $t('mobileMenu.knit_submenu.mesh_knit') }}
							</NuxtLink>
						</div>
					</transition>
				</div>
				<div class="sub-menu mb-xxs mt-xs menu--line fs-md">
					<NuxtLink :to="localePath('/proizvodi/valovit-mreza')">
						{{ $t('mobileMenu.mesh_title') }}
					</NuxtLink>
				</div>
				<div class="sub-menu mtb-sm menu--line fs-md">
					<NuxtLink :to="localePath('/proizvodi/stupovi')">
						{{ $t('mobileMenu.pillars_title') }}
					</NuxtLink>
				</div>
				<div class="sub-menu mb-sm mt-xxs">
					<div class="u-flex u-flex-fd--r u-flex-ai--c u-flex-jc--sb menu--line fs-md">
						<NuxtLink :to="localePath('/proizvodi/panelni-sustav')">
							{{ $t('mobileMenu.panel_title') }}
						</NuxtLink>
						<div
							class="u-flex u-flex-ai--c hamburger"
							:class="{ active: activeCategory == 'panelni' }"
							@click="setActiveCategory('panelni')"
						>
							<div class="hamb-btn">
								<div class="hamb-line" />
								<div class="hamb-line" />
							</div>
						</div>
					</div>
					<transition name="fadeFromUp">
						<div
							v-show="activeCategory === 'panelni'"
							class="sub-menu--item u-flex u-flex-fd--c mt-sm"
						>
							<NuxtLink
								:to="localePath('/proizvodi/panelni-sustav/panel-m3-5mm')"
								class="mtb-md"
							>
								{{ $t('mobileMenu.panel_submenu.panel_sub1') }}
							</NuxtLink>
							<NuxtLink
								:to="localePath('/proizvodi/panelni-sustav/panel-m3-4mm')"
								class="mtb-md"
							>
								{{ $t('mobileMenu.panel_submenu.panel_sub2') }}
							</NuxtLink>
							<NuxtLink
								:to="localePath('/proizvodi/panelni-sustav/panel-m2-6-5-6-mm')"
								class="mtb-md"
							>
								{{ $t('mobileMenu.panel_submenu.panel_sub3') }}
							</NuxtLink>
							<NuxtLink
								:to="localePath('/proizvodi/panelni-sustav/panel-m2-8-6-8-mm')"
								class="mtb-md"
							>
								{{ $t('mobileMenu.panel_submenu.panel_sub4') }}
							</NuxtLink>
							<NuxtLink
								:to="localePath('/proizvodi/panelni-sustav/stup-metallum')"
								class="mtb-md"
							>
								{{ $t('mobileMenu.panel_submenu.panel_sub5') }}
							</NuxtLink>
							<NuxtLink
								:to="localePath('/proizvodi/panelni-sustav/stup-omega')"
								class="mtb-md"
							>
								{{ $t('mobileMenu.panel_submenu.panel_sub6') }}
							</NuxtLink>
							<NuxtLink
								:to="localePath('/proizvodi/panelni-sustav/stup-sport')"
								class="mtb-md"
							>
								{{ $t('mobileMenu.panel_submenu.panel_sub7') }}
							</NuxtLink>
							<NuxtLink
								:to="localePath('/proizvodi/panelni-sustav/sjenila-za-privatnost')"
								class="mtb-md"
							>
								{{ $t('mobileMenu.panel_submenu.panel_sub8') }}
							</NuxtLink>
						</div>
					</transition>
				</div>
				<div class="sub-menu mb-sm mt-xxs menu--line fs-md">
					<NuxtLink :to="localePath('/proizvodi/pruzni-sustav')">
						{{ $t('mobileMenu.rail_title') }}
					</NuxtLink>
				</div>
				<div class="sub-menu mb-sm mt-xxs menu--line fs-md">
					<NuxtLink :to="localePath('/proizvodi/ogradni-gabioni')">
						{{ $t('mobileMenu.gabions_title') }}
					</NuxtLink>
				</div>
				<div class="sub-menu mt-xxs">
					<div class="u-flex u-flex-fd--r u-flex-ai--c u-flex-jc--sb menu--line fs-md">
						<NuxtLink :to="localePath('/proizvodi/vrata')">
							{{ $t('mobileMenu.door_title') }}
						</NuxtLink>
						<div
							class="u-flex u-flex-ai--c hamburger"
							:class="{ active: activeCategory == 'vrata' }"
							@click="setActiveCategory('vrata')"
						>
							<div class="hamb-btn">
								<div class="hamb-line" />
								<div class="hamb-line" />
							</div>
						</div>
					</div>
					<transition name="fadeFromUp">
						<div
							v-show="activeCategory === 'vrata'"
							class="sub-menu--item u-flex u-flex-fd--c mt-sm"
						>
							<NuxtLink
								:to="localePath('/vrata/pjesacka-vrata')"
								class="mtb-md"
							>
								{{ $t('mobileMenu.door_submenu.door_sub1') }}
							</NuxtLink>
							<NuxtLink
								:to="localePath('/vrata/krilna-vrata')"
								class="mtb-md"
							>
								{{ $t('mobileMenu.door_submenu.door_sub2') }}
							</NuxtLink>
							<NuxtLink
								:to="localePath('/vrata/klizna-vrata')"
								class="mtb-md"
							>
								{{ $t('mobileMenu.door_submenu.door_sub3') }}
							</NuxtLink>
							<NuxtLink
								:to="localePath('/vrata/samonosiva-vrata')"
								class="mtb-md"
							>
								{{ $t('mobileMenu.door_submenu.door_sub4') }}
							</NuxtLink>
							<NuxtLink
								:to="localePath('/vrata/dodatna-oprema')"
								class="mtb-md"
							>
								{{ $t('mobileMenu.door_submenu.door_sub5') }}
							</NuxtLink>
						</div>
					</transition>
				</div>
				<div class="sub-menu mb-sm mt-xxs menu--bline">
					<div class="u-flex u-flex-fd--r u-flex-ai--c u-flex-jc--sb menu--line fs-md">
						<NuxtLink :to="localePath('/proizvodi/izrada-po-nacrtu')">
							{{ $t('mobileMenu.drafting_title') }}
						</NuxtLink>
						<div
							class="u-flex u-flex-ai--c hamburger"
							:class="{ active: activeCategory == 'poNacrtu' }"
							@click="setActiveCategory('poNacrtu')"
						>
							<div class="hamb-btn">
								<div class="hamb-line" />
								<div class="hamb-line" />
							</div>
						</div>
					</div>
					<transition name="fadeFromUp">
						<div
							v-show="activeCategory === 'poNacrtu'"
							class="sub-menu--item u-flex u-flex-fd--c mt-sm"
						>
							<NuxtLink
								:to="localePath('/vrata/izrada-po-nacrtu/zastitna-ograda')"
								class="mtb-md"
							>
								{{ $t('mobileMenu.drafting_submenu.drafting_sub1') }}
							</NuxtLink>
							<NuxtLink
								:to="localePath('/vrata/izrada-po-nacrtu/vanstandardna-ograda')"
								class="mtb-md"
							>
								{{
									$t('mobileMenu.drafting_submenu.drafting_sub2')
								}}
							</NuxtLink>
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
		window.addEventListener('scroll', () => {
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
			// eslint-disable-next-line no-unused-expressions
			this.activeCategory === category ? this.activeCategory = '' : this.activeCategory = category;
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
		a {
			font-family: $ff-sans;
		}
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
</style>
