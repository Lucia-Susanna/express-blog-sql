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

  const sql = `SELECT posts.*, tags.id AS tag_id, tags.label AS tag_label
  FROM posts 
  JOIN post_tag ON posts.id = post_tag.post_id 
  JOIN tags ON tags.id = post_tag.tag_id 
  WHERE posts.id = ?`

  connection.query(sql, [id], (err, results) => {

    if (err) return res.status(500).json({ error: 'query fallita' })
    if (results.length === 0) return res.status(404).json({ error: 'Pizza non trovata' });
    console.log(results);

    // creo oggetto con info del singolo post
    const postObj = {
      id: results[0].id,
      title: results[0].title,
      content: results[0].content,
      image: results[0].image,
      tags: []
    }

    // ciclo results e a ogni ciclo pusho id e label dei tag nell'array vuoto di postObj
    results.forEach(item => {
      postObj.tags.push({
        tag_id: item.tag_id,
        tag_label: item.tag_label
      })
    })

    //restituisco postObj completo di tags
    res.json(postObj)
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