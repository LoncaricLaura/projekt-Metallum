<template>
	<div class="box u-flex u-flex-fd--c hor-center mlr-main mb-card">
		<div class="box-item u-flex u-flex-fd--c u-flex-jc--fe" v-for="(service, i) in services" :key="i" :id="`${service.id}`">
			<div class="u-flex u-flex-fd--r">
				<div class="">
					<img :src="require(`/pages/img/${service.icon}.png`)" class="box-item--card " />
				</div>
				<div>
					<img :src="require(`/pages/img/${service.image}.jpg`)" class="box-item--img" />
				</div>
			</div>
			<div class="box-item u-flex u-flex-fd--r pt-lg">
				<div class="box-item--title mb-3xl fs-md mr-2xl">{{ service.title }}</div>
				<div class="box-item--text fs-base">{{ service.text }}</div>
			</div>
			<div v-for="(item, i) in service.servicesItems" :key="i" class="box-item--services mt-md fs-base">
				{{ item }}
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
.box {
	font-family: $ff-serif;
	font-weight: $fw-normal;
	gap: 50px;
	margin-left: 650px;
	width: 1102px;
	padding-top: 240px;
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
	&--services {
		font-family: $ff-sans;
		color: $iron80;
		font-weight: $fw-light;
	}
}
</style>
