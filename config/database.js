const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectToDB = () =>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>console.log(`Connected to DB`))
    .catch((err)=>console.log(`Error : ${err}`));
}

module.exports = connectToDB;
