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
//app.post('/listavisitas', async (req, res) => {
  //const body = req.body
  //const novoitem = await visita.create(body)

  //res.json({ novoitem })
//})

app.post('/listavisitas', async (req, res) => {
  const body = req.body;
  
  const novoitem = await visita.create({
      id_lugar: body.id_lugar,
      nome_lista: body.nome_lista,
      visitou_lista: body.visitou_lista,
      comentarios_lista: body.comentarios_lista,
      valor_lista: body.valor_lista,
  });
  res.json({result: "Nova tarefa ", novoitem })
});

// DELETE LUGARES METODO DE AULA
app.delete('/listavisitas/:id', async (req, res) => {
  const lugaresId = req.params.id
  const lugar = await visita.findByPk(lugaresId)
  if (lugar) {
    await lugar.destroy()
    res.send({ lugar })
    res.status(200)
    res.send({message: 'O lugar foi apagado com exito'})
  } else {
    res.status(404)
    res.send({ message: 'lugar nâo existe' })
  }
}) 

// Update task
app.put('/listavisitas/:id', async (req, res) => {
  const taskId = req.params.id
  const body = req.body
  const lugares = await visita.findByPk(taskId)

  if (lugares) {
    await lugares.update({ 
      id_lugar: body.id_lugar,
      nome_lista: body.nome_lista,
      visitou_lista: body.visitou_lista,
      comentarios_lista: body.comentarios_lista,
      valor_lista: body.valor_lista
    })
    res.send({lugares})
  } else {
    res.status(404)
    res.send({ message: 'Destino não encontrado' })
  }
})


app.listen(3000, () => {
  console.log('Iniciando o ExpressJS na porta 3000')
})


//API lugares Usando ROUTES ANGULAR 
//async function getAlllugares(req, res) {
//const lugarList = await


