<template>
	<div>
		<ServicesMenu />
		<ServicesCard :services="services" />
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
					title: 'Izvid terena',
					text: 'Po prihvaćanju ponude, naš inženjer gradilišta izlazi na konačnu izmjeru terena za pripremu nacrta, prije početka proizvodnje.'
				},
				{
					id: 'izrada-nacrtne',
					image: 'usluge',
					icon: 'docs',
					title: 'Izrada nacrtne dokumentacije za vrata i ograde dizajna po želji klijenta',
					text:
						'Svim klijentima koji kupuju vrata izrađujemo radioničke nacrte istih, a za sve vanstandardne ograde I vrata izrađujemo nacrte od ideje do izvođenja.'
				},
				{
					id: 'prozivodnja-ograde-vrata',
					image: 'usluge',
					icon: 'fence-door',
					title: 'Proizvodnja ograda i vrata',
					text:
						'Za sve proizvode iz proizvodnog programa nudimo kompletnu uslugu dostave, pripremnih igrađevinskih radova, te montaže i završne obrade prije predaje objekta prema ugovorenom obujmu posla. Usluge uključuju:',
					servicesItems: [
						'Izlazak na teren radi uvida u obujam posla i planiranja potrebnog materijala',
						'Pripremu materijala prema dogovoru na terenu',
						'Prijevoz materijala na gradilište',
						'Pripremne i građevinske radove',
						'Montažu stupova, elemenata ograde i vratiju',
						'Završnu obradu ograde i čišćenje terena prije predaje gotovog objekta',
						'Predaju objekta korisniku'
					]
				},
				{
					id: 'antikorozivna-zastita',
					image: 'usluge',
					icon: 'protection-el',
					title: 'Antikorozivna zaštita elemenata',
					text:
						'Proizvodi iz našeg proizvodnog programa zaštićuju se protiv korozije primjenom suvremenih tehnologija pocinčavanja i plastifikacije. U vlastitom plastifikacijskom pogonu plastificiramo ogradne elemente u RAL boju prema odabiru klijent'
				},
				{
					id: 'dijamantno-busenje',
					image: 'dijamant-busenje',
					icon: 'drilling',
					title: 'Dijamantno bušenje armiranog betona',
					text:
						'Usluge dijamantnog bušenja armiranog betona obavljamo najsuvremenijom opremom. U mogućnosti smo bušiti rupe promjera 25 mm - 162 mm do dubine od 400mm. '
				},
				{
					id: 'montaza-ograde-vrata',
					image: 'usluge',
					icon: 'installation',
					title: 'Montaža ograde i vratiju',
					text:
						'Ukoliko iz bilo kojeg razloga dođe do oštećenja ograde (udar autom, provala, …), našim klijentima kojima smo izvršili montžu nudimo popravak oštećenja u najkraćem mogućem roku.'
				},
				{
					id: 'automatizacija-vrata',
					image: 'usluge',
					icon: 'automation',
					title: 'Automatizacija vratiju',
					text:
						'Ukoliko iz bilo kojeg razloga dođe do oštećenja ograde (udar autom, provala, …), našim klijentima kojima smo izvršili montžu nudimo popravak oštećenja u najkraćem mogućem roku.'
				},
				{
					id: 'servisiranje',
					image: 'usluge',
					icon: 'service',
					title: 'Servisiranje na terenu',
					text:
						'Ukoliko iz bilo kojeg razloga dođe do oštećenja ograde (udar autom, provala, …), našim klijentima kojima smo izvršili montžu nudimo popravak oštećenja u najkraćem mogućem roku.'
				}
			]
		};
	}
};
</script>
