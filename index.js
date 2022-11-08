const express = require('express')
const { default: mongoose } = require('mongoose')
const authRouter = require('./authRouter')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use('/auth', authRouter)
const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://cawa:!12Sasha@cluster0.pxsvvdc.mongodb.net/?retryWrites=true&w=majority')
        app.listen(PORT, () => console.log(`server start on port ${PORT}`))
    } catch (e) {
        console.log(e) // Ищем ошибки
    }
}

start()