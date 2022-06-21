<template>
	<div>
		<div class="bg u-flex u-flex-ai--c center">
			<p class="fs-xxl title txt-align-c">
				{{ $t('home.title') }} <br>
				{{ $t('home.title2') }}
			</p>
		</div>
		<div class="group u-flex u-flex-fd--c hor-center txt-align-c ptb-main">
			<p class="fs-lg mb-md">
				{{ $t('home.fences_title') }}
			</p>
			<p class="text fs-base">
				{{ $t('home.fences_desc') }}
			</p>
		</div>

		<!-- Pletivo -->
		<div class="box u-flex u-flex-fd--c mlr-main">
			<div class="box-item u-flex u-flex-ai--c">
				<div class="box-item--title ml-boxWrap fs-md">
					<p class="fs-lg">
						{{ $t('home.pletivo_title') }}
					</p>
					<NuxtLink
						:to="localePath('/proizvodi/pletivo')"
						class="btn btn--primary mt-3xl"
					>
						{{ $t('home.button_more') }}
					</NuxtLink>
				</div>
				<div class="pos-a box-item--image u-flex u-flex-jc--fe">
					<img src="~/assets/img/index/fence_blue_1.png">
				</div>
			</div>

			<!-- Valovita mreza -->
			<div class="box-items u-grid u-grid-2 mt-lg">
				<div class="box-item u-flex u-flex-ai--c">
					<div class="box-item--title ml-boxWrap fs-md">
						<p class="fs-lg">
							{{ $t('home.mesh_title') }}
						</p>
						<NuxtLink
							:to="localePath('/proizvodi/valovita-mreza')"
							class="btn btn--primary mt-3xl"
						>
							{{ $t('home.button_more') }}
						</NuxtLink>
					</div>
					<div class="pos-a box-item--image u-flex u-flex-jc--fe">
						<img
							class="box-item--img"
							src="~/assets/img//index/Fence-Knits.png"
						>
						<img
							class="box-item--img-mobile"
							src="~/assets/img/index/Fence-Knits-mobile.png"
						>
					</div>
				</div>

				<!-- Vrata -->
				<div class="box-item u-flex u-flex-ai--c">
					<div class="box-item--title ml-boxWrap fs-md">
						<p class="fs-lg">
							{{ $t('home.door_title') }}
						</p>
						<NuxtLink
							:to="localePath('/proizvodi/vrata')"
							class="btn btn--primary mt-3xl"
						>
							{{ $t('home.button_more') }}
						</NuxtLink>
					</div>
					<div class="pos-a box-item--image u-flex u-flex-jc--fe">
						<img
							class="box-item--img"
							src="~/assets/img/index/Garden-Door.J03.png"
						>
						<img
							class="box-item--img-mobile"
							src="~/assets/img/index/Garden-Door-mobile.png"
						>
					</div>
				</div>
			</div>

			<!-- Panelni sustav -->
			<div class="box-item u-flex u-flex-ai--c mt-lg">
				<div class="box-item--title ml-boxWrap fs-md">
					<p class="fs-lg">
						{{ $t('home.panel_title') }}
					</p>
					<NuxtLink
						:to="localePath('/proizvodi/panelni-sustav')"
						class="btn btn--primary mt-3xl"
					>
						{{ $t('home.button_more') }}
					</NuxtLink>
				</div>
				<div class="pos-a box-item--image u-flex u-flex-jc--fe">
					<img src="~/assets/img/index/Barbed-Wire-Fence.G03.png">
				</div>
			</div>

			<!-- Pruzni sustav -->
			<div class="box-item u-flex u-flex-ai--c mtb-lg">
				<div class="box-item--title ml-boxWrap fs-md">
					<p class="fs-lg">
						{{ $t('home.rail_title') }}
					</p>
					<NuxtLink
						:to="localePath('/proizvodi/pruzni-sustav')"
						class="btn btn--primary mt-3xl"
					>
						{{ $t('home.button_more') }}
					</NuxtLink>
				</div>
				<div class="pos-a box-item--image u-flex u-flex-jc--fe">
					<img src="~/assets/img/index/fence_blue_1.png">
				</div>
			</div>
		</div>

		<div class="group u-flex hor-center txt-align-c">
			<p class="text mtb-3xl pb-6xl fs-base">
				{{ $t('home.products_desc') }}
			</p>
		</div>

		<!-- Usluge -->
		<div class="u-flex center u-flex-ai--c">
			<p class="fs-lg">
				{{ $t('home.services_title') }}
			</p>
		</div>

		<div class="box-services u-grid u-grid-4 plr-main box-services--text fs-md txt-align-c ptb-main">
			<div>
				<img
					src="~/assets/img/index/image-field.png"
					class="mb-lg"
				>
				<p>{{ $t('home.services_field') }}</p>
			</div>
			<div>
				<img
					src="~/assets/img/index/image-docs.png"
					class="mb-lg"
				>
				<p>{{ $t('home.services_docs') }}</p>
			</div>
			<div>
				<img
					src="~/assets/img/index/image-fence-door.png"
					class="mb-4xl"
				>
				<p>{{ $t('home.services_fence_door') }}</p>
			</div>
			<div>
				<img
					src="~/assets/img/index/image-protection-el.png"
					class="mb-lg"
				>
				<p>{{ $t('home.services_protection') }}</p>
			</div>
			<div>
				<img
					src="~/assets/img/index/image-drilling.png"
					class="mb-lg"
				>
				<p>{{ $t('home.services_drilling') }}</p>
			</div>
			<div>
				<img
					src="~/assets/img/index/image-installation.png"
					class="mb-lg"
				>
				<p>{{ $t('home.services_installation') }}</p>
			</div>
			<div>
				<img
					src="~/assets/img/index/image-automation.png"
					class="mb-lg"
				>
				<p>{{ $t('home.services_automation') }}</p>
			</div>
			<div>
				<img
					src="~/assets/img/index/image-service.png"
					class="mb-lg"
				>
				<p>{{ $t('home.services_service') }}</p>
			</div>
		</div>

		<SliderMobile :services="services" />

		<div class="bg-item u-flex u-flex-fd--c u-flex-ai--c center">
			<div class="bg-item--text fs-xl txt-align-c">
				{{ $t('home.contact_title') }}
			</div>
			<div class="btn btn--primary mt-3xl">
				<p class="btn--text mtb-xxs">
					{{ $t('home.contact_button') }}
				</p>
			</div>
		</div>

		<Slider :imgs="['6']" />

		<div class="box-logos u-flex u-flex-fd--r u-flex-jc--sb u-flex-as--c center plr-main pb-box">
			<img src="~/assets/img/index/ghiastaff.png">

			<img src="~/assets/img/index/maslinica.png">

			<img src="~/assets/img/index/kempinski-hotel.png">

			<img src="~/assets/img/index/valamar.png">

			<img src="~/assets/img/index/spina.png">
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			services: [
				{ img: 'automation', title: 'Automatizaija vratiju' },
				{ img: 'docs', title: 'Izrada nacrtne dokumentacije za ograde dizajna po želji klijenta' },
				{ img: 'drilling', title: 'Dijamantno bušenje armiranog betona' },
				{ img: 'fence-door', title: 'Proizvodnja ograda i vrata' },
				{ img: 'field', title: 'Izvid terena' },
				{ img: 'installation', title: 'Montaža ograde i vratiju' },
				{ img: 'protection-el', title: 'Antikorozivna zaštita elemenata' },
				{ img: 'service', title: 'Servisiranje na terenu' }
			]
		};
	}
};
</script>

