const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const connectToDB = () => {
    const url = process.env.MONGODB_URI
    console.log(url);
    mongoose
    .connect(url, 
        {useNewUrlParser : true,
             useUnifiedTopology: true, 
             useFindAndModify: false, 
             useCreateIndex: true
        })
    .then(() => console.log('connected to mongoDB'))
    .catch(err => console.log('error connection to MongoDB', err.message))

}

const personSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true,
        unique: true,
        minlength: 3
    },
    number : {
        type: String,
        required : true,
        minlength: 8
    },
})

personSchema.plugin(uniqueValidator)

personSchema.set('toJSON', {
    transform : (document, returnedObj) => {
        returnedObj.id = returnedObj._id.toString()
        delete returnedObj._id
        delete returnedObj.__v
    }
})


connectToDB()
module.exports = mongoose.model('Person', personSchema)