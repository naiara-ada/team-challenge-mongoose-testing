const request = require('supertest');
const app = require('../index');
const Post = require('../models/Post')



describe('testing/post', () =>{

    afterAll(() => {
        return Post.deleteMany();
        });

    const post ={
        title: "post1",
        body: "body1"
    }

    

    test('Create a post', async()=>{
        resPost = await request(app).post('/create').send(post).expect(201);
        expect(resPost.body._id).toBeDefined();
        expect(resPost.body.createdAt).toBeDefined();
        expect(resPost.body.updatedAt).toBeDefined();
    })
    

})