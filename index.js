const express = require('express')
const app = express()

app.use(express.urlencoded({
    extended: true,
}))
app.use(express.json())

app.get('/home', (req, res) => {
    res.send("Welcome to my first back end !")
})

app.post("/data", async (req, res) => {
    const data = await req.body
    console.log(data)
})

app.post("/profile", (req, res) => {
    const data = req.body
    res.send(data)
})


app.listen(3000, () => {
    console.log("app listening on port:3000")
})