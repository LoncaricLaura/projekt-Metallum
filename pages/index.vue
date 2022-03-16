<template>
	<div>
		<div class="bg u-flex u-flex-ai--c center">
			<p class="title txt-align-c">Postavite granice <br> Ostavite vrata</p>
		</div>
		<div class="group u-flex u-flex-fd--c hor-center txt-align-c">
			<h2 class="mb-md">Ograde i ogradni sustav</h2>
			<p class="text ">Nije bitno samo ograditi radni prostor ili prostor sačuvati od upada nezvanih gostiju, već se ograda mora uklapati u okolinu i činiti je privlačnijom. To je moguće sa odabirom naših ograda koje su čvrste, trajne i privlačne za oko. Odaberite ogradu koja naglašava Vaš stil!</p>
		</div>

		<div class="u-flex hor-center plr-9xl " id="pletivo">
				<div class="u-flex-fd--c center">
					<h2>PLETIVO</h2>
					<div class="btn mt-5xl">SAZNAJTE VIŠE</div>
				</div>
		</div>
	</div>
</template>


<script>

</script>

<style lang="scss" scoped>

.bg {
	background: #428ACE;
	background-image: url('/img/6.jpg');
	background-blend-mode: multiply;
	height: 944px;
	width: 100%;
}

.title {
	font-family: $ff-serif;
	color: $secondary-color;
	font-size: 91px;
	line-height: 131.5%;
	place-self: center;
}

.group {
	padding-top: 150px;
	padding-bottom: 150px;
	width: 684px;
}

@media screen and (max-width: 640px) {
	.group {
		width: auto;
	}
}

h2 {
	font-family: $ff-serif;
	font-size: 40px;
	color: $gray1;
	font-weight: normal;
}

.text {
	font-family: $ff-sans;
	color: $gray80;
	font-size: 18px;
	font-weight: $fw-light;
	line-height: 32.4px;
}

#pletivo {
	background: url('/img/fence_blue_1.png');
	background-position: right;
	background-repeat: no-repeat;
	background-color: $metallum0;
	font-family: $ff-serif;
	font-weight: $fw-normal;
	width: 1400px;
	height: 493px;
}


@media screen and (max-width: 768px) {
	#pletivo {
		flex-direction: column;
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
  font-size: 14px;
}

</style>
