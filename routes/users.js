const express = require('express')
const router = express.Router();

const users =[ {
     id:123,
    name: "Samir Haddadi",
    email : "samcoeur2013@gmail.com"
},
{
    id:124,
    name: "Nesta Parchment",
    email : "parchNesta@gmail.com"
}]
let randomId = 124;
router.get('/',(req,res)=> {
    res.status(200).json(users)
})
router.get('/:userId',(req, res) => {
   const userId = parseInt(req.params.userId) 
   const user =  users.find(({id}) => id === userId) ; 
   if(!user) return res.status(400).json(`could't find user ` )
   return res.status(200).json(user)
})
router.post('/add' , (req,res)=> {
     const user = { id: randomId , 
           name : req.body.name,
           email : req.body.email 
    }
    users.push(user)
    res.status(200).json(user)

})

module.exports = router;