const express = require('express')
const pool = require('./dbConn')
const bodyParser = require('body-parser')
const todoControl = require('./controllers/todoController')
const app = express()
const port = 3000
const todoController = new todoControl()
const db_link = "/doneTest"

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get(db_link+'/login',)

app.get(db_link, todoController.getAll)

app.post(db_link, todoController.createTask)

app.delete(db_link, todoController.deleteTask)

app.put(db_link, todoController.updateTask)

app.get(db_link+'/filter', todoController.countTask)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
