const mongoose = require('mongoose')

mongoose.connect('mongodb://girisai:giri1234@ds117615.mlab.com:17615/task',{
    useNewUrlParser: true,
    useCreateIndex:true
})
