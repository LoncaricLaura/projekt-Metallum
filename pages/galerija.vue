<template>
	<div class="gallery u-flex u-flex-fd--r u-flex-jc--sb ptb-gallery mlr-7xl">
		<div class="menu"><GalleryMenu /></div>
		<div class="box u-flex">
			<div class="u-grid">
				<div class="fs-lg mb-md pt-lg" id="pletivo">{{ $t('gallery.knit_title') }}</div>
				<div class="box--pletivo u-grid u-grid-3 mb-2xl">
					<img src="~/assets/img/gallery/pletivo-1.png" />
					<img src="~/assets/img/gallery/pletivo-2.png" />
					<img src="~/assets/img/gallery/pletivo-3.png" class="box--pletivo--item3" />
					<img src="~/assets/img/gallery/pletivo-4.png" class="box--pletivo--item4" />
					<img src="~/assets/img/gallery/pletivo-5.png" class="box--pletivo--item5" />
					<img src="~/assets/img/gallery/pletivo-6.png" class="box--pletivo--item6" />
					<div class="box--pletivo--katalog u-flex u-flex-fd--c u-flex-ai--c u-flex-jc--c">
						<img class="katalog" src="~/assets/img/gallery/katalog.png" />
						<p class="mt-5xl">
							{{ $t('gallery.catalog') }}
							<img src="~/assets/img/nofollow/mdi-light_download.png" class="ml-sm" />
						</p>
					</div>
					<img src="~/assets/img/gallery/pletivo-7.png" class="box--pletivo--item7" />
					<img src="~/assets/img/gallery/pletivo-8.png" class="box--pletivo--item8" />
					<img src="~/assets/img/gallery/pletivo-9.png" class="box--pletivo--item9" />
					<img src="~/assets/img/gallery/pletivo-10.png" class="box--pletivo--item10" />
					<div class="box--pletivo--kontakt u-flex u-flex-fd--r u-flex-ai--c plr-6xl">
						<div class="fs-lg">
							{{ $t('gallery.contact_desc') }}
							<div class="box--pletivo--kontakt--btn mt-6xl">
								{{ $t('gallery.contact_button') }}
								<img src="~/assets/img/gallery/kont.png" class="ml-sm" />
							</div>
						</div>
						<div class="box--pletivo--kontakt--img ml-6xl"><img src="~/assets/img/gallery/kontakt.png" /></div>
					</div>
					<img src="~/assets/img/gallery/pletivo-11.png" class="box--pletivo--item11" />
				</div>

				<div class="fs-lg mb-md pt-lg" id="valovit-mreza">{{ $t('gallery.mesh_title') }}</div>
				<div class="box--pletivo u-grid u-grid-3 mb-2xl">
					<img src="~/assets/img/gallery/pletivo-1.png" />
					<img src="~/assets/img/gallery/pletivo-2.png" />
					<img src="~/assets/img/gallery/pletivo-3.png" class="box--pletivo--item3" />
					<img src="~/assets/img/gallery/pletivo-4.png" class="box--pletivo--item4" />
					<img src="~/assets/img/gallery/pletivo-5.png" class="box--pletivo--item5" />
					<img src="~/assets/img/gallery/pletivo-6.png" class="box--pletivo--item6" />
					<div class="box--pletivo--katalog u-flex u-flex-fd--c u-flex-ai--c u-flex-jc--c">
						<img class="katalog" src="~/assets/img/gallery/katalog.png" />
						<p class="mt-5xl">
							{{ $t('gallery.catalog') }}
							<img src="~/assets/img/nofollow/mdi-light_download.png" class="ml-sm" />
						</p>
					</div>
					<img src="~/assets/img/gallery/pletivo-7.png" class="box--pletivo--item7" />
					<img src="~/assets/img/gallery/pletivo-8.png" class="box--pletivo--item8" />
					<img src="~/assets/img/gallery/pletivo-9.png" class="box--pletivo--item9" />
					<img src="~/assets/img/gallery/pletivo-10.png" class="box--pletivo--item10" />
				</div>

				<div class="fs-lg mb-md pt-lg" id="stupovi">{{ $t('gallery.pillars_title') }}</div>
				<div class="box--stupovi u-grid u-grid-3 mb-2xl">
					<img src="~/assets/img/gallery/stupovi-1.png" class="box--stupovi--item1" />
					<img src="~/assets/img/gallery/stupovi-2.png" class="box--stupovi--item2" />
					<img src="~/assets/img/gallery/pletivo-1.png" class="box-stupovi--item3" />
					<div class="box--stupovi--kontakt u-flex u-flex-fd--r u-flex-ai--c plr-6xl">
						<div class="fs-lg">
							{{ $t('gallery.contact_desc') }}
							<div class="box--pletivo--kontakt--btn mt-6xl">
								{{ $t('gallery.contact_button') }}
								<img src="~/assets/img/gallery/kont.png" class="ml-sm" />
							</div>
						</div>
						<div class="box--pletivo--kontakt--img ml-6xl"><img src="~/assets/img/gallery/kontakt.png" /></div>
					</div>
					<img src="~/assets/img/gallery/pletivo-4.png" class="box--stupovi--item4" />
					<img src="~/assets/img/gallery/pletivo-5.png" class="box--pletivo--item5" />
					<img src="~/assets/img/gallery/pletivo-6.png" class="box--pletivo--item6" />
					<img src="~/assets/img/gallery/stupovi-2.png" class="box--stupovi--item" />
					<img src="~/assets/img/gallery/pletivo-7.png" class="box--stupovi--item7" />
					<img src="~/assets/img/gallery/pletivo-8.png" class="box--stupovi--item8" />
					<img src="~/assets/img/gallery/pletivo-9.png" class="box--stupovi--item9" />
					<img src="~/assets/img/gallery/pletivo-10.png" class="box--stupovi--item10" />
					<div class="box--pletivo--kontakt u-flex u-flex-fd--r u-flex-ai--c plr-6xl ptb-6xl">
						<div class="fs-lg">
							{{ $t('gallery.contact_desc') }}
							<div class="box--pletivo--kontakt--btn mt-6xl">
								{{ $t('gallery.contact_button') }}
								<img src="~/assets/img/gallery/kont.png" class="ml-sm" />
							</div>
						</div>
						<div class="box--pletivo--kontakt--img ml-6xl"><img src="~/assets/img/gallery/kontakt.png" /></div>
					</div>
					<div class="box--stupovi--katalog u-flex u-flex-fd--c u-flex-ai--c u-flex-jc--c">
						<img class="katalog" src="~/assets/img/gallery/katalog.png" />
						<p class="mt-5xl">
							{{ $t('gallery.catalog') }}
							<img src="~/assets/img/nofollow/mdi-light_download.png" class="ml-sm" />
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.menu {
	width: 100%;
}
.box {
	width: 70%;
	//height: 100%;
	margin-left: 100px;
	&--pletivo {
		grid-template-rows: repeat(6);
		&--item4 {
			grid-row: 2 / span 2;
		}
		&--item5 {
			grid-column: 2 / span 2;
		}
		&--item6 {
			grid-column: 2;
		}
		&--katalog {
			background-color: $oxfordBlue;
			width: 100%;
			height: 100%;
			font-family: $ff-serif;
			color: $secondary-color;
			font-size: 14px;
		}
		&--item7 {
			grid-column: 1 / span 2;
		}
		&--item8 {
			grid-row: 4 / span 2;
			grid-column: 3;
		}
		&--item9 {
			grid-row: 5;
		}
		&--kontakt {
			grid-column: 1 / span 2;
			background-color: $coral;
			font-family: $ff-serif;
			color: $secondary-color;
			&--btn {
				font-size: 14px;
			}
		}
	}

	&--stupovi {
		grid-template-rows: repeat(7);
		&--item1 {
			grid-column: 1 / span 2;
		}
		&--kontakt {
			grid-column: 2 / span 2;
			background-color: $coral;
			font-family: $ff-serif;
			color: $secondary-color;
		}
		&--katalog {
			background-color: $oxfordBlue;
			width: 100%;
			height: 100%;
			font-family: $ff-serif;
			color: $secondary-color;
		}
		&--item4 {
			grid-row: 3 / span 2;
		}
		&--item7 {
			grid-column: 1 / span 2;
		}
		&--item8 {
			grid-row: 5 / span 2;
			grid-column: 3;
		}

		&--item9 {
			grid-row: 6;
		}
	}
}

