# Boss Machine 😈

Front End and database provided by Codecademy. API and middleware is written by me.
Original assignment details can be found [here](/ASSIGNMENT_DETAILS.md)

## How To Use

Clone this repo locally on your machine, install appropriate dependencies, then run `npm run start` to run the server. Open `index.html` found at the root directory or go [here](https://bossmachine-codecademy.surge.sh/) (Just ensure that the server is also running locally on your machine.)

## Overview

Here's an API I have built to serve information to a Boss Machine, a unique management application for today's most accomplished (evil) entrepreneurs. Here I've created API routes using Express.js to manage the boss's 'minions', the boss's brilliant 'million dollar ideas', and to handle all the annoying meetings that keep getting added to the boss's busy schedule. Made with Express.js.

### API Routes

- `/api/minions`
  - GET /api/minions to get an array of all minions.
  - POST /api/minions to create a new minion and save it to the database.
  - GET /api/minions/:minionId to get a single minion by id.
  - PUT /api/minions/:minionId to update a single minion by id.
  - DELETE /api/minions/:minionId to delete a single minion by id.
- `/api/ideas`
  - GET /api/ideas to get an array of all ideas.
  - POST /api/ideas to create a new idea and save it to the database.
  - GET /api/ideas/:ideaId to get a single idea by id.
  - PUT /api/ideas/:ideaId to update a single idea by id.
  - DELETE /api/ideas/:ideaId to delete a single idea by id.
- `/api/meetings`
  - GET /api/meetings to get an array of all meetings.
  - POST /api/meetings to create a new meeting and save it to the database.
  - DELETE /api/meetings to delete _all_ meetings from the database.
- `/api/minions/work`
  - GET /api/minions/:minionId/work to get an array of all work for the specified minon.
  - POST /api/minions/:minionId/work to create a new work object and save it to the database.
  - PUT /api/minions/:minionId/work/:workId to update a single work by id.
  - DELETE /api/minions/:minionId/work/:workId to delete a single work by id.

For all `/api/minions` and `/api/ideas` routes, all POST or PUT requests will send their new/updated resources in the request body. POST request bodies don't have an `id` property, as it is based on the next id in sequence.

There is no POST route for `api/meetings` as they are generated automaticaly by the server.

#### Provided Schemas

- Minion:
  - id: string
  - name: string
  - title: string
  - salary: number
- Idea
  - id: string
  - name: string
  - description: string
  - numWeeks: number
  - weeklyRevenue: number
- Meeting
  - time: string
  - date: JS `Date` object
  - day: string
  - note: string
- Work:
  - id: string
  - title: string
  - description: string
  - hours: number
  - minionId: string

## Provided Testing

Run `npm run test` to make sure all the API routes are working as expected. A testing suite written in Mocha is provided. To run a single test, input `mocha` to the terminal. 