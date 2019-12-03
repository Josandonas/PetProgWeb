const express = require('express');

const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');
const ApprovalController = require('./controllers/ApprovalController');
const RejectionController = require('./controllers/RejectionController');


const routes = express.Router();
const upload = multer(uploadConfig);

//metodos: get, put, delete, post
//req.query = Acessar query params (para filtros)
//req.params = acessar route params (para ediçao, delete)
//req.body = acessar corpo da requisição( criaçao, ediçao)


routes.post('/sessions', SessionController.store);
routes.post('/spots', upload.single('thumbnail'),SpotController.store);

routes.get('/spots', SpotController.index);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

routes.post('/bookings/:booking_id/approvals', ApprovalController.store);
routes.post('/bookings/:booking_id/rejections', RejectionController.store);

module.exports = routes;