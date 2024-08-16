import express from 'express'
const router = express.Router();
import Event from '../models/event.js';
import eventController from '../Controllers/event.js'



router.route('/')
    .get(eventController.showAllEvents); //show index page 



export default router;
