const express = require ('express')
const app = express();
const userRoutes = require("./routes/users");
app.use(express.json())

const PORT = 8080; 



app.use("/user", userRoutes);

app.get('/',(req,res) => {
  
})

app.listen(PORT , () => {
    console.log(`listenning on port ${PORT}`)
})