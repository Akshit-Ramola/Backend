// const app = require('./src/app')
// const mongoose = require("mongoose")

// function connectToDb() {
//     mongoose.connect("mongodb+srv://ramolaakshit1_db_user:q5QntA1W7ilV3ls9@cluster0.cc8egrp.mongodb.net/day-6")
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