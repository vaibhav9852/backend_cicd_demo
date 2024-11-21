
import request from 'supertest'
import app from "../../src/app"

describe('Test users.route.ts',()=>{

    test('test /users',async () =>{

        let res = await request(app).get("/users");

        expect(res.body).toEqual(["vaibhav","gagan","deepak"]);
    });
});