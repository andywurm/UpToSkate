import skaters from './data/skaterbase2'
import events from './data/eventbase2'
import * as eventController from "./controllers/eventController";
import * as skaterController from "./controllers/skaterController";
import db from "./models/index";

const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

// Syncs db to match models. Wipes database of all entries
db.sync({
    force: true
}).then(async () => {
    events.map(async event => {
        await eventController.createEvents(event)
    })
    skaters.map(async skater => {
        await skaterController.createSkaters(skater)
    })
    console.log("Connected to the database");
});

// Test 
app.get("/api", (req, res) => {
    res.json({ "test": ["The", "Test"] })
})

// Skater endpoints
app.get("/skaters", async (req, res) => {
    const allSkaters = await skaterController.getSkaters()
    res.json(allSkaters) 
})

// Event endpoints
app.get("/events", async (req, res) => {
    const allEvents = await eventController.getEvents()
    res.json(allEvents) 
})

app.get("/events/past", async (req, res) => {
    const pastEvents = await eventController.getEventsByStatus('Past')
    res.json(pastEvents) 
})

app.get("/events/future", async (req, res) => {
    const futureEvents = await eventController.getEventsByStatus('Future')
    res.json(futureEvents) 
})

app.listen(5000, () => { console.log("Server started on port 5000") })