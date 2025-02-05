const express = require('express');
const postsRouter = require('./routes/posts')
const notFound = require('./middleware/notFound')
const errorsHandler = require('./middleware/errorsHandler')

const app = express();
const port = 3000;

app.use(express.static('public'))
app.use(express.json())


app.get('/', (req, res) => {
  res.send('server funzionante')
})

app.use('/posts', postsRouter)

app.use(errorsHandler)

app.use(notFound)

app.listen(port, () => {
  console.log(`sono in ascolto alla porta ${port}`);
})