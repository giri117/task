const express = require('express')
const app = express()
const port = 3000


app.get('/p/:tagId', (req, res) => res.send('Hello World!'+req.params.tagId))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))