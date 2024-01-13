const router = require("express").Router();

const Item = require("../models/item");
const Order = require("../models/order");
const { OrderItem } = require("../models/orderItem");

// router.get("/", async (req, res) => {
//     const pendingOrders = await Order.find({customer: req.user._id, status: ['preparing', 'completed']}).sort('status');
//     const deliveredOrders = await Order.find({customer: req.user._id, status: 'delivered'});

//     res.status(200).json({success: true, pendingOrders, deliveredOrders});
// })
router.post("/get", async (req, res) => {
    const cart = await Promise.all(req.body.items.map(item => {
        return Item.findOne({_id: item.id});
    }))

    res.status(200).json({success: true, cart});
})

router.post("/", async (req, res) => {
    let total = 0;

    const orderItemsPromise = req.body.items.map(async item => {
        let newOrderItem =  new OrderItem({
            quantity: item.quantity,
            item: item.id
        })
        
        const itemDb = await Item.findOne({_id: item.id});
        total += itemDb.price*item.quantity;

        newOrderItem = await newOrderItem.save();

        return newOrderItem._id;
    });

    Promise.all(orderItemsPromise).then(async (result) =>{
        const order = new Order({
            customer: req.user._id,
            shop: req.body.shop,
            order_id: 99922,
            totalCost: total,
            items: result
        });

        await order.save();

        res.status(200).json({success: true, order});
    }).catch(err => res.status(500).json({success: false, err: err}));
});



module.exports = router;