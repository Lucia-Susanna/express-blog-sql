const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routes/posts')

app.use(express.static('public'))
app.use(express.json())


app.get('/', (req, res) => {
  res.send('server funzionante')
})

app.use('/posts', postsRouter)

app.listen(port, () => {
  console.log(`sono in ascolto alla porta ${port}`);
})