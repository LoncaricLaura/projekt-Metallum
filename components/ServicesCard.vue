<template>
	<div class="box u-flex u-flex-fd--c u-flex-ai--fe mb-card">
		<div class="box-item u-flex u-flex-fd--c u-flex-jc--fe pt-xl" v-for="(service, i) in services" :key="i" :id="`${service.id}`">
			<div class="u-flex u-flex-fd--r">
				<div class="box-item--card u-flex u-flex-jc--c">
					<img :src="require(`~/assets/img/services/${service.icon}.png`)" class="box-item--card_img" />
				</div>
				<div>
					<img :src="require(`~/assets/img/services/${service.image}.jpg`)" class="box-item--img" />
				</div>
			</div>
			<div class="box-item--about u-flex u-flex-fd--r pt-lg">
				<div class="box-item--title mb-3xl fs-md">{{ service.title }}</div>
				<div class="box-item--text fs-base ml-2xl">
					{{ service.text }}
					<ul class="service-list">
						<li v-for="(item, i) in service.servicesItems" :key="i" class="mt-md fs-base service-list__item pr-lg u-flex u-flex-ai--fs">
							<!-- <div class="red-dot"></div> -->
							<p>{{ item }}</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		services: {
			type: Array
		}
	}
};
</script>

<style lang="scss" scoped>
.service-list {
	display: flex;
	flex-wrap: wrap;
	// list-style-type: none;
	list-style-image: url('~/assets/img/nofollow/red-dot.png') !important;
	&__item {
		width: 50%;
		font-family: $ff-sans;
		color: $iron80;
		font-weight: $fw-light;
	}
}
.box {
	font-family: $ff-serif;
	font-weight: $fw-normal;
	gap: 50px;
	width: auto;
	padding-top: 240px;
	//padding-left: 220px;
}

.box-item {
	&--title {
		width: 346px;
	}
	&--text {
		width: 724px;
		font-family: $ff-sans;
		color: $iron80;
		font-weight: $fw-normal;
	}
	&--card {
		width: 346px;
		height: 372px;
		background-color: $coral;
		object-fit: none;
	}
	&--card_img {
		padding: 100px;
	}
	&--img {
		height: 372px;
		width: 750px;
		object-fit: cover;
	}
}

// .red-dot {
// 	background-color: $coral;
// 	width: 2px;
// 	height: 2px;
// 	border-radius: 50%;
// }

@media (max-width: 1800px) {
	.box {
		padding-right: 25px;
	}
}

@media (max-width: 1500px) {
	.box {
		width: 100%;
		padding-left: 30px;
		padding-right: 30px;
		align-items: center;
	}
}

@media (max-width: 1150px) {
	.box {
		padding-top: 200px;
	}
	.box-item {
		flex-direction: row;
		justify-content: center;
		&--img {
			display: none;
		}
		&--about {
			flex-direction: column;
			margin-left: 30px;
			padding-top: 0;
		}
		&--text,
		&--title {
			margin-left: 0;
			width: 100%;
			margin-bottom: 30px;
		}
	}
	.service-list {
		flex-direction: column;
		flex-wrap: nowrap;
		&__item {
			width: 100%;
		}
	}
}

@media (max-width: 800px) {
	.box {
		gap: 30px;
	}
	.box-item {
		flex-direction: column;
		align-items: center;
		&--about {
			margin-left: 0;
			padding-top: 24px;
		}
		&--card {
			width: auto;
		}
		&--card_img {
			padding: 80px;
		}
		img {
			width: 100%;
		}
	}
}

@media (max-width: 400px) {
	.box-item {
		&--card_img {
			padding: 0;
			margin: 100px;
		}
	}
}
</style>
