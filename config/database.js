const mongoose = require('mongoose');

require('dotenv').config();
const database= () => {
    mongoose.connect(process.env.DATABASE_URL,{

    }).then(()=>{
        console.log("DB Connected");
    })
    .catch((error)=>{
        console.log("DB error");
    })
}
module.exports = database;