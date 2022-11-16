import Home from './Home';
import React from 'react';
import "./Rightside/rightside.css";

 
const Rightside = () => {
  return(
  <div className='rightbar'>

    <div className='sub'>
      <div className='subtitle'>
        <h2>Categories</h2>
        <p>Uncheck all</p>
      </div>
      <div className='genry'>
        <div className='category'>
        <label htmlFor=""> Action
          <input type="checkbox" name="Action" />
        </label>
        <label htmlFor=""> Adventure
          <input type="checkbox" name="Adventure" />
        </label>
        <label htmlFor=""> Animated
          <input type="checkbox" name="Animated" />
        </label>
        <label htmlFor=""> Comedy
          <input type="checkbox" name="Comedy" />
        </label>
        <label htmlFor=""> Crime
          <input type="checkbox" name="Crime" />
        </label>
        <label htmlFor=""> Fantasy
          <input type="checkbox" name="Fantasy" />
        </label>
      </div>
      <div className='b'>
        <button>See More</button>
      </div>
      
      </div>
    </div>
      
    <div className='corporate'>
      <div className='service'>
          <h2>Services</h2>
          <p>Uncheck all</p>
        </div>

    <div className='stream'>
      <div className='category'>
          <label htmlFor=""> Netflix
            <input type="checkbox" name="Netflix" />
          </label>
          <label htmlFor=""> Prime video
            <input type="checkbox" name="Prime video" />
          </label>
          <label htmlFor=""> Disney +
            <input type="checkbox" name="Disney+" />
          </label>
          <label htmlFor=""> HBO max
          <input type="checkbox" name="HBO max" />
          </label>
          <label htmlFor=""> Hulu
            <input type="checkbox" name="Hulu" />
          </label>
          <label htmlFor=""> Starz
            <input type="checkbox" name="Starz" />
          </label>
      </div>
      <div className='more'>
        <button>See More</button>
      </div>
    </div>
    </div>
  
   
  </div>
)
}

export default Rightside;
