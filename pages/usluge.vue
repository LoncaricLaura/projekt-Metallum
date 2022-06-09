<template>
	<div class="usluge u-flex u-flex-fd--r u-flex-jc--sb mlr-7xl">
		<div class="menu"><ServicesMenu /></div>
		<div class="content u-flex u-flex-ai--fe"><ServicesCard :services="services" /></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			services: [
				{
					id: 'izvid-terena',
					image: 'usluge',
					icon: 'field',
					title: this.$t('services.field.title'),
					text: this.$t('services.field.desc')
				},
				{
					id: 'izrada-nacrtne',
					image: 'usluge',
					icon: 'docs',
					title: this.$t('services.docs.title'),
					text: this.$t('services.docs.desc')
				},
				{
					id: 'prozivodnja-ograde-vrata',
					image: 'usluge',
					icon: 'fence-door',
					title: this.$t('services.fence_door.title'),
					text: this.$t('services.fence_door.desc'),
					servicesItems: [
						this.$t('services.fence_door.items.item1'),
						this.$t('services.fence_door.items.item2'),
						this.$t('services.fence_door.items.item3'),
						this.$t('services.fence_door.items.item4'),
						this.$t('services.fence_door.items.item5'),
						this.$t('services.fence_door.items.item6'),
						this.$t('services.fence_door.items.item7')
					]
				},
				{
					id: 'antikorozivna-zastita',
					image: 'usluge',
					icon: 'protection-el',
					title: this.$t('services.protection.title'),
					text: this.$t('services.protection.desc')
				},
				{
					id: 'dijamantno-busenje',
					image: 'dijamant-busenje',
					icon: 'drilling',
					title: this.$t('services.drilling.title'),
					text: this.$t('services.drilling.desc')
				},
				{
					id: 'montaza-ograde-vrata',
					image: 'usluge',
					icon: 'installation',
					title: this.$t('services.installation.title'),
					text: this.$t('services.installation.desc')
				},
				{
					id: 'automatizacija-vrata',
					image: 'usluge',
					icon: 'automation',
					title: this.$t('services.automation.title'),
					text: this.$t('services.automation.desc')
				},
				{
					id: 'servisiranje',
					image: 'usluge',
					icon: 'service',
					title: this.$t('services.service.title'),
					text: this.$t('services.service.desc')
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped>
.content {
	justify-self: flex-end;
}
@media (max-width: 1700px) {
	.usluge {
		margin-left: 60px;
		margin-right: 60px;
	}
}

@media (max-width: 1615px) {
	.usluge {
		margin-left: 30px;
		margin-right: 30px;
	}
}

@media (max-width: 1500px) {
	.usluge {
		flex-direction: column;
		//align-items: center;
		margin-left: 100px;
		margin-right: 100px;
	}
	.box {
		padding-left: 0;
		padding-right: 0;
	}
}

@media (max-width: 800px) {
	.usluge {
		margin-left: 30px;
		margin-right: 30px;
	}
}
</style>
