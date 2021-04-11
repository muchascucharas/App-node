const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

let app = express()
const port = process.env.PORT || 3000


app.listen(port, () => {
  console.log(`API REST corriendo en http//localhost:${port}`)
});

app.use(function(err, req, res, next){
  res.status(422).send({error: err.message});
});

module.exports = app;