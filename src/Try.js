import React from 'react'
import './Try.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom'

import l2 from './l2.jpeg'
const Try = () => {
  return (
    <div className='container'>
 <div class="product-container try ">
<div class="img-card">
    <img src={l2} alt="" id="featured-image"/>
 
</div>
<div class="product-info">
    <h3>Beautiful Lipstick</h3>
    <h5>Price: $140 <del>$170</del></h5>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa accusantium, aspernatur provident beatae corporis veniam atque facilis.</p>

    <div class="sizes">
        <p>Size:</p>
        <select name="Size" id="size" class="size-option">
            <option value="xxl">XXL</option>
            <option value="xl">XL</option>
            <option value="medium">Medium</option>
            <option value="small">Small</option>
        </select>
    </div>

    <NavLink to="/Products" > 
      <button className='button cart'>Shopping</button>
      </NavLink>
 
</div>
</div>
    </div>
     
  )
}

export default Try
