export const state = () => ({
	openMenu: false
});

export const mutations = {
	toggleField(state, fieldName) {
		state[fieldName] = !state[fieldName];
	},
	updateField(state, [fieldName, value]) {
		state[fieldName] = value;
	}
};
