var express = require('express')
var routes = require('./routes/route')
app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/foodVogue',routes)

app.listen(8080,()=>{
    console.log("server started")
})