const ideasRouter = require('express').Router();

module.exports = ideasRouter;

//Import provided helper functions
const { 
  addToDatabase,
  getAllFromDatabase,
  getFromDatabaseById,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require('./db');

//Import that extra credit question
const checkMillionDollarIdea = require('./checkMillionDollarIdea');

//Checks the idea exists already in the database
ideasRouter.param('id', (req, res, next, id) => {
  const idea = getFromDatabaseById('ideas', id);
  if (idea) {
    req.idea = idea;
    next();
  } else {
    res.status(404).send();
  }
});

//Use helper function to return all ideas from the database
ideasRouter.get('/', (req, res, next) => {
  res.send(getAllFromDatabase('ideas'));
});

//Use helper function to post new idea to database
ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
  const newIdea = addToDatabase('ideas', req.body);
  res.status(201).send(newIdea);
});

//Get a single idea by ID
ideasRouter.get('/:id', (req, res, next) => {
  res.send(req.idea);
});

//Update a single idea by ID
ideasRouter.put('/:id', checkMillionDollarIdea, (req, res, next) => {
  let updatedInstance = updateInstanceInDatabase('ideas', req.body);
  res.send(updatedInstance);
});

//Delete idea by ID
ideasRouter.delete('/:id', (req, res, next) => {
  const deleted = deleteFromDatabasebyId('ideas', req.params.id);
  if (deleted) {
    res.status(204);
  } else {
    res.status(500);
  }
  res.send();
});
