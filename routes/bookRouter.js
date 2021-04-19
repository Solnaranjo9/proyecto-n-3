const express = require('express')
const booksController = require ('../controllers/booksController')
const Joi = require ('joi')
const { Schema } = require('mongoose')
const validator = require ('express-joi-validation').createValidator()

const bodySchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    genre: Joi.string().required(),
    read: Joi.boolean().required()
})

const routes = (Book) => {
    const bookRouter = express.Router()
    const controllers = booksController (Book)

    bookRouter.route('/books')
        .get(controller.get)
        .post(validator.body(bodySchema) (async (req, res) => {
        const book = new book(req.body)
        console.log('body:', req.body)
        await book.save()
        return res.status(201).json(book)
     })

     bookRouter.route('/books/:bookId')
     .get( async (req, res) => {
         const {params} = req
         const response = await Book.findById(params.bookId)
     
         res.json(response)
     })
     .put(async (req, res) =>{
        const {params} = req
        const {body} = req
        const response = await Book.updateOne({
            _id: params.bookId
        }, {
            $set: {
                author: body.author,
                title: body.title, 
                genre: body.genre,
                read: body.read
            }
        })
        return res.status(202).json(response)


    .delete(async (req, res) =>{
        const {params} = req
        console.log(params)
        await Book.findByIdAndDelete(params.bookId)
        return res.status(202).json({message:'El libro fue eliminado'})
    })
     })

     userRouter.router('/user/:login')
        post(controller.postLogin)

     return bookRouter
}

module.exports = routes


