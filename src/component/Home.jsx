import { useContext, useEffect, useState } from 'react';
import Card from './card/Card';
import { context } from '../App';

const Home = () => {

//  const [change , setChange] = useState();

//   let xyz ={
//    arr: [{
//       name:'abx',
//       age: [
//                {
//                 age:20
//                  }
//     ]    }]
//   };

//   console.log(xyz);

//   setChange({
//    // ...xyz,
//    // ...xyz.arr,
//     ...xyz.arr[0].age[0].age =23
//   })
//   console.log(xyz);


  const {data, setData} =  useContext(context)

  if(!data){
  return(<>Loading...</>)

  }
  return (<div className='home'>
    {data.map((el , ind)=>
       <Card key={ind} data={el}/>
      
    )}
    
    </div>
  )
}

export default Home