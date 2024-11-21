import request from "supertest"
import app from "../src/app"
describe('Test app.ts ',()=>{

     test('check /',async ()=>{
        let res = await request(app).get('/')
         expect(res.body).toEqual({messgae:'Home Page'})
     })

    
})