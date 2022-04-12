<template>
	<div>
		<div class="bg u-flex u-flex-ai--c center">
			<p class="fs-xxl title txt-align-c">
				Postavite granice <br />
				Ostavite vrata
			</p>
		</div>
		<div class="group u-flex u-flex-fd--c hor-center txt-align-c ptb-main">
			<h2 class="fs-lg mb-md">Ograde i ogradni sustav</h2>
			<p class="text fs-base">
				Nije bitno samo ograditi radni prostor ili prostor sačuvati od upada nezvanih gostiju, već se ograda mora uklapati u okolinu i činiti je privlačnijom. To je
				moguće sa odabirom naših ograda koje su čvrste, trajne i privlačne za oko. Odaberite ogradu koja naglašava Vaš stil!
			</p>
		</div>

		<!-- Pletivo -->
		<div class="box u-flex u-flex-fd--c mlr-main">
			<div class="box-item u-flex u-flex-ai--c">
				<div class="box-item--title ml-boxWrap fs-md">
					<h2>Pletivo</h2>
					<div class="btn mt-4xl fs-sm">SAZNAJTE VIŠE</div>
				</div>
				<div class="pos-a box-item--image u-flex u-flex-jc--fe">
					<img src="/img/fence_blue_1.png" />
				</div>
			</div>

			<!-- Valovita mreza -->
			<div class="box-items u-grid u-grid-2 mt-lg">
				<div class="box-item u-flex u-flex-ai--c">
					<div class="box-item--title ml-boxWrap fs-md">
						<h2>Valovita (vibro) mreža</h2>
						<div class="btn mt-4xl fs-sm">SAZNAJTE VIŠE</div>
					</div>
					<div class="pos-a box-item--image u-flex u-flex-jc--fe">
						<img class="box-item--img" src="/img/Fence-Knits.png" />
						<img class="box-item--img-mobile" src="/img/Fence-Knits-mobile.png" />
					</div>
				</div>

				<!-- Vrata -->
				<div class="box-item u-flex u-flex-ai--c">
					<div class="box-item--title ml-boxWrap fs-md">
						<h2>Vrata</h2>
						<div class="btn mt-4xl fs-sm">SAZNAJTE VIŠE</div>
					</div>
					<div class="pos-a box-item--image u-flex u-flex-jc--fe">
						<img class="box-item--img" src="/img/Garden-Door.J03.png" />
						<img class="box-item--img-mobile" src="/img/Garden-Door-mobile.png" />
					</div>
				</div>
			</div>

			<!-- Panelni sustav -->
			<div class="box-item u-flex u-flex-ai--c mt-lg">
				<div class="box-item--title ml-boxWrap fs-md">
					<h2>Panelni sustav</h2>
					<div class="btn mt-4xl fs-sm">SAZNAJTE VIŠE</div>
				</div>
				<div class="pos-a box-item--image u-flex u-flex-jc--fe">
					<img src="/img/Barbed-Wire-Fence.G03.png" />
				</div>
			</div>

			<!-- Pruzni sustav -->
			<div class="box-item u-flex u-flex-ai--c mtb-lg">
				<div class="box-item--title ml-boxWrap fs-md">
					<h2>Pružni sustav</h2>
					<div class="btn mt-4xl fs-sm">SAZNAJTE VIŠE</div>
				</div>
				<div class="pos-a box-item--image u-flex u-flex-jc--fe">
					<img src="/img/fence_blue_1.png" />
				</div>
			</div>
		</div>

		<div class="group u-flex hor-center txt-align-c">
			<p class="text mtb-3xl pb-6xl fs-base">
				Naši proizvodi koriste se u izgradnji nosiva konstrukcija te u svim vrstama ograda. Kako u industrijskim tako i u privatnim sektorima.
			</p>
		</div>

		<!-- Usluge -->
		<div class="u-flex center u-flex-ai--c">
			<h2 class="fs-lg">Usluge</h2>
		</div>

		<div class="box-services u-grid u-grid-4 plr-box box-services--text fs-md txt-align-c ptb-main">
			<div>
				<img src="/img/image-field.png" class="mb-lg" />
				<p>Izvid terena</p>
			</div>
			<div>
				<img src="/img/image-docs.png" class="mb-lg" />
				<p>Izrada nacrtne dokumentacije za ograde dizajna po želji klijenta</p>
			</div>
			<div>
				<img src="/img/image-fence-door.png" class="mb-4xl" />
				<p>Proizvodnja ograda i vrata</p>
			</div>
			<div>
				<img src="/img/image-protection-el.png" class="mb-lg" />
				<p>Antikorozivna zaštita elemenata</p>
			</div>
			<div>
				<img src="/img/image-drilling.png" class="mb-lg" />
				<p>Dijamantno bušenje armiranog betona</p>
			</div>
			<div>
				<img src="/img/image-installation.png" class="mb-lg" />
				<p>Montaža ograde i vratiju</p>
			</div>
			<div>
				<img src="/img/image-automation.png" class="mb-lg" />
				<p>Automatizacija vratiju</p>
			</div>
			<div>
				<img src="/img/image-service.png" class="mb-lg" />
				<p>Servisiranje na terenu</p>
			</div>
		</div>

		<SliderMobile :services="services" />

		<div class="bg-item u-flex u-flex-fd--c u-flex-ai--c center">
			<div class="bg-item--text fs-xl txt-align-c">Kontaktirajte nas za više informacija</div>
			<div class="btn mt-3xl">
				<p class="btn--text mtb-xxs">KONTAKTIRAJTE NAS</p>
			</div>
		</div>

		<Slider :imgs="['6']" />

		<!-- <div class="u-flex center ptb-main">
			<div>
				<img src="/img/6.jpg" class="slider--img">
			</div>
		</div> -->

		<div class="box-logos u-flex u-flex-fd--r u-flex-jc--sb u-flex-as--c center plr-main pb-box">
			<div>
				<img src="/img/ghiastaff.png" />
			</div>
			<div>
				<img src="/img/maslinica.png" />
			</div>
			<div>
				<img src="/img/kempinski-hotel.png" />
			</div>
			<div>
				<img src="/img/valamar.png" />
			</div>
			<div>
				<img src="/img/spina.png" />
			</div>
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
	background-image: url('/img/image-6.jpg');
	background-blend-mode: multiply;
	height: 944px;
	width: 100%;
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
	&--img-mobile {
		display: none;
	}
}

.btn {
	background-color: $coral;
	border: none;
	color: white;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	//font-size: 14px;
	&--text {
		font-family: $ff-serif;
		font-size: 14px;
		line-height: 16.44px;
		font-weight: 700;
		letter-spacing: 1px;
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
	background-image: url('/img/6-1.jpg');
	background-blend-mode: multiply;
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
			align-items: flex-start;
			&--image {
				align-items: flex-end;
				img {
					height: 100%;
					width: 65%;
				}
			}
			&--title {
				margin-top: 140px;
				margin-left: 100px;
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
		width: 400px;
		padding: 60px 0;
	}
	.text {
		padding: 0;
		margin: 0;
	}
	.box {
		margin-left: 20px;
		margin-right: 20px;
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
</style>