<style lang="scss" scoped>
.bg {
	background: #428ace;
	background-image: url('~/assets/img/index/image-6.jpg');
	background-blend-mode: multiply;
	height: 944px;
	width: 100%;
	background-size: cover;
}

.title {
	font-family: $ff-serif;
	color: $secondary-color;
	line-height: 131.5%;
	place-self: center;
}

.group {
	width: 684px;
}

h2 {
	font-family: $ff-serif;
	color: $gray1;
	font-weight: normal;
}

.text {
	font-family: $ff-sans;
	color: $gray80;
	font-weight: $fw-light;
	line-height: 32.4px;
}

.box {
	font-family: $ff-serif;
	font-weight: $fw-normal;
}

.box-item {
	background-color: $metallum0;
	width: 100%;
	height: 493px;
	position: relative;
	&--image {
		position: absolute;
		width: 100%;
		height: 100%;
		img {
			object-fit: cover;
		}
	}
	&--title {
		z-index: 2;
		color: $iron;
	}
	&--img-mobile {
		display: none;
	}
}

.box-services {
	width: 100%;
	row-gap: 100px;
	&--text {
		font-family: $ff-serif;
		color: $iron80;
		//font-size: 27px;
		line-height: 160%;
	}
}

.bg-item {
	background: #428ace;
	background-image: url('~/assets/img/index/6-1.jpg');
	background-blend-mode: multiply;
	background-size: cover;
	height: 492px;
	width: 100%;
	&--text {
		font-family: $ff-serif;
		//font-size: 61px;
		line-height: 80.22px;
		color: $secondary-color;
		width: 723px;
	}
}

