<template>
	<div>
		<div class="bg u-flex u-flex-ai--c center u-flex-fd--c">
			<div class="fs-xl title txt-align-c">Pletiva u roli</div>
			<div class="btn btn--primary mt-6xl">
				PREUZMI PDF
				<img class="icon ml-sm" src="/img/pdf-icon.png" />
			</div>
		</div>
		<div class="u-flex u-flex-fd--r u-flex-jc--sb">
			<div class="menu"><ProductMenu /></div>
			<div class="pletivo u-flex u-flex-fd--c u-flex-ai--fe mtb-6xl plr-main">
				<div class="galery u-flex u-flex-ai--fe u-flex-jc--fe mt-md mb-6xl">
					<div class="btn btn--primary u-flex u-flex-ai--c" :class="{ active: $store.state.openMenu }" @click="galery = !galery">
						<img src="/img/mdi-light_picture.png" class="mr-md" />
						Pogledaj galeriju (14)
					</div>
					<SliderProducts :imgs="['6']" v-if="galery" />
				</div>
				<div class="slider-mobile"><SliderProductMobile :imgs="['6']" /></div>
				<div class="pletivo--box u-flex u-flex-fd--c u-flex-ai--fs">
					<div class="pletivo--subtitle fs-lg pr-2xl pt-xl" id="uni-pletivo">Univerzal pletivo</div>
					<p class="mtb-xl">
						Univerzal pletiva, od pocinčane ili pocinčane i plastificirane žice, namijenjena su za ograđivanje sportskih površina, stambenih prostora, vrtova,
						parkova, te poljoprivrednih i sličnih površina.
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
										<div class="table-title fs-md ptb-lg plr-xl">Univerzal pocinčano pletivo</div>
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
									<td class="pl-md">30x30 40x40</td>
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
									<td class="pl-md">
										30x30 40x40 <br />
										50x50 60x60
									</td>
								</tr>

								<tr>
									<td class="ptb-xl pl-md">2,8</td>
									<td class="pl-md">
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

					<div class="pletivo--table-plastificirano ptb-2xl" id="plastificirano-pletivo">
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
									<td class="ptb-lg pl-md">40x40</td>
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
									<td class="ptb-lg pl-md">50x50</td>
								</tr>

								<tr>
									<td class="ptb-lg pl-md">60x60</td>
								</tr>

								<tr>
									<td colspan="4" class="fs-sm ptb-md pl-md">Prema potrebi naručitelja izrađujemo i nestandardne visine mreža, ukupne visine do 5.00 m.</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div class="pletivo--subtitle fs-lg pt-xl pr-2xl" id="farmer-pletivo">Farmer pletivo</div>
					<p class="mt-xl mb-sm">Farmer pletivo se upotrebljava za ograđivanje pašnjaka, poljoprivrednih parcela, divljači, domaćih životinja.</p>
					<p class="mb-md">Svi dijelovi ogradnog sustava su vruće cinčani.</p>
					<p class="mb-md">U ponudi imamo farmer pletivo visine mreže od 1,0 m do 2,0 m.</p>
					<p>Postavljanje Farmer pletiva je jednostavno bez upotrebe zateznih žica.</p>

					<div class="pletivo--subtitle fs-lg pt-6xl pr-2xl" id="vareno-pletivo">Vareno plastificirano pletivo</div>
					<p class="mt-xl mb-sm">
						PVC vareno pletivo je elektro-varena mreža koja se koristi za ograđivanje okućnica, vrtova, poljoprivrednih parcela. Horizontalne žice su valovite, što
						ovo pletivo čini atraktivnim i robusnim.
					</p>
					<p>Svi dijelovi ogradnog sustava su vruće cinčani i plastificirani u zelenu boju (RAL 6005).</p>
					<div class="pletivo--vareno mt-3xl u-flex u-flex-fd--r u-flex-as--fs">
						<div class="mr-xl">
							<img src="/img/50-100-mm.png" />
							<div class="mt-sm">100/50 mm</div>
						</div>
						<div>
							<img src="/img/50-50-mm.png" />
							<div class="mt-sm">50/50 mm</div>
						</div>
					</div>

					<div class="pletivo--subtitle fs-lg pt-6xl pr-2xl" id="pribor">Pribor</div>
					<p class="mt-xl">
						U našoj ponudi imamo sav pribor potreban za montažu mreža i posebnih ograda, uključujući kliješta, zatezače, spojnice, razne vrste žica (zatezne žice,
						žice za učvršćivanje, bodljikave žice) te ostali pribor.<br />
						Sav pribor je zaštićen od korozije pocinčavanjem i /ili plastifikacijom.
					</p>

					<div class="pletivo--table-pocincana mt-2xl">
						<table>
							<thead>
								<tr>
									<th colspan="4">
										<div class="table-title fs-md ptb-xl plr-xl">Pocinčana žica</div>
										<img src="/img/6-1.jpg" class="image" />
									</th>
								</tr>
								<tr class="fs-sm">
									<th class="ptb-lg pl-md">Promjer žice (mm)</th>
									<th class="pl-md">
										Tolerancija prema <br />
										UNE-EN 102 18-2 (mm)
									</th>
									<th class="pl-md">
										Debljina cinčane presvlake prema <br />
										UNE-EN 10244-2 (g/m2)
									</th>
									<th class="pl-md">Zatezna čvrstoća (N/mm2)</th>
								</tr>
							</thead>
							<tbody class="fs-base">
								<tr>
									<td class="ptb-lg pl-md">1,8</td>
									<td class="pl-md">+/- 0,04</td>
									<td class="pl-md">30-50</td>
									<td class="pl-md">450-550</td>
								</tr>

								<tr>
									<td class="ptb-lg pl-md">2,0</td>
									<td class="pl-md">+/- 0,04</td>
									<td class="pl-md">40-60</td>
									<td class="pl-md">450-550</td>
								</tr>

								<tr>
									<td class="ptb-lg pl-md">2,8</td>
									<td class="pl-md">+/- 0,05</td>
									<td class="pl-md">50-70</td>
									<td class="pl-md">450-550</td>
								</tr>

								<tr>
									<td class="ptb-lg pl-md">4,0</td>
									<td class="pl-md">+/- 0,06</td>
									<td class="pl-md">60-90</td>
									<td class="pl-md">450-550</td>
								</tr>

								<tr>
									<td colspan="4" class="fs-sm ptb-md pl-md">Prema potrebi naručitelja izrađujemo i nestandardne visine mreža, ukupne visine do 5.00 m.</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div class="pletivo--table-plastificirana mt-2xl">
						<table>
							<thead>
								<tr>
									<th colspan="6">
										<div class="table-title fs-md ptb-xl plr-xl">Plastificirana pocinčana žica</div>
										<img src="/img/6-1.jpg" class="image" />
									</th>
								</tr>
								<tr class="fs-sm">
									<th class="ptb-lg pl-md">
										Unutarnji <br />
										promjer (mm)
									</th>
									<th class="pl-md">
										Vanjski <br />
										promjer (mm)
									</th>
									<th class="pl-md">
										Tolerancija ZN žice prema <br />
										UNE-EN 102 18-2 (mm)
									</th>
									<th class="pl-md">
										Tolerancija promjera organski <br />
										plastificirane žice (mm)
									</th>
									<th class="pl-md">
										Minimalna debljina cinčane presvlake <br />
										prema UNE-EN 10244-2 (g/m2)
									</th>
									<th class="pl-md">
										Zatezna čvrstoća <br />
										(N/mm2)
									</th>
								</tr>
							</thead>
							<tbody class="fs-base">
								<tr>
									<td class="ptb-lg pl-md">1,8</td>
									<td class="pl-md">2,6</td>
									<td class="pl-md">+/- 0,05</td>
									<td class="pl-md">+/- 0,01</td>
									<td class="pl-md">30</td>
									<td class="pl-md">550</td>
								</tr>

								<tr>
									<td class="ptb-lg pl-md">2,5</td>
									<td class="pl-md">3,1</td>
									<td class="pl-md">+/- 0,05</td>
									<td class="pl-md">+/- 0,01</td>
									<td class="pl-md">30</td>
									<td class="pl-md">550</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div class="pletivo--table-bodljikava mtb-2xl">
						<table>
							<thead>
								<tr>
									<th colspan="6">
										<div class="table-title fs-md ptb-xl plr-xl">Bodljikava žica</div>
										<img src="/img/6-1.jpg" class="image" />
									</th>
								</tr>
								<tr class="fs-sm">
									<th class="ptb-lg pl-md">
										Promjer linijske <br />
										žice (mm)
									</th>
									<th class="pl-md">
										Promjer <br />
										bodlji (mm)
									</th>
									<th class="pl-md">
										Minimalna debljina cinčane <br />
										presvlake linijske žice prema <br />
										UNE-EN 10244-2 (g/m2)
									</th>
									<th class="pl-md">
										Minimalna debljina cinčane <br />
										presvlake bodlji prema UNE- <br />
										EN 10244-2 (g/m2)
									</th>
									<th class="pl-md">
										Minimalna zatezna čvrstoća <br />
										linijske žice (N/mm2)
									</th>
									<th class="pl-md">
										Minimalna zatezna <br />
										čvrstoća bodlji (N/mm2)
									</th>
								</tr>
							</thead>
							<tbody class="fs-base">
								<tr>
									<td class="ptb-lg pl-md">1,8</td>
									<td class="pl-md">2,6</td>
									<td class="pl-md">205</td>
									<td class="pl-md">195</td>
									<td class="pl-md">900</td>
									<td class="pl-md">800</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div class="pletivo--subtitle fs-lg pt-xl pr-2xl" id="pomocni-pribor">Pomoćni pribor</div>
					<p class="mt-xl mb-sm">U pomoćni pribor spadaju kliješta, zatezači, pocinčani i plastificirani, te spojnice.</p>

					<div class="pletivo--subtitle fs-lg pt-xl pr-2xl" id="mreze">Mreže i ostala oprema za sportske objekte</div>
					<p class="mt-xl mb-6xl">
						Za potrebe projekta, u mogućnosti smo dobaviti i montirati razne vrste mreža i ostale opreme potrebne za opremanje sportskih terena, dječjih igrališta,
						vrtića i škola.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	data() {
		return {
			visible: false,
			galery: false
		};
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
	font-family: $ff-sans;
}

