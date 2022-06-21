const IS_PRODUCTION = false;
const SSR_PORT = 3000;

const BASE_APP_URL = 'http://localhost:' + SSR_PORT;
const BASE_BACK_API_URL = 'https://cms-test.url.com';

const RECAPTCHA_SITE_KEY = '6LcKA-4dAAAAAKh92ZOvrzDgsOD32lIRYD2uSZuo';
const RECAPTCHA_SECRET_KEY = '6LcKA-4dAAAAAIEu1sBoZTZ_nI_PHlPTT3W7ypH8';

const SSH_USER = 'ubuntu';
const SSH_HOST = '3.65.236.48';
const SSH_KEY = '../lloyds-frontends.pem';
const SSH_PATH = '/var/www/html/fe-ssr3';
const GIT_REPO = 'git@github.com:lloyds-digital/metalum.git';
const GIT_REF = 'origin/master';

module.exports = {
	isProduction: IS_PRODUCTION,
	ssrPort: SSR_PORT,
	baseAppUrl: BASE_APP_URL,
	baseBackApiUrl: BASE_BACK_API_URL,
	recaptcha: {
		siteKey: RECAPTCHA_SITE_KEY,
		secretKey: RECAPTCHA_SECRET_KEY
	},
	deploy: {
		prod: {
			user: SSH_USER,
			host: SSH_HOST,
			key: SSH_KEY,
			path: SSH_PATH,
			repo: GIT_REPO,
			ref: GIT_REF,
			'post-deploy': 'npm run post-deploy'
		}
	}
};
