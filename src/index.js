require('dotenv').config()

const path = require('path')
const cron = require('node-cron')
const http = require('http')
const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
});

app.get('/install', require('./install'))

app.use((req, res, next) => {
  if (req.headers.api_key !== process.env.API_KEY) {
    return res.status(403).json({ error: 'Invalid security token' })
  }
  next()
});

app.get('/update', require('./update'))

cron.schedule('*/5 * * * *', () => {
  callback = function(response) {
    if (response.statusCode === 200) {
      console.log('ReconBolt fetched updates successfully')
    } else {
      console.error('ReconBolt failed update check')
    }
  }

  const req = http.request({
      host: 'localhost',
      path: '/update',
      port,
      headers: { 'API_KEY': process.env.API_KEY }
    }, callback);

    req.end();
  });

app.listen(port, () => console.log(`ReconBolt server listening at http://localhost:${port}`))