const request = require('supertest');
const app = require("../server");
const data = require('../utils/db-helper').Db;

describe('GET /', () => { 
    it("should return a 200 response", async () => {
        request(app)
        .get('/')
        .expect(200);
    });
});
describe('GET /api/v1/data', () => {
    it("should return a 200 response", async () => {
        request(app)
        .get('/api/v1/data')
        .expect(200);
    });
    it("returns a json object", async () => {
        request(app)
        .get('/api/v1/data')
        .set("Accept", "application/json")
        .expect('Content-Type', /json/);
    });
});
