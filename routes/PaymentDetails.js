const express = require('express');

const PaymentDetailsController = require('../contorllers/PaymentDetail.Controllers')
const {verifyToken} = require('../middleware/verifyToken')
const routes = express.Router();

routes.post('/create/:id',verifyToken,PaymentDetailsController.createPaymentDetail)
routes.post('/menu/:id',verifyToken,PaymentDetailsController.paymentDetailProvider)
routes.post('/create-order',verifyToken,PaymentDetailsController.createOrder)
routes.get('/',verifyToken,PaymentDetailsController.getAllPaymentDetail)
routes.get('/:id',verifyToken,PaymentDetailsController.getPaymentDetailId)
routes.patch('/:id',verifyToken,PaymentDetailsController.patchPaymentDetail)
routes.delete('/:id',verifyToken,PaymentDetailsController.deletePaymentDetail)

module.exports = routes