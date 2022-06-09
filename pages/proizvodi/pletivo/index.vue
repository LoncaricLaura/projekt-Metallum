<template>
	<div>
		<div class="bg u-flex u-flex-ai--c center u-flex-fd--c">
			<div class="fs-xl title txt-align-c">{{ $t('products_knit.title') }}</div>
			<div class="btn btn--primary mt-6xl">
				{{ $t('products_knit.pdf_btn') }}
				<img class="icon ml-sm" src="~/assets/img/nofollow/pdf-icon.png" />
			</div>
		</div>
		<div class="u-flex u-flex-fd--r u-flex-jc--sb">
			<div class="menu"><ProductMenu /></div>
			<div class="pletivo u-flex u-flex-fd--c u-flex-ai--fe mtb-6xl plr-main">
				<div class="galery u-flex u-flex-ai--fe u-flex-jc--fe mt-md mb-6xl">
					<div class="btn btn--primary u-flex u-flex-ai--c" @click="isOpen = !isOpen">
						<img src="~/assets/img/nofollow/mdi-light_picture.png" class="mr-md" />
						{{ $t('products_knit.gallery') }}
					</div>
					<div v-if="isOpen">
						<SliderProducts :imgs="['6']" />
					</div>
				</div>
				<div class="slider-mobile"><SliderProductMobile :imgs="['6']" /></div>
				<div class="pletivo--box u-flex u-flex-fd--c u-flex-ai--fs">
					<div class="pletivo--subtitle fs-lg pr-2xl pt-xl" id="uni-pletivo">{{ $t('products_knit.uni_knit.subtitle') }}</div>
					<p class="mtb-xl fs-base">
						{{ $t('products_knit.uni_knit.desc') }}
					</p>
					<p class="mb-3xl fs-base">
						{{ $t('products_knit.uni_knit.desc2') }}
					</p>

					<div class="pletivo--table-pocincano">
						<div class="pletivo--table-title">
							<div class="table-title fs-md ptb-lg plr-xl">{{ $t('products_knit.uni_knit.table1.title') }}</div>
							<img src="~/assets/img/products/pletivo/pocincano_pletivo.png" class="image u-flex u-flex-as--s" />
						</div>
						<div class="table__wrap">
							<table>
								<thead>
									<tr class="fs-sm">
										<th class="ptb-lg pl-md">{{ $t('products_knit.uni_knit.table1.sub1') }}</th>
										<th class="pl-md">{{ $t('products_knit.uni_knit.table1.sub2') }}</th>
										<th class="pl-md">{{ $t('products_knit.uni_knit.table1.sub3') }}</th>
										<th class="pl-md">{{ $t('products_knit.uni_knit.table1.sub4') }}</th>
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
										<td colspan="4" class="fs-sm ptb-md pl-md">{{ $t('products_knit.uni_knit.table1.desc') }}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div class="pletivo--table-plastificirano ptb-2xl" id="plastificirano-pletivo">
						<div class="pletivo--table-title">
							<div class="table-title fs-md ptb-xl plr-xl">{{ $t('products_knit.uni_knit.table2.title') }}</div>
							<img src="~/assets/img/products/pletivo/6-1.jpg" class="image u-flex u-flex-as--s" />
						</div>
						<div class="table__wrap">
							<table>
								<thead>
									<tr class="fs-sm">
										<th class="ptb-lg pl-md">{{ $t('products_knit.uni_knit.table2.sub1') }}</th>
										<th class="pl-md">{{ $t('products_knit.uni_knit.table2.sub2') }}</th>
										<th class="pl-md">{{ $t('products_knit.uni_knit.table2.sub3') }}</th>
										<th class="pl-md">{{ $t('products_knit.uni_knit.table2.sub4') }}</th>
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
										<td colspan="4" class="fs-sm ptb-md pl-md">{{ $t('products_knit.uni_knit.table2.desc') }}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div class="pletivo--subtitle fs-lg pt-xl pr-2xl" id="farmer-pletivo">{{ $t('products_knit.farmer.title') }}</div>
					<p class="mt-xl mb-sm fs-base">{{ $t('products_knit.farmer.desc') }}</p>
					<p class="mb-md fs-base">{{ $t('products_knit.farmer.desc2') }}</p>
					<p class="mb-md fs-base">{{ $t('products_knit.farmer.desc3') }}</p>
					<p class="fs-base">{{ $t('products_knit.farmer.desc4') }}</p>

					<div class="pletivo--subtitle fs-lg pt-6xl pr-2xl" id="vareno-pletivo">{{ $t('products_knit.boiled.title') }}</div>
					<p class="mt-xl mb-sm fs-base">
						{{ $t('products_knit.boiled.desc') }}
					</p>
					<p class="fs-base">{{ $t('products_knit.boiled.desc2') }}</p>
					<div class="pletivo--vareno mt-3xl u-flex u-flex-fd--r u-flex-as--fs">
						<div class="pletivo--vareno--img mr-xl">
							<img src="~/assets/img/products/pletivo/50-100-mm.png" />
							<div class="mt-sm">100/50 mm</div>
						</div>
						<div>
							<img src="~/assets/img/products/pletivo/50-50-mm.png" />
							<div class="mt-sm">50/50 mm</div>
						</div>
					</div>

					<div class="pletivo--subtitle fs-lg pt-6xl pr-2xl" id="pribor">{{ $t('products_knit.acc_knit.title') }}</div>
					<p class="mt-xl fs-base">
						{{ $t('products_knit.acc_knit.desc') }}<br />
						{{ $t('products_knit.acc_knit.desc2') }}
					</p>

					<div class="pletivo--table-pocincana mt-2xl">
						<div class="pletivo--table-title">
							<div class="table-title fs-md ptb-xl plr-xl">{{ $t('products_knit.acc_knit.table3.title') }}</div>
							<img src="~/assets/img/products/pletivo/6-1.jpg" class="image u-flex u-flex-as--s" />
						</div>
						<div class="table__wrap">
							<table>
								<thead>
									<tr class="fs-sm">
										<th class="ptb-lg pl-md">{{ $t('products_knit.acc_knit.table3.sub1') }}</th>
										<th class="pl-md">
											{{ $t('products_knit.acc_knit.table3.sub2') }} <br />
											UNE-EN 102 18-2 (mm)
										</th>
										<th class="pl-md">
											{{ $t('products_knit.acc_knit.table3.sub3') }}<br />
											UNE-EN 10244-2 (g/m2)
										</th>
										<th class="pl-md">{{ $t('products_knit.acc_knit.table3.sub4') }}</th>
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
										<td colspan="4" class="fs-sm ptb-md pl-md">{{ $t('products_knit.acc_knit.table3.desc') }}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div class="pletivo--table-plastificirana mt-2xl">
						<div class="pletivo--table-title">
							<div class="table-title fs-md ptb-xl plr-xl">{{ $t('products_knit.acc_knit.table4.title') }}</div>
							<img src="~/assets/img/products/pletivo/6-1.jpg" class="image u-flex u-flex-as--s" />
						</div>
						<div class="table__wrap">
							<table>
								<thead>
									<tr class="fs-sm">
										<th class="ptb-md plr-md">
											{{ $t('products_knit.acc_knit.table4.sub1') }}
										</th>
										<th class="plr-md">
											{{ $t('products_knit.acc_knit.table4.sub2') }}
										</th>
										<th class="plr-md ptb-md">
											{{ $t('products_knit.acc_knit.table4.sub3') }}<br />
											UNE-EN 102 18-2 (mm)
										</th>
										<th class="plr-md">
											{{ $t('products_knit.acc_knit.table4.sub4') }}
										</th>
										<th class="plr-md">
											{{ $t('products_knit.acc_knit.table4.sub5') }}
										</th>
										<th class="plr-md">
											{{ $t('products_knit.acc_knit.table4.sub6') }}<br />
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
					</div>

					<div class="pletivo--table-bodljikava mtb-2xl">
						<div class="pletivo--table-title">
							<div class="table-title fs-md ptb-xl plr-xl">{{ $t('products_knit.acc_knit.table5.title') }}</div>
							<img src="~/assets/img/products/pletivo/6-1.jpg" class="image u-flex u-flex-as--s" />
						</div>
						<div class="table__wrap">
							<table>
								<thead>
									<tr class="fs-sm">
										<th class="ptb-lg plr-md">
											{{ $t('products_knit.acc_knit.table5.sub1') }}
										</th>
										<th class="plr-md">
											{{ $t('products_knit.acc_knit.table5.sub2') }}
										</th>
										<th class="plr-md">
											{{ $t('products_knit.acc_knit.table5.sub3') }}
										</th>
										<th class="plr-md">
											{{ $t('products_knit.acc_knit.table5.sub4') }}
										</th>
										<th class="plr-md">
											{{ $t('products_knit.acc_knit.table5.sub5') }}
										</th>
										<th class="plr-md">
											{{ $t('products_knit.acc_knit.table5.sub6') }}
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
					</div>

					<div class="pletivo--subtitle fs-lg pt-xl pr-2xl" id="pomocni-pribor">{{ $t('products_knit.aux_acc.title') }}</div>
					<p class="mt-xl mb-sm fs-base">{{ $t('products_knit.aux_acc.desc') }}.</p>

					<div class="pletivo--subtitle fs-lg pt-xl pr-2xl" id="mreze">{{ $t('products_knit.mesh.title') }}</div>
					<p class="mt-xl mb-6xl fs-base">
						{{ $t('products_knit.mesh.desc') }}
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
			isOpen: false
		};
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
.bg {
	background: #428ace;
	background-image: url('~/assets/img/products/pletivo/6-1.jpg');
	background-blend-mode: multiply;
	height: 580px;
	width: 100%;
	background-size: cover;
}

