import React, { useContext, useState } from 'react'
import { context } from '../../App'
import { Link } from 'react-router-dom';

const Card = ({data}) => {
  const {listcart,setListcart} = useContext(context)
  const [add, setAdd] = useState("Add to Cart")
  const handlerAdd =()=>{
    setAdd("Added")
    //setoneData(data);
    
    if(!listcart.includes(data)){
      // listcart.push(data)
      setListcart(listcart.concat(data))
      console.log('card',listcart);
    }
    
    // listcart.filter((el)=>{
      
    // })
 
    
    // listcart.forEach((element) => {
    //   if(element.id !== data.id){
    //     console.log(element.id ,data.id);

    //     listcart.push(data)
    //   }
    // });
    

  }
  return (
  <div className='card-cont'>
      <div  className='image-con'>
       <Link to={`/${data?.id}`}>
        <img className='imageP' src={data?.image} alt={data?.description} />
       </Link>
        <div className='title-con'>
       <Link to={`/${data?.id}`}>
          <div className='title'>
            {data?.title}
          </div>
       </Link>
       <Link to={`/${data?.id}`}>
          <div className='price'>
            Rs. {data?.price}/-
          </div>
       </Link>
          <div className='rating'>
            {data?.rating?.rate} Rating 
            <span><button className='cart-button' disabled={(add==="Added")?true:false} onClick={handlerAdd}>{add}</button></span>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Card