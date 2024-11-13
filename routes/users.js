const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser')


let users =[ {
     id:123,
    name: "Samir Haddadi",
    email : "samcoeur2013@gmail.com",
    password : "samirhaddadi"
},
{
    id:124,   
    name: "John Mallan",
    email : "johnmallan@gmail.com",
    password : "johnmallan"
}]
let randomId = 124;


//middleware function 
function authentification (res,res,next) {
    next()
}
router.get('/',(req,res)=> {
     res.render('users', {users} );
})

router.get('/:userId',(req, res) => {
   const userId = parseInt(req.params.userId) 
   const user =  users.find(({id}) => id === userId) ; 
   if(!user) return res.status(400).json(`could't find user `)
   return res.status(200).json(user)
})   

let urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/' ,urlencodedParser, (req,res)=> {
    console.log("request has :" + req.body.email);
     const user = { id: randomId , 
           name : req.body.name,
           email : req.body.email 
       } 
    users.push(user)
    randomId ++ ; 
    res.redirect('/users')   
})             
   
router.post('/delete',urlencodedParser,(req,res)=> {
    console.log(req.body.id);
    users = [...users.filter((user) => user.id !== parseInt((req.body.id)) )]
    // console.log(users)
    res.redirect('/users')
})
    
module.exports = router;