const connectToMongo = require('./db');
connectToMongo();
const express = require('express')
const app = express()
const port = 3000

/** 
app.get('/api/v1/login', (req, res) => {
  res.send('Hello World! welcome to login')
})
*/

//Middleware
app.use(express.json());

//Available routes

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




