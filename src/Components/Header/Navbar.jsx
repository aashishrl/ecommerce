import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Navbar() { 
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <section className='nav'>
      <div className="container">
        <ul className='d-flex align-items-center gap-3'>
          <div className="dropdown n-d">
            <div className="dropdown-toggle cat  text-white" data-bs-toggle="dropdown" aria-expanded="false">
              ALL CATEGORIES
            </div>
            <ul className="dropdown-menu">                         
            {data.map((a, index) => (
              <li>
                <Link to={`/category/${a}`} className="dropdown-item text-capitalize" href="#" key={`a-${index}`}>{a}</Link>
              </li>             
              ))}                       
            </ul>
          </div>
          <li className='top-picks'><span className='d-flex align-items-center'> Top Picks  <i className="fs-5 bi bi-arrow-right-short"></i></span></li>
          <ul className='d-flex gap-4'>
            {data.slice(0, 8).map((a, index) => (
              <li className='m-cat text-capitalize'><Link className='nc-link' key={`a-${index}`} to={`/category/${a}`} >{a}</Link></li>
            ))}
          </ul>
        </ul>
      </div>

    </section>
  )
}

export default Navbar
