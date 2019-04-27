#Task Manager APP
####Introduction
 This is basic Task Manager APP using Nodejs
 Users can able to create update read and delete a Task
#### To SetUp APP
 npm  install
#### To start server
 npm start
#### Testing
######Register A task
url localhost:2019/tasks
Method: POST
Requst Body:

{
    "description":"design trssssar AaaaPI",
    "compleated": false
    
}
######List A task
url localhost:2019/tasks
Method: Get

######List A task by Id
url localhost:2019/tasks/:id
Method: Get


######Update Task By Id

url localhost:2019/tasks
Method: PATCH
Requst Body:

{
    "description":"design trssssar AaaaPI",
    "compleated": false
    
}

######Delete Task By Id

url localhost:2019/tasks
Method: Delete


