import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  return (
    <section className='py-2 border-bottom'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2">
            <Link to='/'>
              <img src="https://thulo.com/images/logos/163/logo_l6qu-tl_1m2c-26_1tuz-ca.png" width="100%" alt="alt text" />
            </Link>
          </div>
          <div className="col-lg-2 text-center ooa">
            <p className='m-0'>Online Order <br /> Available <span className='fw-bold fs-6'>27/7</span>  </p>
          </div>
          <div className="col-lg-4" >
            <form className='h-form justify-content-start d-flex align-items-center' action="" >
              <input className='h-input' type="text" name="Search" id="" placeholder='Search in the thulo market' />
              <button className='h-btn'><i className="bi bi-search"></i></button>
            </form>
          </div>
          <div className="cart d-flex gap-4 col-lg-2 p-0 justify-content-center">
            <div className="cart" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Gift">
              <i className="fa fa-gift fs-4" aria-hidden="true"></i>
            </div>
            <div className="cart" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Wish-List">
              <i className="bi bi-suit-heart fs-5"></i>
            </div>
            <div className="cart" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Cart">
              <i className="bi bi-cart3 fs-5"></i>
            </div>
          </div>
          <div className="col-lg-2 ps-0 d-flex gap-3 align-items-center justify-content-end">
            <p className='m-0 fw-bold  register'><Link className='text-dark register-t' to='register'>Register</Link></p>
            <p className='m-0 fw-bold sign'>
              <Link className='text-dark sign-t' to='login'><i className="fa fa-sign-in me-1" aria-hidden="true"></i> Login</Link>
            </p>
          </div>
        </div>
      </div>     
    </section>    
  )
}

export default Header
