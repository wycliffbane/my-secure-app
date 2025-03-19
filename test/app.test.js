const request = require('supertest');
const app = require('../index'); // Assuming your Express app is in index.js

describe('GET /', () => {
  it('should return a 200 status code', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});
