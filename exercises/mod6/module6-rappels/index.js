const express = require("express");
const { json } = require("express");
const morgan = require('morgan');
const personModel = require("./models/person");




// Initializers. These blocks should be placed in different files, for example middlewares.js, server.js...
// but let's keep this simple.
const app = express()

app.use(json())


const logger = morgan(':method :url :status :res[content-length] - :response-time ms');
app.use(logger)




const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})




app.get('/api/persons', async (request, response) => {
  try {
    const allPersons = await personModel.find({}).maxTimeMS(20000);
    response.json(allPersons);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});

app.get("/api/persons/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const person = await personModel.findById(id).maxTimeMS(20000);
    
    if (person) {
      response.json(person);
    } else {
      response.status(404).end();
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});

app.delete("/api/persons/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const deletedPerson = await personModel.findByIdAndDelete(id);
    
    if (deletedPerson) {
      response.status(200).end();
    } else {
      response.status(404).end();
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});

app.post("/api/persons", async (request, response) => {
  try {
    const personPayload = request.body;
    const newPerson = await personModel.create(personPayload);
    response.json(newPerson);
  } catch (error) {
    response.status(422).json({ error: error.message });
  }
});

app.put("/api/persons/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const updatedPerson = request.body;
    
    const result = await personModel.findByIdAndUpdate(id, updatedPerson, { new: true });
    
    if (result) {
      response.json(result);
    } else {
      response.status(404).end();
    }
  } catch (error) {
    response.status(422).json({ error: error.message });
  }
});