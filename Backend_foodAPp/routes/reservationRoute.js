
import express from 'express';
import { createReservation } from '../controllers/reservation.js';

const router = express.Router();
router.post('/sent', createReservation);

export default router;
