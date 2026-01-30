// const express = require("express")

// const app = express()

// app.use(express.json())

// const notes = [

// ]

// app.get("/", (req, res) => {
//     req.send("hello world")
// })

// app.post("/notes", (req, res) => {
//     console.log(req.body)
//     notes.push(req.body)
//     console.log(notes)
//     res.send("note created")
// })

// app.get("/notes", (req, res) => {
//     req.send(notes)
// })

// app.delete("/notes/:index", (req, res) => {
//     delete notes[ req.params.index ]
//     req.send("note deleted successfully")
// })

// module.exports = app

const express = require("express")

const app = express()

app.use(express.json())

const notes = [

]

app.get("/", (req, res) => {
    req.send("hello world")
})

app.push("/notes", (req, res) => {
    console.log(req.body)
    notes.push(req.body)
    console.log(notes)
    req.send("notes created")
})

app.get("/notes", (req, res) => {
    req.send(notes)
})

app.delete("/notes/:index", (req, res) => {
    delete notes [ req.params.index ]
    req.send("notes deleted successfully")
})

module.exports = app