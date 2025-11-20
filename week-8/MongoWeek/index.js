// index.js
const mongoose = require('mongoose');

// MongoDB Atlas connection string (with URL-encoded password)
const MONGO_URI = 'mongodb+srv://week8:nepal%40123@cluster0.abc123.mongodb.net/Week8?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('✅ Connected to MongoDB Atlas!'))
.catch(err => console.error('❌ Connection error:', err));

// Define a schema
const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    gender: String,
    salary: Number
});

// Define a model (collection name will be 'people')
const Person = mongoose.model('Person', personSchema, 'people');

// Create a sample document
const samplePerson = new Person({
    name: 'Jacky',
    age: 36,
    gender: 'Male',
    salary: 3456
});

// Save the document to MongoDB
samplePerson.save()
    .then(doc => console.log('📄 Document saved:', doc))
    .catch(err => console.error('❌ Error saving document:', err));
