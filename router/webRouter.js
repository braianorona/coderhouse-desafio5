const express = require('express')

const webRouter = express.Router()

const productos = []

webRouter.get('/', (req, res) => {
  res.sendFile('index.html', { root: './views' })
})

webRouter.get('/productos', async (req, res) => {
  res.render('productos', {productos})
  
})

webRouter.post('/productos', express.json(), (req, res) => {
  const newProduct = req.body
  productos.push(newProduct)
  res.send(productos)
})


module.exports = { webRouter }