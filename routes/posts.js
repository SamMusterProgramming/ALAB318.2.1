const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser')


// easch post has an image and a user_id who posted the post
let posts = [ {
    id:41,
    url:'http://localhost:8080/static/asset/41.jpg',
    description: 'the beauty of the nature'
},{
    id:42,
    url:'http://localhost:8080/static/asset/42.jpg',
    description: 'the beauty of the nature'
},{
    id:43,
    url:'http://localhost:8080/static/asset/43.jpg',
    description: 'the beauty of the nature'
 }
]

for(let i = 44 ; i< 56 ; i++ ) {
   posts.push({["id"]:i ,["url"]:`http://localhost:8080/static/asset/${i}.jpg`,["description"]:"beauty of nature"})
}


router.get('/',(req,res) => {
   if(posts) return res.render('post', {posts , post:null})
})

router.get('/:postId',(req,res) => {
   const post_id = req.params.postId ;
   const post = posts.find(post => post.id == post_id)
   console.log(post)
   if(post) return res.render('post', {posts:null, post:post})
})

// I couldn't get the download to work , i will search more about this
router.get('/download',(req,res) => {
    console.log("I am here")
    window.open('http://localhost:8080/static/asset/42.jpg')
    res.download(__dirname + 'jsonFile.json');
 })

module.exports = router