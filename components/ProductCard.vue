<template>
	<div class="box u-grid mb-card plr-main">
		<div class="box-item u-flex u-flex-ai--c" v-for="(product, i) in products" :key="i">
			<div class="box-item--title ml-6xl fs-md">
				<h2 class="mb-2xl">{{ product.title }}</h2>
				<p class="fs-base">{{ product.text }}</p>
				<NuxtLink :to="localePath(`/proizvodi${product.button}`)" class="btn btn--primary fs-base mt-4xl">SAZNAJTE VIŠE</NuxtLink>
			</div>
			<div class="pos-a box-item--image u-flex u-flex-jc--fe ">
				<img :src="require(`/pages/proizvodi/images/${product.img}.png`)" />
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
		margin-left: 120px;
		margin-right: 120px;
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
		margin-left: 30px;
		margin-right: 30px;
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
		.box-item {
			height: 650px;
			&--image {
				align-items: flex-end;
				img {
					height: 100%;
					width: 65%;
				}
			}
			&--title {
				width: 300px;
			}
		}
	}
}

@media (max-width: 1100px) {
	.box {
		.box-item {
			align-items: flex-start;
			&--image {
				align-items: flex-end;
				img {
					height: 40%;
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
		padding-right: 30px;
		padding-bottom: 20px;
	}
}
</style>
