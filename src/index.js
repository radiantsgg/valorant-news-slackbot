require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 8080;

app.get('/install', require('./install'))
app.get('/update', require('./update'))

app.listen(port, () => console.log(`ReconBot server listening at http://localhost:${port}`))