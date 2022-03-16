import Vue from 'vue';

Vue.component('Rimg', {
	props: {
		src: {
			type: Object,
			required: true
		},
		alt: {
			type: String,
			default: ''
		}
	},
	render(create) {
		return create('picture', [
			...this.src.images.map(image => create('source', {
				attrs: {
					key: image.path,
					media: `(max-width: ${image.width}px)`,
					srcset: image.path
				}
			})),

			create('img', {
				attrs: {
					src: this.src.images[this.src.images.length - 1].path,
					alt: this.alt,
					loading: 'lazy',
					decoding: 'async'
				}
			})
		]);
	}
});
