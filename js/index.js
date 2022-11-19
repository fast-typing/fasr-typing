const express = require('express')
const mongoose = require('mongoose')
const router = require('./router')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use('/test', router)

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`server start on ${PORT} port`))
        await mongoose.connect("mongodb+srv://cawa:17092009@cluster0.yllvdj6.mongodb.net/?retryWrites=true&w=majority")
    } catch (e) {
        console.log(e)
    }
}

start()