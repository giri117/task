const express = require('express') //require means import module
require('./db/mongoose')
const logger = require('morgan')
const fs =require('fs')

const app = express()//express ia a class. in this step we have created a object
app.use(logger('common', {
stream: fs.createWriteStream('./access.log', {flags: 'a'})
}));

app.use(logger('dev'));

const taskRouter = require('./routers/task')
const port = process.env.PORT || 2019
app.use(express.json())// methods inside the express class
app.use(taskRouter)
app.listen(port,()=>{
    console.log('server on port %s',port)

}) 

