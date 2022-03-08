const env = require('./env.dev');

const IS_PRODUCTION = true;
const SSR_PORT = 3000;

const BASE_APP_URL = 'https://test.lloyds.dev';
const BASE_BACK_API_URL = 'https://cms.url.com';

module.exports = {
	...env,
	...{
		isProduction: IS_PRODUCTION,
		ssrPort: SSR_PORT,
		baseAppUrl: BASE_APP_URL,
		baseBackApiUrl: BASE_BACK_API_URL,
		deploy: {}
	}
};
