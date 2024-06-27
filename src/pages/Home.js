import React from 'react';
// import carousel from '../inc/carousel'

const Home = () => {
  return (
    <div className='container-fuild'>
      <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt6d15bbcec64e2de6/6421358676f22d120bb591ec/GOAL_-_Blank_WEB_-_Facebook_-_2023-03-27T071852.185.png?format=pjpg&auto=webp&width=640&quality=60" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt943c9f051f0087c0/639f1d7d03c7a66c44782060/GettyImages-1245184407.jpg?format=pjpg&auto=webp&width=640&quality=60" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://media.npr.org/assets/img/2022/12/30/ap22364795346345-2c6120b6fd7a4e91f1b49c8bafa1d3b9ae28e482-s800-c85.webp" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
          <div className='card mt-4'>
             <div className='card-body'>
                 <h2>Home</h2>
             </div>
          </div>
          
    </div>
  )
}

export default Home