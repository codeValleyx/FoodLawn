const Shop = require("../models/shop")
const Item = require("../models/item")
const User = require("../models/user");
const Order = require("../models/order");

module.exports.info = async (req, res) => {
    const shop = await Shop.findOne({_id: req.params.id});

    if(!shop){
        return res.status(404).json({success: false, msg: "no shop found"});
    }

    await shop.populate("menu");

    res.status(200).json(shop);
}

module.exports.getAll = async (req, res) => {
    const shops = await Shop.find({});

    res.status(200).json(shops);
}

module.exports.order = async (req, res) => {
    if(req.isAuthenticated()){
        const user = await User.findOne({email: req.user.email})

        const order = new Order({
            customer: user,
            shop: req.params.id,
            order_id: '1',
            items: req.body.items
        });

        await order.populate('items');
        
        let total = order.items.reduce((sum, item) => {
            return sum + item.price;
        }, 0);

        order.totalCost = total;

        await order.save();

        res.status(200).json({success: true, msg: "order created", order: order});
    }
    else{
        res.status(401).json({success: false, msg: 'unauthorized'});
    }
}
