import React ,{useContext, useState} from 'react'
import { context } from '../App'

const Payment = () => {
  const {total, setTotal} = useContext(context);
  const [pay, setpay] = useState('Pay');
  const handlerpay = ()=>{
    if(total !==0)
    setpay("Successful");
  }
  return (
    <div className='payment'>
      <h2>Payment Getway</h2>
      <h3>On maintenance</h3>
      <h4>This page on working we are sorry to intrupt.</h4>
      <h3>Total Price Rs. {total.toFixed(2)}/-</h3>
      <button className='total-button pay' onClick={handlerpay}>{pay}</button>
    </div>
  )
}

export default Payment