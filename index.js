require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Person = require('./models/person')
const { response } = require('express')

const app = express()

app.use(express.json())
app.use(express.static('build'))
app.use(cors())
app.use(morgan( (tokens, req,res) => {
    if (tokens.method(req,res) === 'POST') {
        return [
            tokens.method(req, res),
            tokens.url(req, res),
            tokens.status(req, res),
            tokens.res(req, res, 'content-length'), '-',
            tokens['response-time'](req, res), 'ms',
            JSON.stringify(req.body)
          ].join(' ')
    }else {
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms'
      ].join(' ')
    }

}))


app.get('/api/persons', (req, res, next) => {
    Person
    .find({})
    .then(persons => {res.json(persons)})
    .catch(err => next(err))
})

app.get('/api/persons/:id', (req, res, next) => {
    Person
    .findById(req.params.id)
    .then(person => {
        if(person){
            res.json(person)
        }else {
            res.status(404).end()
        }})
    .catch(err => next(err))
})

app.put('/api/persons/:id', (req,res,next) => {
    const body = req.body

    const person = {
        name : body.name,
        number : body.number
    }
    Person
    .findOneAndUpdate({_id: mongoose.Types.ObjectId(req.params.id)}, person, {new:true, runValidators:true})
    .then(updatedNote => res.json(updatedNote))
    .catch(err => next(err))
})

app.post('/api/persons', (req, res, next) => {
    const body = req.body
    const person = new Person({
        name : body.name,
        number : body.number
    })
    person
    .save()
    .then(savedPerson => res.json(savedPerson))
    .catch(err => next(err))
})

app.get('/info', (req, res, next) => {
    Person
    .find({})
    .then(persons => {
        let date = new Date()
        res.send(`Phonebook has info for ${persons.length} ${persons.length > 1 ? 'people': 'person'}
                 <br/><br/> ${date.toDateString()} ${date.toTimeString()} `)
    })
    .catch(err => next(err))
})

app.delete('/api/persons/:id', (req,res, next) => {
    Person
    .findByIdAndRemove(req.params.id)
    .then(res.status(204).end())
    .catch(err => next(err))
})


const unknownEndpoint = (req,res) => {
    res.status(404).send({error: 'unknown endpoint'})
}

app.use(unknownEndpoint)

const errorHandler = (err, req, res, next) => {
    console.log(err.message)
    if(err.name === 'CastError'){
        return response.status(400).send({error: 'malformated id'})
    } else if (err.name === 'ValidationError'){
        return res.status(400).json({error : err.message})
    }

    next()
}

app.use(errorHandler)


const PORT = process.env.PORT || 3001
app.listen(PORT , () => {
    console.log(`Server now listening on port ${PORT}.`)
})