<template>
		<header class="header u-flex u-flex-fw--w u-flex-jc--sb u-flex-fd--r plr-6xl pt-md pl-3xl" :class="{ fixed: $store.state.openMenu ,'header--dark' : ($route.name || '').includes('proizvodi') || ($route.name || '').includes('usluge') }">
			<NuxtLink :to="localePath('/')" class="light"
				><img src="/img/icon-l.png">
				<img src="/img/icon-metallum-l.png" class="mb-sm ml-xl">
				</NuxtLink>

			<NuxtLink :to="localePath('/')" class="dark">
				<img src="/img/icon.png">
				<img src="/img/icon-metallum.png" class="mb-sm ml-xl">
			</NuxtLink>

			<div class="u-flex u-flex--if u-flex-ai--fe mb-sm header__top">
				<div class="nav fs-base">
					<NuxtLink :to="localePath('/Proizvodi')" class="menuItem">Proizvodi</NuxtLink>
					<NuxtLink :to="localePath('/Usluge')" class="menuItem ml-lg">Usluge</NuxtLink>
					<NuxtLink :to="localePath('/Galerija')" class="menuItem ml-lg">Galerija</NuxtLink>
					<NuxtLink :to="localePath('/Kontakt')" class="menuItem ml-lg">Kontakt</NuxtLink>
					<a href="" class="menuItem ml-6xl">HR | EN</a>
				</div>
			</div>

			<div class="u-flex u-flex-ai--c hamburger" :class="{ active: $store.state.openMenu }" @click="$store.commit('toggleField', 'openMenu')">
				<div class="hamb-btn">
					<div class="hamb-line" />
					<div class="hamb-line" />
					<div class="hamb-line" />
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
			this.$store.commit('toggleOpen', 'openMenu');
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
	.dark{
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
}


.menuItem:hover {
	text-decoration: underline;
}

.hamburger {
	display: none;
}

@media (max-width: 1080px) {
	.header {
		position: relative;
		padding-left: 30px;
		padding-right: 35px;
		width: 100%;
		&.fixed {
			position: fixed;
		}
	}
	.hamburger {
		display: flex;
		padding: 50px 0;
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
</style>
