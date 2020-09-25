const express = require('express')
const { Sequelize, DataTypes } = require('sequelize')
const lista = require('./models/listavisita')
const Lugares = require('./models/pontosturisticos')


const app = express()
const sequelize = new Sequelize('postgres://postgres:example@db:5432/HiRio')
const visita = lista(sequelize, DataTypes)
const pontos = Lugares(sequelize, DataTypes)

// We need to parse JSON coming from requests
app.use(express.json())


// Lista de lugares(pontos turisticos)
app.get('/lugares', async (req, res) => {
  const lugarList = await pontos.findAll()  //todos los registros de lugares

  res.json({ lista: lugarList })
})
//Lista de lugares visitados pelo usuario
app.get('/listavisitas', async (req, res) => {
  const lugarList = await visita.findAll()  //todos los registros de lugares
  res.json({ lista: lugarList })
})

// Visualizar lista de lugares (pontos turisticos) por id
app.get('/lugares/:id', async (req, res) => {
  const lugarId = req.params.id
  const listalugar = await pontos.findByPk(lugarId)

  res.send({ listalugar })
})

// Visualizar lista de lugares visitados pelo usuario por id
app.get('/listavisitas/:id', async (req, res) => {
  const listaId = req.params.id
  const listavisita = await visita.findByPk(listaId)

  res.send({ listavisita })
})

//Crear novo destino para lista de
app.post('/novodestino', async (req, res) => {
  const body = req.body
  const novoitem = await visita.create(body)

  res.json({ novoitem })
})
//API lugares Usando ROUTES ANGULAR 
//async function getAlllugares(req, res) {
//const lugarList = await

/*
 

// Update task
app.put('/tasks/:id', async (req, res) => {
  const taskId = req.params.id
  const body = req.body
  const task = await tasks.findByPk(taskId)

  if (task) {
    await task.update({ ...body })
    res.send({ task })
  } else {
    res.status(404)
    res.send({ message: 'Task not found' })
  }
})

// Delete task
app.delete('/tasks/:id', async (req, res) => {
  const taskId = req.params.id
  const task = await tasks.findByPk(taskId)

  if (task) {
    await task.destroy()
    res.send({ task })
  } else {
    res.status(404)
    res.send({ message: 'Task not found' })
  }
})
*/
app.listen(3000, () => {
  console.log('Iniciando o ExpressJS na porta 3000')
})




