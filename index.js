const express = require('express');
const app = express();

const phonebook = [
  {
    id: '1',
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: '2',
    name: 'Ada Lovelace',
    number: '39-44-5323523',
  },
  {
    id: '3',
    name: 'Dan Abramov',
    number: '12-43-234345',
  },
  {
    id: '4',
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
  },
];

app.use(express.json());

app.get('/api/persons', (request, response) => {
  response.json(phonebook);
});

app.get('/api/persons/:id', (request, response) => {
  const id = String(request.params.id);
  console.log('==================================');
  console.log('id', id);
  console.log('==================================');
  const person = phonebook.find((person) => person.id === id);
  console.log('person', person);
  console.log('==================================');
  if (person) {
    console.log('found');
    response.json(person);
  } else {
    console.log('not found');
    response.status(404).end();
  }
});

app.get('/info', (request, response) => {
  const phonebookLength = phonebook.length;
  const date = new Date();
  response.send(
    `<p>Phonebook has info for ${phonebookLength} people</p><br><p>${date}</p>`
  );
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
