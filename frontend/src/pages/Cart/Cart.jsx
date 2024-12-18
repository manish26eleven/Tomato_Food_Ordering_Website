import React from 'react'
import './Cart.css'
import { useContext } from 'react'
//import FoodItem from '../../componenets/FoodItem/FoodItem'
import { StoreContext } from '../../Context/StoreContext';
import { Link } from 'react-router-dom'
const Cart = () => {
  const {cartItems,food_list,removeFromCart,getTotalCartAmount,url} = useContext(StoreContext);
  return (
    <div className='cart'>
<div className="cart-items">
  <div className="cart-items-title">
    <p>Items</p>
    <p>Title</p>
    <p>Price</p>
    <p>Quantity</p>
    <p>Total</p>
    <p>Remove</p>
  </div>
  <br/>
  <hr/>
  {
    food_list.map((item,index)=>{
       if(cartItems[item._id]>0) {
       return(
        <div>
        <div className='cart-items-title cart-items-item'>
          <img src={url+"/images/"+item.image} alt='' />
          <p>{item.name}</p>
          <p>${item.price}</p>
          <p>{cartItems[item._id]}</p>
          <p>${item.price*cartItems[item._id]}</p>
          <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
          </div>
          <hr/>
          </div>
       )
       }
    })
  }
</div>
<div className="cart-bottom">
  <div className="cart-total">
   <h2></h2>
   <div>
    
    <div className="cart-total-details">
      <p>SubTotal</p>
      <p>${getTotalCartAmount()}</p>
    </div>
    <hr/>
    <div className="cart-total-details">
      <p>Delivery Fee</p>
      <p>${getTotalCartAmount()===0?0:2}</p>
    </div>
    <hr/>
    
    <div className="cart-total-details">
     <b>Total</b>
     <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
    </div>
   </div>
   <Link to='/order'> <button>PROCEED TO CHECKOUT</button></Link> 
  </div>
  <div className="cart-promocode">
    <div>
      <p>If you have a promo code, Enter it here</p>
      <div className='cart-promocode-input'>
        <input type='text' placeholder='promo code' />
        <button>Submit</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cart
// https://rock.porn/videos/58502/desi-chick-call-for-tution-but-get-banged-by-her-teacher-and-fucked-till-cum/?play=true