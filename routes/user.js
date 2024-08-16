import express from 'express'
const router = express.Router();
import User from '../models/user.js';
import userController from '../Controllers/user.js'

router.route('/login')
    .get(userController.renderLoginPage)
    .post()

router.route('/signup')
    .get(userController.renderSignupPage)
    .post()

// router.route('/u/:id')
//     .get()


export default router;
