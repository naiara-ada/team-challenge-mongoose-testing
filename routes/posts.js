const express = require('express')
const router = express.Router()
const Post = require('../models/Post')



router.post('/create', async (req, res)=>{
    try {
         const post = await Post.create(req.body)
         res.status(201).json(post)
        
    } catch (error) {
        console.log(error)
    }
})

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts)
    } catch (error) {
        console.error(error)
    }
})

router.get("/id/:_id", async (req, res) => {
    try {
        const post = await Post.findById(req.params._id)
        res.json(post)
    } catch (error)  {
        console.error(error)
    }
})

router.get("/title/:title", async (req, res) => {
    try {
        const post = await Post.findOne( { title: req.params.title})
        res.json(post)
    } catch (error)  {
        console.error(error)
    }
})

router.put ("/id/:_id", async (req, res) => {
    try {
        const idPost = req.params._id
        const post = await Post.findByIdAndUpdate(
            idPost , {
                title : req.body.title,
                body: req.body.body
            },{new: true}
        )
        res.json(post)
    } catch (error) {
        console.error(error)
    }
})

router.delete('/id/:_id', async (req, res) => {
    try {
        const id = req.params;
        const post = await Post.findByIdAndDelete(id)
        res.json({message: 'Post deleted'})
    } catch (error) {
        console.error(error)
    }
})


module.exports = router;