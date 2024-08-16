import express from 'express'
import Event from '../models/event.js';

const showAllEvents = async (req, res) => {
    res.send("All events");
}


export default {
    showAllEvents,
}