.menu {
	width: 20%;
}

.pletivo {
	margin-left: 160px;
	&--subtitle {
		font-family: $ff-serif;
		color: $iron;
	}
	p {
		font-family: $ff-sans;
		font-size: 18px;
		color: $iron;
	}
	&--vareno {
		font-family: $ff-sans;
	}
}
table {
	color: $oxfordBlue;
}

.table-title {
	font-family: $ff-serif;
	background-color: $oxfordBlue;
	color: $secondary-color;
	font-weight: 400;
}

.image {
	//height: 308px;
	width: 100%;
}

thead {
	tr {
		text-align: justify;
		background-color: $metallum0;
	}
}

tbody {
	background-color: $metallum0;
	font-family: $ff-sans;
}

.galery {
	background-image: url('/img/image-6.jpg');
	background-size: cover;
	height: 621px;
	width: 100%;
}

@media (max-width: 1800px) {
	.pletivo {
		padding-right: 100px;
	}
}

@media (max-width: 1650px) {
	.pletivo {
		margin-left: 50px;
		padding-right: 50px;
	}
}

@media (max-width: 1550px) {
	.menu {
		display: none;
	}
	.pletivo {
		justify-content: center;
		width: 100%;
		margin-left: 0;
		padding-left: 100px;
		padding-right: 100px;
	}
}

@media (max-width: 1150px) {
	.galery {
		display: none;
	}
	.pletivo {
		padding-left: 0;
		padding-right: 0;
		margin-left: 0;
		&--box {
			padding-left: 80px;
			padding-right: 80px;
		}
	}
}

@media (max-width: 850px) {
	.pletivo {
		width: 100%;
		&--box {
			align-items: flex-start;
			padding-left: 0;
			padding-right: 0;
		}
		p,
		&--subtitle,
		&--vareno {
			padding-left: 50px;
			padding-right: 50px;
		}
	}
}

@media (max-width: 650px) {
	.pletivo {
		width: 100%;
		&--box {
			align-items: flex-start;
			padding-left: 0;
			padding-right: 0;
		}
		p,
		&--subtitle,
		&--vareno {
			padding-left: 24px;
			padding-right: 24px;
		}
	}
}
</style>