.slider {
	&--img {
		width: 1228px;
		height: 691px;
	}
}

.slider-mobile {
	display: none;
}

@media (max-width: 1600px) {
	.box {
		margin-left: 90px;
		margin-right: 90px;
	}
	.box-logos {
		padding: 100px 80px;
		padding-top: 0;
	}
}

@media (max-width: 1350px) {
	.box {
		margin-left: 30px;
		margin-right: 30px;
		.box-item {
			height: 514px;
			align-items: flex-start;
			&--image {
				align-items: flex-end;
				img {
					height: 100%;
					width: 70%;
				}
			}
			&--title {
				margin-top: 165px;
				margin-left: 125px;
			}
		}
	}
	.box-services {
		padding: 60px 60px;
	}
	.box-logos {
		padding: 100px 30px;
		padding-top: 0;
	}
}

@media (max-width: 1250px) {
	.box-services {
		display: none;
	}
	.slider-mobile {
		display: flex;
		justify-content: center;
		padding: 60px 60px;
	}
	.box-logos {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}
}

@media (max-width: 1100px) {
	.bg {
		height: 728px;
	}
	.title {
		font-family: $ff-serif;
		line-height: 131.5%;
		place-self: center;
		padding: 65px;
	}
	h2 {
		font-family: $ff-serif;
		color: $gray1;
		font-weight: normal;
	}
	.group {
		width: 100%;
		padding: 60px 50px;
	}
	.text {
		padding: 0;
		margin: 0;
	}
	.box {
		margin-left: 30px;
		margin-right: 30px;
		.box-item {
			align-items: flex-start;
			&--image {
				align-items: flex-end;
				img {
					height: 50%;
					width: 100%;
				}
			}
			&--img {
				display: none;
			}
			&--img-mobile {
				display: flex;
			}
			&--title {
				margin-top: 50px;
				margin-left: 50px;
			}
		}
	}
	.box-items {
		grid-template-columns: repeat(1, minmax(0, 1fr));
	}
	.bg-item {
		padding: 0 24px;
		&--text {
			width: auto;
			margin: 0 60px;
		}
	}
}

@media (max-width: 420px) {
	.group {
		padding: 60px 24px;
	}
	.title {
		padding: 20px;
	}
	.box {
		.box-item {
			&--title {
				margin-top: 60px;
				margin-left: 24px;
			}
		}
	}
}
</style>
