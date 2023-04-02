import skaters from './data/skaterbase2'
import events from './data/eventbase2'
import * as eventController from "./controllers/eventController";
import db from "./models/index";

db.sync({
    force: true
}).then(async () => {
    events.map(async event => {
        await eventController.createEvents(event)
    })
    console.log("Connected to the database");
});

const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

console.log(skaters)
console.log(events)

app.get("/api", (req, res) => {
    res.json({ "test": ["The", "Test"] })
})

app.get("/skaters", (req, res) => {
    res.json((skaters))
})

app.get("/events", async (req, res) => {
    const waiting = await eventController.getEvents()
    res.json(waiting) 
})

app.get("/events/past", async (req, res) => {
    const waiting = await eventController.getEventsByStatus('Past')
    res.json(waiting) 
})

app.get("/events/future", async (req, res) => {
    const waiting = await eventController.getEventsByStatus('Future')
    res.json(waiting) 
})

app.listen(5000, () => { console.log("Server started on port 5000") })