import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Card from './card/Card';

const Product = () => {
    const pram = useParams();
    const [product, setProduct] = useState();
    useEffect(()=>{
      fetch(`https://fakestoreapi.com/products/${pram.id}`)
            .then(res=>res.json())
            .then(data=>setProduct(data))
    },[])
  return (
    <Card data={product}/>
  )
}

export default Product