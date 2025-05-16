const express = require('express');
const router = express.Router();

const taskModel = require('../models/task.model');

//getAll Tasks
router.get('/', async (req, res)=>{
    try{
        const tasks = await taskModel.find();
        res.status(200).json({tasks});
    }catch(err){
        console.log(`error in getAll : ${err}`);
        res.status(500).json({error:err});
    }
})


//get one Tasks
router.get('/:id', async (req, res)=>{
    try{
        const task = await taskModel.findById(req.params.id);
        if(!task) return res.status(404).json({message:`Task not found`});
        res.status(200).json({task});
    }catch(err){
        console.log(`error in get : ${err}`);
        res.status(500).json({error:err});
    }
})


//add task
router.post('/', async (req, res)=>{
    try{
        const task = await taskModel.create(req.body);
        res.status(200).json({task});
    }catch(err){
        console.log(`error in create : ${err}`);
        res.status(500).json({error:err});
    }
})

//update Task
router.put('/:id', async (req, res)=>{
    try{
        const updatedTask = await taskModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!updatedTask) return res.status(404).json({message:`Task not found`});
        res.status(200).json({updatedTask});
    }catch(err){
        console.log(`error in update : ${err}`);
        res.status(500).json({error:err});
    }
})

//delete Tasks
router.delete('/:id', async (req, res)=>{
    try{
        const deletedTask = await taskModel.findByIdAndDelete(req.params.id);
        if(!deletedTask) return res.status(404).json({message:`Task not found`});
        res.status(200).json({message:`Task deleted`});
    }catch(err){
        console.log(`error in delete : ${err}`);
        res.status(500).json({error:err});
    }
})

//get all Tasks that are todo
router.get('/filter/todo', async (req, res)=>{
    try{
        const todoTasks = await taskModel.find({ status: 'todo' });
        if(!todoTasks) return res.status(200).json({message:`No task todo`});
        res.status(200).json({todoTasks});
    }catch(err){
        console.log(`error in get todo : ${err}`);
        res.status(500).json({error:err});
    }
})

//get all Tasks that are done
router.get('/filter/done', async (req, res)=>{
    try{
        const doneTasks = await taskModel.find({ status: 'done' });
        if(!doneTasks) return res.status(200).json({message:`No task done`});
        res.status(200).json({doneTasks});
    }catch(err){
        console.log(`error in get done : ${err}`);
        res.status(500).json({error:err});
    }
})

//get all Tasks that are in-progress
router.get('/filter/in-progress', async (req, res)=>{
    try{
        const inProgressTasks = await taskModel.find({ status: 'in-progress' });
        if(!inProgressTasks) return res.status(200).json({message:`No task in-progress`});
        res.status(200).json({inProgressTasks});
    }catch(err){
        console.log(`error in get in-progress : ${err}`);
        res.status(500).json({error:err});
    }
})

module.exports = router;