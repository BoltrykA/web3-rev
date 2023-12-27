import mongoose from 'mongoose';
import process, { argv } from 'process';

if (process.argv.length < 3) {
    console.log('give password as argument');
    process.exit(1);
}


const url = process.env.MONGODB_URI;
const dbName = 'mod6';

mongoose.set('strictQuery', false);

console.log('Connecting to MongoDB...');
mongoose.connect(url, {
    dbName: dbName,
    bufferCommands: false,
}).then(async () => {
    console.log('Connected to MongoDB');

    const personSchema = new mongoose.Schema({
        name: String,
        number: String,
    });

    const Person = mongoose.model('Person', personSchema, 'persons');

    if (argv.length === 2) {
        // If there's no argument provided other than the password
        const allPersons = await Person.find();
        console.log('All persons:', allPersons);
    } else if (argv.length === 4) {
        // If there are arguments provided (name, number), save to the collection
        const person = new Person({
            name: argv[2],
            number: argv[3],
        });

        await person.save();
        console.log('Added person', argv[2], 'with number', argv[3], 'to the phonebook');
    }

    await mongoose.disconnect();
}).catch(error => {
    console.error('Error connecting to MongoDB:', error.message);
});
