const app = require('express')
const request = require('supertest')

describe("Test for webpage rendering", () => {

    it('should render the sign-up page', async (done) => {
        await request(app)
            .get('/')
            .expect(200)

        done()
    })
})