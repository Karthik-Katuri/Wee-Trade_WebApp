const express = require ("express")
const mongoose = reqiure("express")
const cors = reqiure("cors")
const UserModel = require('./models/User')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/User");

app.post('/Buyer',(req, res)=> {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))

 
})

app.listen(3001, ()=> { 
    console.log("server is running")
})