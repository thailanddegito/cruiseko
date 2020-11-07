const path = require('path')
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.test') })
const {User} = require('../db')
const request = require('supertest')
const app = require('../api')


describe('Register endpoint', () => {
    it('should gen FIT valid id', async () => {
      const res = await request(app)
        .post('/users/gen-id')
        .send()
      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('id')
      expect(res.body.id).toEqual('FIT00001')
    })

    it('should error with status 400', async () => {
        const res = await request(app)
          .post('/users/register')
          .send({
            userId: 1,
            title: 'test is cool',
          })
        expect(res.statusCode).toEqual(400)
        // expect(res.body).toHaveProperty('post')
    })
  })