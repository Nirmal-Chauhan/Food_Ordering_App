import { useDispatch, useSelector } from "react-redux"
import Header from "./Header"
import RestaurantMenu from "./RestaurantMenu"
import { clearCart, removeItem } from "../Utility/cartSlice";

const Cart=()=>{

    let cartItems=useSelector((store)=>store.cart.items);
    console.log(cartItems);

const dispatch=useDispatch()

    const handleClearCart=()=>{
    dispatch(removeItem())
    // dispatch(clearCart())
    }

    return(
<div>
    <Header/>
    <h2 className=" p-2 text-center text-3xl font-bold shadow-md w-6/12 mx-80">Cart</h2>
    
    <button className="m-2 p-2 bg-black text-white rounded-md" onClick={handleClearCart}>Remove Items</button>
    {cartItems.length===0 && <h1 className="items-center font-bold text-3xl shadow-2xl bg-red-100 w-6/12 p-2 "> OOPS! Card is empty! add items to the cart   </h1>}
    <div>

        {
            cartItems.map((cartItem)=>{
                return(
                    <div className="w-6/12 m-auto">
                        <li className="bg-slate-100 m-4 list-none rounded-md">
                        <img className="w-[80px]" src={ cartItem?.imageUrl}alt=""/>
                    <h2 className="font-bold">{cartItem?.name}</h2>
                    <p>{cartItem?.description}</p>
                    < p className="font-bold">₹ {Math.floor(cartItem?.price/100)}/-</p>
                    </li>
                    </div>
                )
            })
        }
    </div>
</div>
    )
}

export default Cart