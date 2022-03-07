// 'use strict';

// const server = require('../src/server.js');
// const supertest = require('supertest');
// const request = supertest(server.app);
// const { db } = require('../src/auth/models/index');


// beforeAll(async () => {
//     await db.sync();
// })

// afterAll(async () => {
//     await db.drop();
// })

// describe('testing API server',() => {
   
//     it('testing /', async() => {
//         const response = await request.get('/');
      
//         expect(response.text).toEqual('home route');    
//     }) 

//     it('post test / create food' , async() =>{
//         const res = await request.post('/signup').auth({
//           username : "leen",
//           password: "leen123456"
//         })
      
//          expect(res.status).toEqual(200);
//          expect(res.body.username).toEqual('leen')
//       })

//     it('post test / create food' , async() =>{
//         const res = await request.post('/signin').auth({
//           username : "leen",
//         })
      
//          expect(res.status).toEqual(200);
//          expect(res.body.username).toEqual('leen')
//       })
// });


const server = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server.app);
const { db } = require('../src/auth/models/index');


beforeAll(async () => {
    await db.sync();
});

afterAll(async () => {
    await db.drop();
})

describe(' auth', () => {

    it('ok', async () => {
        const response = await request.post('/signup').send({
            username: "leen",
            password: "leen123"
        });
        expect(response.status).toEqual(201);
        expect(response.body.username).toEqual('leen');
    });

    it('basic auth', async () => {
        const response = await request.post('/signin').auth("leen","leen123")
        expect(response.status).toEqual(200);
        expect(response.body.username).toEqual('leen');
        });
  
    });

