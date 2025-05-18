import errorHandler from '../error/errorHandling.js';
import { Reservation } from '../models/reservationSchema.js';



export const createReservation = async (req, res, next) => {
const {firstName,lastName, email, phoneNumber, time, date} = req.body;

if(!firstName || !lastName || !email || !phoneNumber || !time || !date) {
    return next(new errorHandler("Please fill all the fields", 400));
}
try {
    const reservation = await Reservation.create({
        firstName,
        lastName,
        email,
        phoneNumber,
        time,
        date
    });

    res.status(201).json({
        success: true,
        reservation
    });

}catch(error){
    if(error.name === 'ValidationError') {
    const ValidationErrors = Object.values(error.errors).map(err => err.message);
        return next(new errorHandler(ValidationErrors.join(', '), 400));
    }
}}