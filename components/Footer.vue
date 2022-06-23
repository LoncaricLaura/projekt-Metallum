<template>
	<div class="footer u-flex u-flex-fd--c plr-6xl">
		<div class="footer--logo mt-2xl">
			<NuxtLink :to="localePath('/')">
				<img src="~/assets/img/nofollow/logo-metallum.png">
			</NuxtLink>
			<div class="footer--text fs-lg">
				{{ $t('footer.subtitle') }}
			</div>
		</div>
		<div class="footer--row u-grid ptb-2xl">
			<div class="u-flex u-flex-fd--c">
				<div class="footer--menu fs-base u-flex u-flex-fd--r pt-footer">
					<NuxtLink :to="localePath('/proizvodi')">
						{{ $t('footer.products_title') }}
					</NuxtLink>
					<NuxtLink :to="localePath('/usluge')">
						{{ $t('footer.services_title') }}
					</NuxtLink>
					<NuxtLink :to="localePath('/galerija')">
						{{ $t('footer.gallery_title') }}
					</NuxtLink>
					<NuxtLink :to="localePath('/contact')">
						{{ $t('footer.contact_title') }}
					</NuxtLink>
				</div>
			</div>
			<div class="footer--text2 fs-base pt-4xl">
				<div class="pb-md">
					{{ $t('footer.address.title') }}
				</div>
				<div>{{ $t('footer.address.street') }}</div>
				<div>{{ $t('footer.address.city') }}</div>
				<div>{{ $t('footer.address.cntry') }}</div>
			</div>

			<div class="footer--text2 pt-4xl fs-base">
				<div class="footer--text2--title pb-md">
					{{ $t('footer.time.title') }}
				</div>
				<div>{{ $t('footer.time.day1') }}</div>
				<div>{{ $t('footer.time.hour') }}</div>
				<div>{{ $t('footer.time.day2') }}</div>
				<div>{{ $t('footer.time.hour2') }}</div>
			</div>
			<div class="footer--catalog u-flex center">
				<div class="footer--catalog--img">
					<img src="~/assets/img/nofollow/katalog.png">
				</div>
				<div class="btn u-flex u-flex-as--fe pb-md">
					{{ $t('footer.catalog') }}
					<a
						href="/static/dummy.pdf"
						download="dummy.pdf"
					><img
						src="~/assets/img/nofollow/mdi-light_download.png"
						class="ml-sm"
					></a>
				</div>
			</div>
		</div>

		<div class="footer--row2 u-grid u-grid-2">
			<div class="footer--email u-grid u-grid-2 center ptb-4xl">
				<div class="footer--text3 fs-md">
					{{ $t('footer.mail.title') }}
				</div>
				<div class="footer--text4 pr-3xl fs-lg">
					{{ $t('footer.mail.email') }}
				</div>
			</div>
			<div class="footer--number u-grid u-grid-2 center ptb-4xl">
				<div class="footer--text3 pl-xl fs-md">
					{{ $t('footer.phone.title') }}
				</div>
				<div class="footer--text4 u-flex u-flex-jc--fe fs-lg">
					{{ $t('footer.phone.numb') }}
				</div>
			</div>
		</div>

		<div class="u-flex u-flex-jc--sb pt-6xl mb-md">
			<div class="fs-base">
				© {{ new Date().getFullYear() }}{{ $t('footer.metallum') }}
			</div>
			<div>
				<img src="~/assets/img/nofollow/Group-2.png">
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.footer {
	color: $secondary-color;
	width: 100%;
	background: $oxford-blue;
	&--logo {
		position: absolute;
	}
	&--row {
		grid-template-columns: 850px auto auto auto;
	}
	&--text {
		font-family: $ff-serif;
		color: $metallum40;
		line-height: 64px;
	}
	&--menu {
		font-family: $ff-sans;
		line-height: 100%;
		color: $metallum0;
		gap: 30px;
		a {
			font-family: $ff-sans;
		}
	}
	&--catalog {
		background-color: $coral;
		width: 212px;
		height: 212px;
		justify-self: flex-end;
		&--img {
			position: absolute;
		}
	}
	.btn {
		font-family: $ff-serif;
		font-weight: 700;
		font-size: 14px;
		letter-spacing: 1px;
	}
	&--info {
		justify-self: flex-end;
	}
	&--text2 {
		font-family: $ff-sans;
		font-weight: 300;
		line-height: 180%;
		justify-self: center;
		&--title {
			font-weight: 400;
		}
	}
	&--row2 {
		border-style: solid;
		border-left: 1px;
		border-right: 1px;
	}
	&--email {
		border-style: solid;
		border-left: 1px;
		border-block-start: 0px;
		border-block-end: 0px;
	}

	&--text3 {
		font-family: $ff-serif;
		font-weight: 400;
	}
	&--text4 {
		font-family: $ff-serif;
		font-weight: 400;
		padding-left: 112px;
	}
}

@media (max-width: 1900px) {
	.footer {
		padding: 0 40px;
		&--row {
			grid-template-columns: auto auto auto auto;
		}
		&--text4 {
			padding-left: 10px;
		}
	}
}

@media (max-width: 1460px) {
	.footer {
		&--text3 {
			padding-left: 0;
		}
		&--text4 {
			padding-left: 0;
		}
	}
}

@media (max-width: 1300px) {
	.footer {
		height: auto;
		padding: 0 30px;
		&--row {
			width: 100%;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(2, 1fr);
			align-self: baseline;
			margin-top: 30px;
			padding-bottom: 0;
		}
		&--info {
			justify-self: start;
			padding-top: 184px;
		}
		&--catalog {
			justify-self: flex-start;
			margin-top: 40px;
		}
		&--text2 {
			display: flex;
			flex-direction: column;
			justify-self: flex-start;
			align-self: flex-start;
			order: -9999;
			padding-top: 184px;
		}
		&--text3,
		&--text4 {
			justify-content: flex-start;
			border-style: solid;
			color: $secondary-color;
			border-left: 1px;
			border-right: 1px;
			border-top: 0;
			width: 100%;
			padding-bottom: 20px;
		}
		&--menu {
			display: grid;
			grid-template-rows: repeat(2, minmax(0, 1fr));
			align-self: flex-start;
			padding-top: 0;
			margin-top: 40px;
		}
		&--row2 {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			border-style: none;
		}
		&--email {
			display: flex;
			flex-direction: column;
			color: $secondary-color;
			border-right: 1px;
			padding-bottom: 30px;
			padding-top: 0;
			width: 100%;
		}
		&--number {
			display: flex;
			flex-direction: column;
			padding-top: 0;
			width: 100%;
		}
	}
}

@media (max-width: 420px) {
	.footer {
		padding: 0 20px;
		&--row {
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(2, 1fr);
		}
		&--catalog {
			justify-self: flex-start;
			margin-top: 40px;
			width: 180px;
			height: 180px;
			&--img {
				margin-bottom: 25px;
			}
		}

		&--text4 {
			font-size: 20px;
		}
		&--logo {
			margin-top: 22px;
			img {
				height: 50px;
			}
		}
	}
	.btn {
		flex-direction: column;
		align-items: center;
		padding-bottom: 10px;
		img {
			width: 15px;
		}
	}
}
</style>
