import React from "react"
import { useSelector  } from "react-redux"
import { useDispatch } from "react-redux"
import Itemlist from "./itemList";
import { clearCart } from "../utils/cartSlice";


const Cart = ()=>{
    const dispatch = useDispatch()
    const  handleClearCart = ()=>{
       dispatch(clearCart())
    }
    const cartItems = useSelector((store) =>
    store.cart.items);

    return <div className="text-center m-4 p-4">

        <h1 className="text-2l font-bold">Cart</h1>
        <div className = "w-6/12 m-auto">
            <button className = "p-2 m-2 bg-black text-white rounded-lg"
            onClick = {
                handleClearCart
            }
            >Clear Cart</button>
            {cartItems.length === 0 && <h1>ur cart is empty</h1>}
            <Itemlist items={cartItems}/>
        </div>
        </div>
}
export default Cart