@media (max-width: 1800px) {
	.gallery {
		margin-left: 40px;
		margin-right: 40px;
	}
	.box {
		width: 100%;
	}
}

@media (max-width: 1650px) {
	.gallery {
		flex-direction: column;
		padding-left: 140px;
		padding-right: 140px;
	}
	.box {
		align-items: center;
		margin-left: 0;
	}
}

@media (max-width: 1450px) {
	.gallery {
		flex-direction: column;
		padding-left: 60px;
		padding-right: 60px;
	}
	.box {
		&--pletivo {
			grid-template-columns: repeat(2);
			grid-template-rows: repeat(9);
			&--item3 {
				grid-row: 2;
				grid-column: 2;
			}
			&--item4 {
				grid-row: 2 / span 2;
			}
			&--item5 {
				grid-column: 1 / span 2;
				grid-row: 4;
			}
			&--item6 {
				grid-column: 2;
			}
			&--katalog {
				background-color: $oxfordBlue;
				width: 100%;
				height: 100%;
				font-family: $ff-serif;
				color: $secondary-color;
				grid-column: 2;
				grid-row: 5;
			}
			&--item7 {
				grid-column: 1 / span 2;
			}
			&--item8 {
				grid-row: 6 / span 2;
				grid-column: 2;
			}
			&--item9 {
				grid-row: 5;
			}
			&--item10 {
				grid-row: 6;
			}
			&--item11 {
				grid-row: 7;
			}
			&--kontakt {
				grid-column: 1 / span 2;
				background-color: $coral;
				font-family: $ff-serif;
				color: $secondary-color;
				padding-top: 40px;
				padding-bottom: 40px;
			}
		}
		&--stupovi {
			grid-template-rows: repeat(10);
			grid-template-columns: repeat(2);
			&--item {
				grid-row: 11;
				grid-column: 2;
			}
			&--item1 {
				grid-column: 1 / span 2;
			}
			&--item2 {
				grid-column: 1;
			}
			&--kontakt {
				grid-column: 1 / span 2;
				background-color: $coral;
				font-family: $ff-serif;
				color: $secondary-color;
				padding-top: 40px;
				padding-bottom: 40px;
			}
			&--katalog {
				grid-row: 7;
			}
			&--item4 {
				grid-row: 5 / span 2;
			}
			&--item7 {
				grid-column: 1 / span 2;
			}
			&--item8 {
				grid-row: 5 / span 2;
				grid-column: 2;
			}

			&--item9 {
				grid-row: 10;
			}
			&--item10 {
				grid-row: 10;
			}
		}
	}
}

