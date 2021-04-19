const express = require ('express')
const mongoose = require ('mongoose')
const bodyParser = require ('body-parser')
const 

const app = express()
const connectDB = async () => {
    try{
        await mongoose.connect('mongodb://localhost/bookAPI')
    }catch(error){
        throw error 
    }
}
connectDB()

const bookRouter = require('./routes/bookRouter.js') (Book)
const db = mongoose.connect('mongodb://localhost/bookAPI')
const Book = require ('./models/bookModel.js')

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use('/api', bookRouter)

const port = 8080
app.listen(port, () => {
    console.log('Sever started on port: ${port}')
})



