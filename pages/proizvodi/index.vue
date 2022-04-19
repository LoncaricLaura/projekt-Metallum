<template>
	<div class="pt-footer">
		<HeaderDark />
		<ProductCard :products="products" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			products: [
				{
					img: 'fence_blue_1',
					title: 'Pletivo',
					text:
						'Univerzal pletiva, od pocinčane ili pocinčane i plastificirane žice, namijenjena su za ograđivanje sportskih površina, stambenih prostora, vrtova, parkova, te poljoprivrednih i sličnih površina.'
				},
				{
					img: 'fence_blue_1',
					title: 'Valovita (vibro) mreža',
					text: 'Vibro pletivo je temelj za izradu čvrstih ograda ili vrata, a koristi se i u građevinarstvu.'
				},
				{
					img: 'fence_blue_1',
					title: 'Stupovi (kosnici, konzole, prečke',
					text: 'Ovisno o zahtjevima projekta, nudimo različite profile i dimenzije stupova (okrugli, kvadratni, pravokutni, ovalni, poluovalni, elipsa).'
				},
				{
					img: 'Barbed-Wire-Fence.G03',
					title: 'Panelni sustavi',
					text:
						'Panelni ogradni sustavi osiguravaju maksimalnu funkcionalnost, zaštitu i estetiku našim klijentima. Svaki element se u svakoj proizvodnoj fazi pomno testira radi osiguranja maksimnalne kvalitete.'
				},
				{
					img: 'Barbed-Wire-Fence.G03',
					title: 'Pružni sustavi',
					text:
						'Pružni sustavi tvrtke Wisniowski namjenjeni su za rezidencijalne, ali i javne objekte. U kompletu sa ogradom, moguće je proizvesti i vrata u pripadajućem dizajnu.'
				},
				{
					img: 'Barbed-Wire-Fence.G03',
					title: 'Ogradni gabioni',
					text: 'Osim modernog izgleda, brza montaža razlog je zbog kojeg ogradni gabioni postaju sve češći odabir pri izboru načina zaštite okućnica. '
				},
				{
					img: 'fence_blue_door',
					title: 'Vrata',
					text: 'U ponudi imamo pješačka, krilna, klizna i samonosiva vrata, dimenzija i dizajna prema zahtjevima naručitelja.'
				},
				{
					img: 'fence_blue_draft',
					title: 'Izrada po nacrtu',
					text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
				}
			]
		};
	}
};
</script>
