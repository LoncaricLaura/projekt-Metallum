<template>
	<div class="box u-flex u-flex-fd--c u-flex-ai--fe mb-card">
		<div class="box-item u-flex u-flex-fd--c u-flex-jc--fe pt-xl" v-for="(service, i) in services" :key="i" :id="`${service.id}`">
			<div class="u-flex u-flex-fd--r">
				<div class="">
					<img :src="require(`/pages/img/${service.icon}.png`)" class="box-item--card" />
				</div>
				<div>
					<img :src="require(`/pages/img/${service.image}.jpg`)" class="box-item--img" />
				</div>
			</div>
			<div class="box-item u-flex u-flex-fd--r pt-lg">
				<div class="box-item--title mb-3xl fs-md">{{ service.title }}</div>
				<div class="box-item--text fs-base ml-2xl">
					{{ service.text }}
					<div class="service-list">
						<div v-for="(item, i) in service.servicesItems" :key="i" class="mt-md fs-base service-list__item pr-lg">
							{{ item }}
						</div>
					</div>
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
	&--img {
		height: 372px;
		width: 750px;
		object-fit: cover;
	}
}

@media (max-width: 1800px) {
	.box {
		padding-right: 25px;
	}
}

@media (max-width: 1500px) {
	.box {
		padding-left: 30px;
		padding-right: 30px;
		align-items: center;
	}
}
</style>
