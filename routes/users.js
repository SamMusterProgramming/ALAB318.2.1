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
   
     res.render('users' , {users} );
})            
// get  all users here
router.get('/:userId',(req, res) => {  
   const userId = parseInt(req.params.userId) 
   const user =  users.find(({id}) => id === userId) ; 
   if(!user) return res.status(400).json(`could't find user `)
   return res.status(200).json(user)
})    
   
let urlencodedParser = bodyParser.urlencoded({ extended: false })

// add new user here
router.post('/' ,urlencodedParser, (req,res)=> {
     const user = { id: randomId , 
           name : req.body.name,
           email : req.body.email,
           password : req.body.password 
       } 
    users.push(user)
    randomId ++ ; 
    res.redirect('/users')   
})             
   
// delete a user here 
router.post('/delete',urlencodedParser,(req,res)=> {
    console.log(req.body.id);
    users = [...users.filter((user) => user.id !== parseInt((req.body.id)) )]
    res.redirect('/users')  
})
   
// login here , i wish I am using a data base here like mongoDB would've been easier
router.post("/login",urlencodedParser, (req,res) => {
    
   const user = isAuthValide(req.body.email,req.body.password);
   console.log(user)
   if(!user) return  res.render('home',{user:user ,message :" logging failed " , color: "red"} );
   return  res.render('home', { user : user ,message :" Successfully logged in ", color : "lightgreen"} );
})

function isAuthValide(email,password) {
    let newUser = null ; 
    users.forEach(user => {
        if(user.email == email && user.password == password)
        newUser = user ;
    })              
    return newUser  
}
  

   
module.exports = router;