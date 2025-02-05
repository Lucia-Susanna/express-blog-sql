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
  const id = req.params.id;
  const sql = 'SELECT * FROM posts WHERE id = ?'
  connection.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: 'query fallita' })
    if (results.length === 0) return res.status(404).json({ error: 'Pizza non trovata' });
    const post = results[0]
    res.json(post)
  })
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
  const id = req.params.id;
  const sql = 'DELETE FROM posts WHERE id = ?'

  connection.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ error: 'eliminazione pizza fallita' })
    res.sendStatus(204)
  })
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}