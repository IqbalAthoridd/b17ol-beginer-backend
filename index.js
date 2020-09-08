const express = require('express')
const app = express()

app.get('/home', (req, res) => {
    res.send("Welcome to my first back end !")
})

app.post("/data", (req, res) => {
    console.log("from post /data")
})

app.listen(3000, () => {
    console.log("app listening on port:3000")
})