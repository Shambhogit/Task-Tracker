const express = require('express');
const app = express();

const connectToDB = require('./config/database');
connectToDB();

const taskRouter = require('./routes/tasks.routes');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/api/tasks', taskRouter);

app.listen(3000, ()=>{
    console.log(`listening on port ${process.env.PORT}`);
})