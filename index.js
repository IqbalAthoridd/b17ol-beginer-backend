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

app.get("/profile", (req, res) => {
    let data = {
        name: 'Jane',
        batch: '17.2',
        email: 'janedoe@mail.com'
    }

    res.send(data)
})

app.patch("/profile", (req, res) => {
    let data = {
        name: 'Jane',
        batch: '17.2',
        email: 'janedoe@mail.com'
    }

    const result = update({ data })

    if (result) {
        res.send(result)
    } else {
        res.send({
            message: "data gagal di update",
        })
    }
})

app.put("/profile", (req, res) => {
    const { name, batch, email } = data

    let namee = "iqbal"
    let batchh = "20"
    let emaill = "iqbalathorid@gmail.com"
    const result = update({
        name: namee,
        batch: batchh,
        email: emaill
    })

    if (result.length != data.length) {
        res.send({
            message: "data harus di isi semua",

        })
    } else {
        res.send(result)
    }

})

app.delete("/profile", (req, res) => {
    const result = delete (data)

    if (result) {
        res.send({ message: "null" })
    } else {
        res.send({
            message: "gagal delete",
            err: err.message
        })
    }
})


app.listen(3000, () => {
    console.log("app listening on port:3000")
})