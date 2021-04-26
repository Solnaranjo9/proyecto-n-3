const jwt = require ('jsonwebtoken')
const bcrypt = require('bcrypt')

const booksController = () => {
    const getBooks = async (req, res) =>{
        const response = await Book.find(query)

        return res.json(response)
    }
    return getBooks
    
    const postBook = async (req, res) => {
        const book = new Book(req.body)
        await book.save()
        return res.status(201).json(book)
    }
    
    return {getBook, postBook}
}
    const postUser = async (req,res) => {
     
        const saltingNumber = 10
        bcrpt.hash(myPlaintexPassword, saltRounds, function(err, hash){
            //Store hash in your passwor DB.
        });
        const encryptedPassword = await bcrypt.hash(req.body.password, saltingNumber)


        try{
        const {body} = req


    const newUserName =() => {
        let splitFirstName = body.firstName.split('')
        let splitLastName = body.lastName.split('')


        if (body.lastName && body.firstName){
            return (splitFirstName[0] + '.'+ splitLastName [0])
        }
        else{
            return body.firstName ? splitFirstName [0] : splitLastName [0]
        }
    }

    const userObject =
    {
        firstName: body.firstName,
        lastName: body.lastName,
        userName: newUserName(),
        password: encryptePassword,
        email: body.email,
        address: body.address,
        phone: body.phone
    }
    const user = new User (userObject)
    console.log('user:', user ) 

    await user.save()
    return res.status(201).json(user)
     }catch (err) {
         throw console.log('el error es:' + err)
     }

     const getUserById = async (req, res) =>{
        const {params} = req
        const response = await Book.findById(params.bookId)
    
        res.json(response)
     }
     catch(err) {
         throw err
     }

     const putUserById = async (req, res) => {
         try{
             const{params, body} = req
             const response = await User.updateOne({
                 _id: params.userId
             },{
                 $set: {
                 firstName: body.firstName
                lastName: body.lastName
                userName: (() => {
                     let splitFirstName= body.firstName.split('')
                     let splitLastName = body.lastName.split('')

                    const isPassworsCorrect = await bcrypt.compare(body.password)
                    
                        if (body.lastName && body.firstName){
                         return (splitFirstName [0] + '.' + splitLastName)
                         }
                         else{
                         return body.firstName ? splitLastName [0] : splitLastName [0]
                        }
                     })(),
                    password: body.password,
                    email: body.email,
                    address: body.address,
                    phone: body.phone
                 }
             })
             return res.status(202).json (response)
         }
         catch (err){
             throw console.log ('el error es:' + err)
         }

        const deleteUserById = async (req, res) => {
            try{
                const {params} = req
                console.log (params)
                await User.findByIdAndDelete(params.userId)
                return res.status(202).json({message:'El libro fue eliminado con exito'})
            }catch (err){
                throw console.log('el error es:' + err)
            }
        }
     }
     const postUserLogin = async(req, res) =>{
         try{
             const{body} = req
             const foundUser = await User.findOne ({ 'userName' : req.body.userName});
         }
            
             if (foundUser && foundUser.password == req.body.password){
                    const tokenUser ={
                        firstName: foundUser.firstName,
                        lastName: foundUser.lastName,
                        userName: foundUser.userName
                    }
                    const token = jwt.sign(tokenUser, 'soll321', {expiresIn: '1h'});

                    return res.status(202).json({message:'OK'})
                }
            else{
                return res.status(202).json({message:'credenciales invalidas'})
            }

            else{
                return res.status(202).json({message:'invalid user'})
            }
        
            catch (err){
                throw err
            }

        const checkPassword= async (user, password) => {
            return bcrypt.compare(password,user.password)
        } 
        const generateToken = (user) => {
            return jwt.sign({
                firstName: user.firstName,
                lastName: user.lastName,
                userName: user.userName,
                address: user.address,
                phone: user.phone
            }, 'secret')
        }
     }
    return{getBooks, postUser, getUserById, putUserById, deleteUserById, postUserLogin, generateToken}
 }
module.exports = booksController