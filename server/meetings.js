const meetingsRouter = require('express').Router();

module.exports = meetingsRouter;

//Import provided helper functions
const { 
  getAllFromDatabase, 
  addToDatabase, 
  deleteAllFromDatabase, 
  createMeeting 
} = require('./db');

//Get an array of all meetings
meetingsRouter.get('/', (req, res, next) => {
  res.send(getAllFromDatabase('meetings'));
});

//Create a new meeting
meetingsRouter.post('/', (req, res, next) => {
  let newMeeting = addToDatabase('meetings', createMeeting());
  res.status(201).send(newMeeting);
});

//Deletes all meetings from the database, seems like big boss man doesn't wanna be bothered if he uses this API route
meetingsRouter.delete('/', (req, res, next) => {
  deleteAllFromDatabase('meetings');
  res.status(204).send();
});
