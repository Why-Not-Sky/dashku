'use strict';


// Deconstruct the Redis cloud credentials for use with Node's redis client
//
if (process.env.REDISCLOUD_URL) {
	var redisHost = process.env.REDISCLOUD_URL.split('@')[1].split(':')[0],
			redisPort = process.env.REDISCLOUD_URL.split('@')[1].split(':')[1],
			redisPass = process.env.REDISCLOUD_URL.split(':')[2].split('@')[0];
}



module.exports = {

	development: {
		port: 3000,
		db: process.env.MONGOLAB_URI || 'mongodb://localhost/dashku_development',
		redis: {
			port: redisPort || 6379,
			host: redisHost || '127.0.0.1',
			pass: redisPass
		},
		apiUrl: 'http://localhost:3000/api/transmission',
		apiHost: 'http://localhost:3000/',
		forgottenPasswordUrl: 'http://localhost:3000/?fptoken=',
		mail: {
			type: 'SMTP',
			options: {
				service: 'Gmail',
				auth: {
					user: 'username',
					pass: 'password'
				}
			}
		},
		packAssets: {}
	},



	cucumber: {
		port: 3001,
		db: 'mongodb://localhost/dashku_cucumber',
		redis: {
			port: redisPort || 6379,
			host: redisHost || '127.0.0.1',
			pass: redisPass
		},
		apiUrl: 'http://localhost:3001/api/transmission',
		apiHost: 'http://localhost:3001/',
		forgottenPasswordUrl: 'http://localhost:3001/?fptoken=',
		mail: {
			type: 'stub'
		},
		packAssets: {}
	},



	test: {
		port: 3002,
		db: 'mongodb://localhost/dashku_test',
		redis: {
			port: redisPort || 6379,
			host: redisHost || '127.0.0.1',
			pass: redisPass
		},
		apiUrl: 'http://localhost:3002/api/transmission',
		apiHost: 'http://localhost:3002/',
		forgottenPasswordUrl: 'http://localhost:3002/?fptoken=',
		mail: {
			type: 'stub'
		},
		packAssets: {}
	}

};