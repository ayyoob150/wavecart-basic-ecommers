import React, { useContext, useState } from 'react'
import { Outlet } from 'react-router'
import { Link, NavLink } from 'react-router-dom'
import { context } from '../App';

const Layout = () => {
  const {listcart} = useContext(context);
  console.log('layout',listcart);
  // const num = listcart.length;
  // const [badge,setBadge] = useState(0);
  // setBadge(num)
  return (
    <>
    <nav className='header-container '>
      <Link className='wave' to={'/'}>
        <div className='wave'>Wavecart</div>
      </Link>
      <div  className='search-container'>
        <input className='search' type='text' placeholder='Search Product' />
      </div>
        <ul className='list-container'>
            <li >
                <NavLink className='navhomecart' to={'/'} >Home</NavLink>
            </li>
            <li >
                <NavLink  className='navhomecart' to={'/cart'} >Cart {(listcart !==0) && <span className='badge'>{listcart.length}</span>}</NavLink>
                
            </li>
        </ul>
    </nav>
    <Outlet/>
    </>
  )
}

export default Layout