// routes/user.routes.js
import express from 'express';
import {searchcheater} from '../controllers/user.controller.js';

const router = express.Router();

router.route('/search').get(searchcheater);

export default router;