import express from 'express'
const router = express.Router();

router.route('/login')
    .get()
    .post()

router.route('/signup')
    .get()
    .post()

router.route('/u/:id')
    .get()


export default router;