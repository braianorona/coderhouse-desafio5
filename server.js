const express = require('express')
const { webRouter } = require('./router/webRouter.js')
const { engine } = require('express-handlebars')

const app = express()

app.use(express.static('public'))

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(webRouter)


const PORT = 4040
const server = app.listen(PORT, () => {
  console.log(`escuchando en el puerto ${server.address().port}`)
})