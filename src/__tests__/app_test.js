import mongoose from 'mongoose'
import request from 'supertest'

import app from '../app'

mongoose.connect(process.env.MONGO_TEST_DB)

describe('App test', () => {
	it('has a module', () => {
		expect(app).toBeDefined()
	})

	let server

	beforeAll(() => {
		server = app.listen(4001)
	})

	afterAll(done => {
		mongoose.connection.close()
		server.close(done)
	})

	describe('user routes test', () => {
		it('can list users', async () => {
			await request(server)
				.get('/users')
				.expect(200)
		})

		it('can post users', async () => {
			await request(server)
				.post('/users?name=foo&birthday=bar')
				.expect(200)
		})

		it('fails if name is missing in post users', async () => {
			await request(server)
				.post('/users?birthday=bar')
				.expect(500)
		})

		it('fails if birthday is missing in post users', async () => {
			await request(server)
				.post('/users?name=foo')
				.expect(500)
		})

		it('fails if name and birthday are missing in post users', async () => {
			await request(server)
				.post('/users')
				.expect(500)
		})
	})

	describe('404', () => {
		it('returns 404', async () => {
			await request(server)
				.post('/fail')
				.expect(404)
		})
	})
})
