import React from 'react'
import { NavLink } from 'react-router-dom'
import l1 from './l1.jpeg'
import l2 from './l2.jpeg'
import l3 from './l3.jpeg'

import 'bootstrap/dist/css/bootstrap.min.css';
import './Service.css';

const Products = () => {
  return (
    <section class="container text-center off" id="services">
    <h1 class="text-center pro">Our All Products</h1>
    <div class="row row-cols-1 row-cols-md-3 g-4">
    <div>
        <main>
      <div class = "card">
        <img src={l2} alt="" />
    <div class="card-content">
      <h2>
       Red Glose
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
      </p>
      <NavLink to="/Try" > 
      <button className='button cart'>View Details</button>
      </NavLink>
     
      
    </div>
  </div>
</main>
    </div>




  <div class="col">
    <div class="card h-100">
      <img src={l2} class="card-img-top" alt="..."/>
      <div >
      <h2>
       Red Glose
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
      </p>
      <NavLink to="/Try" > 
      <button className='button cart'>View Details</button>
      </NavLink>

       
      </div>

    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={l2} class="card-img-top" alt="..."/>
      <div >
      <h2>
       Red Glose
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
      </p>
      <NavLink to="/Try" > 
      <button className='button cart'>View Details</button>
      </NavLink>
      </div>

    </div>
  </div>
</div>



<div class="row row-cols-1 row-cols-md-3 g-4 second">
  <div class="col">
    <div class="card h-100">
      <img src={l3} class="card-img-top" alt="..."/>
      <div >
      <h2>
       Red Glose
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
      </p>
      <NavLink to="/Try1" > 
      <button className='button cart'>View Details</button>
      </NavLink>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={l3} class="card-img-top" alt="..."/>
      <div >
      <h2>
       Red Glose
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
      </p>
      <NavLink to="/Try1" > 
      <button className='button cart'>View Details</button>
      </NavLink>
      </div>

    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={l3} class="card-img-top" alt="..."/>
      <div >
      <h2>
       Red Glose
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
      </p>
      <NavLink to="/Try1" > 
      <button className='button cart'>View Details</button>
      </NavLink>
      </div>

    </div>
  </div>
</div>









  </section>
  
  )
}

export default  Products
