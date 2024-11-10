const express = require('express');

const PaymentDetailsController = require('../contorllers/PaymentDetail.Controllers')

const routes = express.Router();

routes.post('/create',PaymentDetailsController.createPaymentDetail)
routes.get('/',PaymentDetailsController.getAllPaymentDetail)
routes.get('/:id',PaymentDetailsController.getPaymentDetailId)
routes.patch('/:id',PaymentDetailsController.patchPaymentDetail)
routes.delete('/:id',PaymentDetailsController.deletePaymentDetail)

module.exports = routes