<template>
	<header
		class="header u-flex u-flex-fw--w u-flex-jc--sb u-flex-fd--r plr-6xl pt-md pl-3xl"
		:class="{
			fixed: $store.state.openMenu,
			'header--dark':
				($route.name || '').includes('proizvodi__') ||
				($route.name || '').includes('usluge') ||
				($route.name || '').includes('galerija') ||
				($route.name || '').includes('contact')
		}"
	>
		<NuxtLink :to="localePath('/')" class="light"><img src="~/assets/img/nofollow/logo-metallum.png" class="header--logo" /> </NuxtLink>

		<NuxtLink :to="localePath('/')" class="dark">
			<img src="~/assets/img/nofollow/logo-metallum-dark.png" class="header--logo" />
		</NuxtLink>

		<div class="u-flex u-flex--if u-flex-ai--fe mb-sm header__top">
			<div class="nav fs-base">
				<NuxtLink :to="localePath('/proizvodi')" class="menuItem">{{ $t('header.products') }}</NuxtLink>
				<NuxtLink :to="localePath('/usluge')" class="menuItem ml-lg">{{ $t('header.services') }}</NuxtLink>
				<NuxtLink :to="localePath('/galerija')" class="menuItem ml-lg">{{ $t('header.gallery') }}</NuxtLink>
				<NuxtLink :to="localePath('/contact')" class="menuItem ml-lg">{{ $t('header.contact') }}</NuxtLink>
				<NuxtLink :to="switchLocalePath('hr')" class="header--language mr-sm ml-6xl">HR </NuxtLink>
				<NuxtLink :to="switchLocalePath('en')" class="ml-sm">EN </NuxtLink>
			</div>
		</div>

		<div
			class="u-flex u-flex-ai--c hamburger"
			:class="{
				active: $store.state.openMenu,
				'hamburger--dark': ($route.name || '').includes('proizvodi__') || ($route.name || '').includes('usluge') || ($route.name || '').includes('galerija')
			}"
			@click="$store.commit('toggleField', 'openMenu')"
		>
			<div class="hamb-btn">
				<div class="hamb-line light" />
				<div class="hamb-line light" />
				<div class="hamb-line light" />
			</div>
			<div class="hamb-btn">
				<div class="hamb-line dark" />
				<div class="hamb-line dark" />
				<div class="hamb-line dark" />
			</div>
		</div>
	</header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	data() {
		return {
			visible: false
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
			this.$store.commit('toggleField', 'openMenu');
			if (this.$store.state.openMenu) {
				document.body.classList.add('noscroll');
			} else {
				document.body.classList.remove('noscroll');
			}
		}
	}
});
</script>

<style lang="scss" scoped>
.header {
	font-family: $ff-sans;
	color: $secondary-color;
	position: absolute;
	width: 100%;
	z-index: 60;
	top: 0;

	.dark {
		display: none;
	}
	&--dark {
		a {
			color: $oxfordBlue;
		}
		.dark {
			display: block;
		}
		.light {
			display: none;
		}
	}
	&--language {
		border-right: 1px;
		border-color: white;
	}
}

.hamburger {
	display: none;
}

@media (max-width: 1080px) {
	.header {
		position: absolute;
		padding-left: 20px;
		padding-right: 20px;
		width: 100%;

		&.fixed {
			position: fixed;
			.dark {
				display: none;
			}
			.light {
				display: block;
			}
		}
		&--img-icon {
			margin-left: 20px;
		}
	}
	.hamburger {
		display: flex;
		padding: 20px 0;
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
		&--dark {
			.dark {
				display: block;
				background-color: $iron;
			}
			.light {
				display: none;
			}
		}
	}
	.hamburger.active {
		.hamb-line:nth-child(1) {
			transform: rotate(45deg) translateX(0px) translateY(7px);
			background-color: $metallum0;
		}
		.hamb-line:nth-child(2) {
			visibility: hidden;
			background-color: transparent;
		}
		.hamb-line:nth-child(3) {
			transform: rotate(-45deg) translateX(0px) translateY(-7px);
			background-color: $metallum0;
		}
	}
	.header__top {
		display: none;
	}
}

@media (max-width: 420px) {
	.header {
		&--logo {
			height: 50px;
		}
	}
}
</style>
