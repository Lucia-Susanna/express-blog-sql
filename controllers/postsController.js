//importo il file con la connessione al database 
const connection = require('../data/db')

const index = (req, res) => {
  //creo la mia query
  const sql = 'SELECT * FROM posts'

  //faccio la connessione al database
  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: 'query fallita' })
    res.json(results)
  })
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