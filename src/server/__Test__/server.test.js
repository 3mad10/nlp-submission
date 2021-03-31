import 'babel-polyfill'
const request = require('supertest');
const server = require('../index');

const urlTest = "https://jestjs.io/docs/getting-started"

describe('Sample Test', () => {
    it('should test that true === true', () => {
      expect(true).toBe(true)
    })
  })

describe('test the default path', () => {
    test('It should respond with status 200', async () => {
        const response = await request(server).get('/');
        expect(response.statusCode).toBe(200);    
    });
}); 

// describe('post analysis request', () => {
//     it('should return object', async () => {
//       const res = await request(server)
//         .post('/analyse').send({
//             'url':urlTest
//         });
//       expect(res.statusCode).toEqual(200)
//     });
// })