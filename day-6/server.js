// const app = require('./src/app')
// const mongoose = require("mongoose")

// function connectToDb() {
//     mongoose.connect("")
//     .then(() => {
//         console.log("connected to database")
//     })
// }
// connectToDb()
 
// app.listen(3000, () => {
//     console.log("server is running on port 3000")
// })
const app = require('./src/app')
const mongoose = require("mongoose")

function connectToDb() {
    mongoose.connect("")
    .then(() => {
        console.log("connected to database")
    })
}

app.listen(3000, () => {
    console.log("server is running at port 3000")
})
