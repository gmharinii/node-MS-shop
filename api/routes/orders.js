const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders fetched'
    })
});

router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    }
    res.status(200).json({
        message: 'Successfully saved the orders',
        order: order
    })
});

router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Fetched particular ID',
        id: req.params.orderId
    })
    
});

router.patch('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated orders'
    })
});

router.delete('/:OrderId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted orders'
    })
});

module.exports = router;