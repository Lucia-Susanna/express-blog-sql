const notFound = (req, res, next) =>{
  res.status(404);
  res.json({
    message: 'source not found',
    status: 404,
    error: 'not found'
  })
}

module.exports = notFound;