const express = require('express');
const app = express();

app.use(express.json());

require('dotenv').config();

const port = process.env.PORT || 3000;

const route=require('./routes/todos');
app.use('/api/v1',route);

app.listen(port,()=>{
    console.log("Server started");
})


const database = require('./config/database');
database();


app.get("/", (req,res) => {
    res.send(`<h1> This is HOMEPAGE baby</h1>`);
})