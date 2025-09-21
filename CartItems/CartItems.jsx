import React, { useContext } from "react";
import './CartItems.css';
import {ShopContext} from '../Context/ShopContext';
import remove_icon from '../Assets/Frontend_Assets/cart_cross_icon.png'


function CartItem(){
    const { getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext);
    return(
        <div className="Cartitem">
            <div className="format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Remove</p>
            </div>
           {/* <hr /> */}
            <div>
           
             <hr />
             {all_product.map((item)=>{
                if(cartItems[item.id]>0){
                    return <div className="format format-main">
                    <img src={item.image} alt=""  className="product-icon"/>
                    <p>{item.name}</p>
                    <p>${item.new_price}</p>
                    <button className="quantity">{cartItems[item.id]}</button>
                    <p>${item.new_price*cartItems[item.id]}</p>
                    <img className='cart-removeicon' src={remove_icon} onClick={()=>{removeFromCart(item.id)}}  alt="" />
                </div>
                }
                return null;
             })}
             <div className="cartitem-down">
                <div className="items-total">
                    <h1>Cart Total</h1>
                </div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>

                </div>


               
             </div>
             <button className="btn1">PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitem-promocode">
                <p>If you have promo code, Enter it here</p>
                <div className="cartitem-promobox">
                    <input type="text" placeholder="promo code"/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;