.title {
	font-family: $ff-serif;
	color: $metallum0;
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
	display: block;
	position: static;
	&--subtitle {
		font-family: $ff-serif;
		color: $iron;
	}
	p {
		font-family: $ff-sans;
		color: $iron;
	}
	&--vareno {
		font-family: $ff-sans;
	}
	&--table-title {
		width: 1102px;
	}
}
table {
	color: $oxfordBlue;
	width: 1102px;
}

.table-title {
	font-family: $ff-serif;
	background-color: $oxfordBlue;
	color: $secondary-color;
	font-weight: 400;
}

.image {
	width: 100%;
}

thead {
	tr {
		text-align: justify;
		background-color: $metallum0;
		letter-spacing: 0.08em;
		line-height: 180%;
	}
}

tbody {
	background-color: $metallum0;
	font-family: $ff-sans;
}

.galery {
	background-image: url('~/assets/img/products/pletivo/image-6.jpg');
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
		padding-left: 90px;
		padding-right: 90px;
	}
}

@media (max-width: 1250px) {
	.galery {
		display: none;
	}
	.pletivo {
		padding-left: 0;
		padding-right: 0;
		margin-left: 0;
		&--box {
			display: block;
			position: static;
			padding-left: 0;
			padding-right: 0;
		}
		p,
		&--subtitle,
		&--vareno {
			position: static;
			padding-left: 50px;
			padding-right: 50px;
		}
		&--table-title {
			width: 100%;
		}
		table {
			left: 0;
			right: 0;
			min-width: 1000px;
			width: 100%;
		}
		.table__wrap {
			overflow-x: auto;
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
		margin-top: 50px;
		&--box {
			align-items: flex-start;
			padding-left: 0;
			padding-right: 0;
		}
		p,
		&--subtitle,
		&--vareno {
			padding-left: 20px;
			padding-right: 20px;
		}
		&--vareno {
			display: flex;
			//flex-direction: column;
			&--img {
				margin-right: 10px;
			}
			img {
				width: 140px;
			}
		}
	}
}
</style>
