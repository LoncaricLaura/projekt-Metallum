<template>
	<div class="box u-grid mb-card plr-main">
		<div class="box-item u-flex u-flex-ai--c" v-for="(product, i) in products" :key="i">
			<div class="box-item--title ml-6xl fs-md">
				<h2 class="mb-lg">{{ product.title }}</h2>
				<p class="fs-base">{{ product.text }}</p>
				<NuxtLink :to="localePath(`/proizvodi${product.button}`)" class="btn btn--primary fs-base mt-4xl">{{ $t('home.button_more') }}</NuxtLink>
			</div>
			<div class="pos-a box-item--image u-flex u-flex-jc--fe">
				<img :src="require(`~/assets/img/products/${product.img}.png`)" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		products: {
			type: Array
		}
	}
};
</script>

<style lang="scss" scoped>
.box {
	font-family: $ff-serif;
	font-weight: $fw-normal;
	gap: 35px;
}

p {
	font-family: $ff-sans;
}

h2 {
	color: $gray1;
	font-weight: normal;
}

.box-item {
	background-color: $metallum0;
	width: 100%;
	height: 493px;
	position: relative;
	&--title {
		width: 600px;
		z-index: 2;
	}
	&--image {
		position: absolute;
		width: 100%;
		height: 100%;
		img {
			object-fit: cover;
			width: 55%;
		}
	}
}

@media (max-width: 1900px) {
	.box {
		padding-left: 120px;
		padding-right: 120px;
	}
	p {
		width: 400px;
	}
	.box-item {
		&--title {
			width: 450px;
		}
	}
}

@media (max-width: 1600px) {
	.box {
		padding-left: 30px;
		padding-right: 30px;
		.box-item {
			align-items: center;
			&--image {
				align-items: flex-end;
				img {
					height: 100%;
					width: 65%;
				}
			}
		}
	}
}

@media (max-width: 1350px) {
	.box {
		padding-left: 20px;
		padding-right: 20px;
		.box-item {
			&--image {
				align-items: flex-end;
				img {
					height: 100%;
					width: 60%;
				}
			}
			&--title {
				width: 100%;
			}
		}
	}
}

@media (max-width: 1150px) {
	.box {
		.box-item {
			height: 650px;
			align-items: flex-start;
			margin-bottom: 30px;

			&--image {
				align-items: flex-end;
				img {
					height: 60%;
					width: 100%;
				}
			}
			&--title {
				margin-top: 35px;
				margin-left: 30px;
			}
		}
	}
	.btn {
		margin-top: 10px;
		padding: 15px 25px;
	}
	p {
		width: fit-content;
		padding-right: 50px;
		padding-bottom: 15px;
	}
}

@media (max-width: 800px) {
	.box {
		.box-item {
			&--image {
				img {
					height: 40%;
				}
			}
		}
	}
}

@media (max-width: 400px) {
	.box {
		.box-item {
			&--title {
				margin-left: 15px;
			}
			&--image {
				img {
					height: 26%;
				}
			}
		}
	}
	p {
		padding-right: 15px;
	}
}
</style>
