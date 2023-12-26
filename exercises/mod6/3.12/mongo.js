import mongoose from 'mongoose';
import process from 'process';

if (process.argv.length<3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://aikyu:${password}@web3.1afdk05.mongodb.net`;

    const dbName = 'mod6';

    mongoose.set('strictQuery',false)
    // Disable command buffering
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: dbName, // Set the name of the database
    bufferCommands: false, // Disable command buffering
  }).then(async () => {
    console.log('Connected to MongoDB');
  
    // Define your schema and model here
    const noteSchema = new mongoose.Schema({
      content: String,
      important: Boolean,
    });
  
    const Note = mongoose.model('Note', noteSchema);
  
    // Create a new note instance and save it
    const note = new Note({
      content: 'Sample note content',
      important: true,
    });
  
    await note.save(); // Wait for the save operation to complete
  
    console.log('Note saved!');
    mongoose.disconnect(); // Disconnect from MongoDB after operations
  }).catch(error => {
    console.error('Error connecting to MongoDB:', error.message);
  });