import React from 'react';
import { Form, Button } from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faBell,
  faToggleOn,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import './Header/header.css'

library.add(faCircleUser, faToggleOn, faBell, faSearch);

function Header() {

  return (
    <div className='head'>
       
      <header className='top'>
        {/* search engine */}
      <Form className="xform" >

          <Button type="submit">
            <FontAwesomeIcon className='glass' icon="fa-solid fa-magnifying-glass" />
          </Button>
          <input
            className="search"
            type="search"
            placeholder="Search for movies, TV shows..."
            name="query"
            area-label="search" />
      </Form>

      {/* header icons */}
        <div className='icons'>
          <button className='b1'>
          <FontAwesomeIcon icon="fa-solid fa-toggle-on" />
          </button>

          <button className='b2'>
          <FontAwesomeIcon icon="fa-solid fa-bell" />
          </button>

          <button className='b3'>
          <FontAwesomeIcon icon="fa-solid fa-circle-user" />
          </button>
        </div>

        {/* // onSubmit={searchMovie}
            // value={query}
            // onChange={changeHandler} */}
       
        {/* <div>
           <select name="" id="">
            <option value=""></option>
            <option value="">Categories</option>
            <option value="">Services</option>
            <option value="">Filter</option>
           </select>
        </div>  */}
      </header>
    
    </div>
  )
}
export default Header;