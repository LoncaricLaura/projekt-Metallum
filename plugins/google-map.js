import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyALIWQWRzkuSQ8SE6qLDOHDZEOycM27_3c',
		libraries: 'places'
	}
});
