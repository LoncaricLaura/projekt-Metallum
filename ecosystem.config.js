const env = require('./env');

module.exports = {
	apps: [
		{
			name: env.baseAppUrl + ':' + env.ssrPort,
			script: './node_modules/nuxt/bin/nuxt.js',
			args: 'start',
			out_file: '/dev/null',
			error_file: '/dev/null'
		}
	],
	deploy: env.deploy
};
