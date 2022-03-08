const env = require('../env');
import BaseVue from 'vue';

BaseVue.prototype.$directusAsset = (file, key = null) => env.baseBackApiUrl + '/assets/' + file + (key ? '?key=' + key : '');
