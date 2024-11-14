const express = require ('express')
const app = express();
const userRoutes = require("./routes/users");
app.use(express.json())

// app.use('/public' , express.static(path.join(__dirname,'static')))
const PORT = 8080; 

app.set("users", "./views"); 
app.set("view engine", "ejs");
app.set("home", "./views"); 


app.use("/users", userRoutes);

  

app.get("/", (req, res) => {
  res.render('home', {user:{name:"unkown"} , message : "Welcome to our users interface", color: "skyblue"})  
});













app.listen(PORT , () => {
    console.log(`listenning on port ${PORT}`)
})