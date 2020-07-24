require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 8080;

app.get('/install', require('./install'))

app.use((req, res, next) => {
  if (req.headers.api_key || '' !== process.env.API_KEY) {
    return res.status(403).json({ error: 'Invalid security token' });
  }
  next();
});

app.get('/update', require('./update'))

app.listen(port, () => console.log(`ReconBot server listening at http://localhost:${port}`))