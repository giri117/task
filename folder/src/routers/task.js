const express = require('express')
const Task = require('../models/task')
const router = new express.Router()
router.get('/hello',(req,res)=>{
    res.send({"data":"Hello"})
})
router.post('/tasks',async (req,res)=>{
    const task = new Task(req.body)
    console.log(task)
    try {
    await task.save()
    res.status(201).send(task)
    }
    catch(e){
       res.status(404).send(e)
    }
})

router.get('/tasks',async (req,res)=>{
    
    try{
    const task = await Task.find()
    res.send(task)

    }catch(e){
        res.status(500).send()
    }
})
router.get('/tasks/:id',async (req,res)=>{
    const _id=req.params.id
    
    try{
    const task = await Task.findOne({_id})
    if(!task){
        res.status(404).send()
    }
    res.send(task)
    }catch(e){
        res.status(500).send()
    }

})
router.get('/task/:done',async (req,res)=>{
const completed=req.params.done

try{
    const task = await Task.find({completed})
    res.send(task)
}
catch(e){
console.log(e)
}
})
    


router.patch('/tasks/:id',async(req,res)=>{
    const _id = req.params.id
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description','completed']
    const isValidOperation = updates.every((update)=>allowedUpdates.includes(update))
    if(!isValidOperation){
        return res.status(400).send('invalid update')
    }
    try{
       const task = await Task.findById(_id) 
       
       if (!task){
        return res.status(404).send('task not found')
    }
        updates.forEach((update)=>{
            task[update]=req.body[update]

        })
        await task.save()
        
        res.send(task)
    }
    catch(e)
    {
        res.status(400).send(e)
    }
})

router.delete('/tasks/:id', async (req,res)=>{
    const _id=req.params.id
    try{
         const task = await Task.findByIdAndDelete(_id) 
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }
    catch(e){
        res.status(500).send(e)
    }
})
module.exports = router