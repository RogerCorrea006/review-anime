const express = require('express')
const router = require('./routes/router')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(router)
app.use('/', express.static('./public'))



app.listen(7878, () => {
    console.log("éeee galera, 7:27 bixo")
})
