<template>
	<div>
		<div class="bg u-flex u-flex-ai--c center u-flex-fd--c">
			<div class="fs-xl title txt-align-c">Pletiva u roli</div>
			<div class="btn mt-6xl">
				PREUZMI PDF
				<img class="icon ml-sm" src="/img/pdf-icon.png" />
			</div>
		</div>
		<ProductMenu />
		<div class="pletivo u-flex u-flex-fd--c mtb-6xl">
			<div class="galery mt-md mb-6xl"></div>
			<div class="u-flex u-flex-fd--c u-flex-as--fs">
				<div class="pletivo--subtitle fs-lg pr-2xl">Univerzal pletivo</div>
				<p class="mtb-xl">
					Univerzal pletiva, od pocinčane ili pocinčane i plastificirane žice, namijenjena su za ograđivanje sportskih površina, stambenih prostora, vrtova, parkova,
					te poljoprivrednih i sličnih površina.
				</p>
				<p class="mb-3xl">
					U kombinaciji sa ZN/ZN+PVC stupovima, UNIVERZAL PLETIVO je brz, ekonomičan i jednostavan sustav ograđivanja, koji je pri montaži najprilagodljiviji
					konfiguraciji terena.
				</p>

				<div class="pletivo--table-pocincano">
					<table>
						<thead>
							<tr>
								<th colspan="4">
									<div class="table-title fs-md ptb-xl plr-xl">Univerzal pocinčano pletivo</div>
									<img src="/img/pocincano_pletivo.png" class="image" />
								</th>
							</tr>
							<tr class="fs-sm">
								<th class="ptb-lg pl-md">Promjer žice (mm)</th>
								<th class="pl-md">Otvor oka (mm)</th>
								<th class="pl-md">Visina mreže (m)</th>
								<th class="pl-md">Duljina role (m)</th>
							</tr>
						</thead>
						<tbody class="fs-base">
							<tr>
								<td class="ptb-xl pl-md">1,8</td>
								<td class="ptb-xl pl-md">30x30 40x40</td>
								<td rowspan="3" class="pl-md">
									0,60 <br />
									0,80<br />
									1,00 <br />
									1,25 <br />
									1,50 <br />
									1,75 <br />
									2,00
								</td>
								<td rowspan="3" class="pl-md">25</td>
							</tr>

							<tr>
								<td class="ptb-xl pl-md">2,0</td>
								<td class="ptb-xl pl-md">
									30x30 40x40 <br />
									50x50 60x60
								</td>
							</tr>

							<tr>
								<td class="ptb-xl pl-md">2,8</td>
								<td class="ptb-xl pl-md">
									30x30 40x40 <br />
									50x50 60x60
								</td>
							</tr>

							<tr>
								<td colspan="4" class="fs-sm ptb-md pl-md">Prema potrebi naručitelja izrađujemo i nestandardne visine mreža, ukupne visine do 5.00 m.</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div class="pletivo--table-plastificirano mtb-2xl">
					<table>
						<thead>
							<tr>
								<th colspan="4">
									<div class="table-title fs-md ptb-xl plr-xl">Univerzal plastificirano pocinčano pletivo</div>
									<img src="/img/6-1.jpg" class="image" />
								</th>
							</tr>
							<tr class="fs-sm">
								<th class="ptb-lg pl-md">Promjer žice (mm)</th>
								<th class="pl-md">Otvor oka (mm)</th>
								<th class="pl-md">Visina mreže (m)</th>
								<th class="pl-md">Duljina role (m)</th>
							</tr>
						</thead>
						<tbody class="fs-base">
							<tr>
								<td rowspan="3" class="ptb-xl pl-md">1,8 / 2,7</td>
								<td class="ptb-xl pl-md">40x40</td>
								<td rowspan="3" class="pl-md">
									0,60 <br />
									0,80<br />
									1,00 <br />
									1,25 <br />
									1,50 <br />
									1,75 <br />
									2,00
								</td>
								<td rowspan="3" class="pl-md">25</td>
							</tr>

							<tr>
								<td class="ptb-xl pl-md">50x50</td>
							</tr>

							<tr>
								<td class="ptb-xl pl-md">60x60</td>
							</tr>

							<tr>
								<td colspan="4" class="fs-sm ptb-md pl-md">Prema potrebi naručitelja izrađujemo i nestandardne visine mreža, ukupne visine do 5.00 m.</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div class="pletivo--subtitle fs-lg pt-xl pr-2xl">Farmer pletivo</div>
				<p class="mt-xl mb-sm">Farmer pletivo se upotrebljava za ograđivanje pašnjaka, poljoprivrednih parcela, divljači, domaćih životinja.</p>
				<p class="mb-md">Svi dijelovi ogradnog sustava su vruće cinčani.</p>
				<p class="mb-md">U ponudi imamo farmer pletivo visine mreže od 1,0 m do 2,0 m.</p>
				<p class="mb-md">Postavljanje Farmer pletiva je jednostavno bez upotrebe zateznih žica.</p>

				<div class="pletivo--subtitle fs-lg pt-6xl pr-2xl">Vareno plastificirano pletivo</div>
				<p class="mt-xl mb-sm">
					PVC vareno pletivo je elektro-varena mreža koja se koristi za ograđivanje okućnica, vrtova, poljoprivrednih parcela. Horizontalne žice su valovite, što ovo
					pletivo čini atraktivnim i robusnim.
				</p>
				<p>Svi dijelovi ogradnog sustava su vruće cinčani i plastificirani u zelenu boju (RAL 6005).</p>
				<div class="mtb-3xl u-grid">
					<img src="/img/50-100-mm.png" />
					<p class="mt-sm">100/50 mm</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.bg {
	background: #428ace;
	background-image: url('/img/6-1.jpg');
	background-blend-mode: multiply;
	height: 580px;
	width: 100%;
	background-size: cover;
}

.title {
	font-family: $ff-serif;
	color: $secondary-color;
	line-height: 131.5%;
	place-self: center;
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

.pletivo {
	margin-left: 700px;
	margin-right: 220px;
	&--subtitle {
		font-family: $ff-serif;
		color: $iron;
	}
	p {
		font-family: $ff-sans;
		font-size: 18px;
		color: $iron;
	}
}
table {
	width: 1102px;
	color: $oxfordBlue;
}

.table-title {
	font-family: $ff-serif;
	background-color: $oxfordBlue;
	color: $secondary-color;
	font-weight: 400;
}

.image {
	height: 308px;
	width: 100%;
}

thead {
	tr {
		font-family: $ff-serif;
		text-align: justify;
		background-color: $metallum0;
	}
}

tbody {
	background-color: $metallum0;
}

.galery {
	background-image: url('/img/image-6.jpg');
	height: 621px;
	width: 1102px;
}
</style>
