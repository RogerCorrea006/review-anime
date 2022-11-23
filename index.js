const express = require('express')

const app = express()

app.use('/', express.static('./public'))


app.listen(7878, () => {
    console.log("éeee galera, 7:27 bixo")
})
