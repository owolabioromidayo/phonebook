// const {uuid} = require('uuidv4')
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

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



let persons = [
    {id : 1, name : "Arto Hellas", number: "040-1234556" },
    {id : 2, name : "Ada Lovelace", number: "040-123455944" }
]

app.get('/api/persons', (req,res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req,res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    if (person){
        res.json(person)
    }
    else{
        res.status(404).end()
    }
})

app.post('/api/persons', (req,res) => {
    const newPerson = req.body
    if (persons.find(person => person.name === newPerson.name)){
        res.send({error :'name must be unique' })
    }else if(newPerson.name === undefined || newPerson.number === undefined) {
        res.json({error: 'Incomplete information'})
    }else if (isNaN(newPerson.number)) {
        res.json({error:'number field is NaN'})
    }else{
        newPerson.id = Math.round(Math.random() * 999999999)
        newPerson.number = Number(newPerson.number)
        persons.push(newPerson)
        res.json(newPerson)
    }

})

app.get('/info', (req,res) => {
    let date = new Date()
    res.send(`Phonebook has info for ${persons.length} people <br/><br/> ${date.toDateString()} ${date.toTimeString()} `)
})

app.delete('/api/persons/:id', (req,res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)
    res.status(204).end()

})

const PORT = process.env.PORT || 3001
app.listen(PORT , () => {
    console.log(`Server now listening on port ${PORT}.`);
})