// index.js
const mongoose = require('mongoose');

// MongoDB Atlas connection string
const MONGO_URI = 'mongodb+srv://maheshshrestha1090_db_user:Admin@cluster0.djgqv6k.mongodb.net/week8';

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB Atlas!'))
  .catch(err => console.error('Connection error:', err));

// Schema
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  gender: String,
  salary: Number
});

// Model
const Person = mongoose.model('Person', personSchema, 'people');

// ------------------------------
// Insert one document
// ------------------------------
const samplePerson = new Person({
  name: 'Jacky',
  age: 36,
  gender: 'Male',
  salary: 3456
});

samplePerson.save()
  .then(doc => console.log('📄 Document saved:', doc))
  .catch(err => console.error('Error saving document:', err));

// ------------------------------
// Insert many documents
// ------------------------------
const manypersons = [
  { name: 'Simon', age: 42, gender: "Male", salary: 3456 },
  { name: 'Neesha', age: 23, gender: "Female", salary: 1000 },
  { name: 'Mary', age: 27, gender: "Female", salary: 5402 },
  { name: 'Mike', age: 40, gender: "Male", salary: 4519 }
];

Person.insertMany(manypersons)
  .then(() => console.log("Many documents inserted"))
  .catch(error => console.log("Error inserting many docs:", error));

// ------------------------------
// Find all users sorted by salary
// ------------------------------
Person.find({})
  .sort({ salary: 1 })
  .select("name salary age")
  .limit(10)
  .exec()
  .then(docs => {
    console.log("Showing multiple documents:");
    docs.forEach(doc => console.log(doc.age, doc.name));
  })
  .catch(err => console.error("Error fetching docs:", err));

// ------------------------------
// Extra Query: Female age >= given age
// ------------------------------
let givenage = 30;

Person.find({ gender: "Female", age: { $gte: givenage } })
  .sort({ salary: 1 })
  .select("name salary age")
  .limit(10)
  .exec()
  .then(docs => {
    console.log("Showing females age >=", givenage);
    docs.forEach(doc => console.log(doc.age, doc.name));
  })
  .catch(err => console.error("Error filtering docs:", err));

// ------------------------------
// Count Documents
// ------------------------------
Person.countDocuments()
  .then(count => {
    console.log("Total documents Count:", count);
  })
  .catch(err => console.error(err));

// ------------------------------
// Delete Documents (age >= 25)
// ------------------------------
// ------------------------------
// Delete Documents (age >= 25)
// ------------------------------
Person.deleteMany({ age: { $gte: 25 } })
  .then(result => {
    console.log("Deleted documents:", result);
  })
  .catch(err => console.error(err));

// ------------------------------
// Update females: set salary = 5555
// ------------------------------
Person.updateMany(
  { gender: "Female" },
  { salary: 5555 }
)
  .exec()
  .then(result => {
    console.log("Updated documents:", result);
  })
  .catch(err => console.error(err));
