const connection = require('../data/db')

const index = (req, res) => {
  res.send('elenco dei post')
}

const show = (req, res) => {
  res.send(`visualizzo il post con id ${req.params.id}`)
}

const store = (req, res) => {
  res.send('aggiungo un nuovo post')
}

const update = (req, res) => {
  res.send(`modifico post con id${req.params.id}`)
}

const modify = (req, res) => {
  res.send(`modifico post con id${req.params.id}`)
}

const destroy = (req, res) => {
  res.send(`elimino post con id ${req.params.id}`)
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}