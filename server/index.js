const express = require('express')
const massive = require('massive')
require('dotenv').config();

const app = express()

app.use(express.json())

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Connected to db');
})

const PORT = 4020;
app.listen(PORT, () => console.log(`Kickin back on the coolest port around, ${PORT}`))