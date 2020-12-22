const mongoose = require('mongoose')

const connectToDB = () => {
    const password = process.argv[2]
    const url = `mongodb+srv://owolabioromidayo:${password}@cluster0.28vgr.mongodb.net/phonebook-app?retryWrites=true&w=majority`
    mongoose.connect(url, 
        {useNewUrlParser : true,
             useUnifiedTopology: true, 
             useFindAndModify: false, 
             useCreateIndex: true
        })
}

const personSchema = new mongoose.Schema({
    name : String,
    number : String,
    id : Number
})

const Person = mongoose.model('Person', personSchema)

const addEntry = (personObj) => {
    const person = new Person(personObj)
    person.save().then(res => {
    console.log('note saved')
    mongoose.connection.close() 
    })
}

const listEntries = () => {
    Person.find({}).then(res => {
    console.log("phonebook:")
    res.forEach(person => console.log(`${person.name} ${person.number}`))
    mongoose.connection.close()
    })
}

const main = () => {
    if (process.argv.length < 3) {
        console.log("Please provide the password as an argument: node mongo.js <password>");
        process.exit(1)
    }
    
    connectToDB()

    if (process.argv.length < 5) {
        listEntries()
    }
    else {
        addEntry({name : process.argv[3], number : process.argv[4]})
    }
    

}

main()