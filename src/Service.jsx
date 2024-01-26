import React from 'react'
import { NavLink } from 'react-router-dom'
import l2 from './l2.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import  bas from './bas.png'
import bas1 from './bas1.png'
import bas2 from './bas2.png'
import bas3 from './bas3.png'
import bas4 from './bas4.png'
import bas5 from './bas5.png'

import './Service.css';

const Service = () => {
  return (
    <section class="container text-center off" id="services">
    <h2 class="text-center pro">New Arrivals</h2>
    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src={bas} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Red Bag</h5>
        <h1 className='top'>New</h1>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={bas1} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Pink Bag</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={bas2} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Blue Bag</h5>
        <h1 className='top'>New</h1>

      </div>
    </div>
  </div>
</div>













<h2 class="text-center pro">Our BestSellers</h2>
    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src={bas5} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Blue Bowl</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={bas4} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">White Bowl</h5>
        <h1 className='top'>New</h1>

      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={bas5} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Blue Bowl</h5>
      </div>
    </div>
  </div>
</div>







  </section>
  
  )
}

export default Service
