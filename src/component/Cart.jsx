import React, { useContext, useState } from 'react'
import { context } from '../App'
import { useNavigate } from 'react-router';

const Cart = () => {
  const {
    listcart,setListcart,
    total,setTotal
  } = useContext(context);
  //let [total, setTotal] = useState(0);
  const nav = useNavigate()
  console.log('cart',listcart)
  const handlerDel =(id)=>{
   const newlist = listcart.filter((el)=>el.id !== id
    )
    setListcart(newlist)

    if(newlist.length===0)
    setTotal(0)
  }

  let tot = 0

   listcart.map((el)=>(
    setTotal(tot+=el.price)
  ))

  const hanlderOrder = () => {
    nav('payment')
    console.log('hi');
  }
  // if(listcart.length === 0){
  //   return(
  //     <div className='noData'>
  //     <h2>No Data</h2>
  //     </div>
  //   )
  // }

  return (
    <>
    {(listcart.length ===0) && <div className='noData'>
    <h3>Please add Product..</h3>
    </div>}
    <div > 
      {listcart?.map((el,i)=><div className='cart-item-con' key={i}>
      <img src={el.image} className='cart-image' alt={el.description}/>
      <span className='cart-title'>{el.title.slice(0,24)}...</span>
      <span className='cart-price'>Rs. {el.price}/-</span>
      <span><button onClick={()=>handlerDel(el.id)} className='cart-button'>Delete</button></span>
     
    </div>)}

  <div className='total-con'>
      <div>
        <span className='total'>Total</span>
        <span className='total-price'>Rs. {total.toFixed(2)}/-</span>
    </div>
      <div>
        <button className='total-button' onClick={hanlderOrder}>Place Order</button>
      </div>
    </div>
    
  </div>
  </>
  )
}

export default Cart