@media (max-width: 1000px) {
	.gallery {
		padding-left: 30px;
		padding-right: 30px;
		margin-left: 0;
		margin-right: 0;
	}
	.box {
		img {
			width: 100%;
			height: 100%;
		}
		&--pletivo {
			grid-template-columns: repeat(2, 1fr);
			gap: 10px;
			&--katalog {
				width: 100%;
				height: 100%;
				img {
					width: auto;
					height: auto;
				}
				p {
					margin-top: 20px;
				}
			}
			&--kontakt {
				width: 100%;
				height: 100%;
				padding-left: 30px;
				padding-right: 30px;
				img {
					width: auto;
					height: auto;
					margin-left: 0;
				}
				&--img {
					margin-left: 10px;
				}
			}
		}
		&--stupovi {
			gap: 10px;
			grid-template-columns: repeat(2, 1fr);
			&--katalog {
				img {
					width: auto;
					height: auto;
				}
				p {
					margin-top: 20px;
				}
			}
			&--kontakt {
				padding-left: 30px;
				padding-right: 30px;
				img {
					width: auto;
					height: auto;
					margin-left: 0;
				}
			}
		}
	}
}

@media (max-width: 800px) {
	.gallery {
		flex-direction: column;
		padding-left: 20px;
		padding-right: 20px;
		padding-bottom: 100px;
	}
}

@media (max-width: 500px) {
	.gallery {
		padding-top: 137px;
	}
	.box {
		&--pletivo {
			&--kontakt {
				&--img {
					display: none;
				}
			}
			&--katalog {
				padding: 0 15px;
				.katalog {
					display: none;
				}
			}
		}
		&--stupovi {
			&--kontakt {
				&--img {
					display: none;
				}
			}
			&--katalog {
				padding: 0 15px;
				.katalog {
					display: none;
				}
			}
		}
	}
}
</style>
