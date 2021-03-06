'use strict';



module.exports = {

	development: {
		port: 3000,
		db: 'localhost/dashku_development',
		redis: {
			port: 6379,
			host: '127.0.0.1'
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
		packAssets: {},
		sessionSecret: 'feK4li1aek8koe7JeiC3shai7ahy7uduch5ahY7n'
	},



	cucumber: {
		port: 3001,
		db: 'localhost/dashku_cucumber',
		redis: {
			port: 6379,
			host: '127.0.0.1'
		},
		apiUrl: 'http://localhost:3001/api/transmission',
		apiHost: 'http://localhost:3001/',
		forgottenPasswordUrl: 'http://localhost:3001/?fptoken=',
		mail: {
			type: 'stub'
		},
		packAssets: {},
		sessionSecret: 'feK4li1aek8koe7JeiC3shai7ahy7uduch5ahY7n'
	},



	test: {
		port: 3002,
		db: 'localhost/dashku_test',
		redis: {
			port: 6379,
			host: '127.0.0.1'
		},
		apiUrl: 'http://localhost:3002/api/transmission',
		apiHost: 'http://localhost:3002/',
		forgottenPasswordUrl: 'http://localhost:3002/?fptoken=',
		mail: {
			type: 'stub'
		},
		packAssets: {},
		sessionSecret: 'feK4li1aek8koe7JeiC3shai7ahy7uduch5ahY7n'
	},



	docker: {
		port: 3000,
		db: process.env.MONGO_1_PORT_27017_TCP_ADDR + ':' + process.env.MONGO_1_PORT_27017_TCP_PORT + '/dashku_docker',
		redis: {
			port: process.env.REDIS_PORT_6379_TCP_PORT,
			host: process.env.REDIS_PORT_6379_TCP_ADDR
		},
		apiUrl: 'http://localhost:3000/api/transmission',
		apiHost: 'http://localhost:3000/',
		forgottenPasswordUrl: 'http://localhost:3000/?fptoken=',
		mail: {
			type: 'stub'
		},
		packAssets: {},
		sessionSecret: 'feK4li1aek8koe7JeiC3shai7ahy7uduch5ahY7n'

	}

};