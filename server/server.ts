import skaters from './data/skaterbase2'
import events from './data/eventbase2'

const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

console.log(skaters)
console.log(events)
// const skaterbase = require('./data/skaterbase2')
// console.log(skaterbase)
// const eventbase = require('./data/eventbase2')
// console.log(eventbase)

app.get("/api", (req, res) => {
    res.json({ "test": ["The", "Test"] })
})

app.get("/skaters", (req, res) => {
    res.json(({ "skaters": ["Shoma Uno", "Evgenia Medvedeva"] }))
})

app.get("/events", (req, res) => {
    res.json(({ "events": ["Skate America", "Grand Prix Final"] }))
})

app.listen(5000, () => { console.log("Server started on port 5000") })