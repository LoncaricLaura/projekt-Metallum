import BaseVue from 'vue';

declare module 'vue/types/vue' {
  interface Vue {
    $scrollIntoView(elem: string): void
  }
}

BaseVue.prototype.$scrollIntoView = (elem: string) => {
	if (!elem) {
		return;
	}

	setTimeout(() => {
		const elemNode = document.querySelector(elem);

		if (elemNode) {
			elemNode.scrollIntoView({ behavior: 'smooth' });
		}
	}, 250);
};
