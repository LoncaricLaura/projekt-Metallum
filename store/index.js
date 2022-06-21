export const state = () => ({
	openMenu: false
});

export const mutations = {
	toggleField(store, fieldName) {
		store[fieldName] = !store[fieldName];
	},
	updateField(store, [fieldName, value]) {
		store[fieldName] = value;
	}
};
