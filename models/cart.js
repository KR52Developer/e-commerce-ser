
import mongoose from "mongoose";
import User from "./user.js";
import Product from "./product.js";

const cartSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true,
    },
    items: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Product,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
    }]
});



const Cart = mongoose.model("Cart", cartSchema);

export default Cart;