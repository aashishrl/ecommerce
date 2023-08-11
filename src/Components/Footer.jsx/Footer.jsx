import React from 'react'

function Footer() {
  return (
    <section className='ftop pt-5'>
      <div className="container">
        <div className="row border-bottom pb-4">
          <div className="col-lg-2">
            <h4 className='fw-bold mb-3'>OUR STORES</h4>
            <ul className='d-flex flex-column gap-2'>
              <li>Kathmadnu</li>
              <li>Pokhara</li>
              <li>Butwal</li>
              <li>Chitwan</li>
              <li>Lukla</li>
              <li>Birjung</li>
            </ul>
          </div>         
          <div className="col-lg-2">
            <h4 className='fw-bold mb-3'>USEFUL LINKS</h4>
            <ul className='d-flex flex-column gap-2'>
              <li>USEFUL LINKS</li>
              <li>Privacy Policy</li>
              <li>Returns</li>
              <li>Terms & Conditions</li>
              <li>Contact Us</li>
              <li>Latest News</li>
              <li>Our Sitemap</li>
            </ul>
          </div>
          <div className="col-lg-2">
            <img className='mb-3' src="https://thulo.com/images/logos/163/logo_l6qu-tl_1m2c-26_1tuz-ca.png" width="120" alt="" />
            <ul className='d-flex flex-column gap-2'>
              <li>Pepsicola, Kathmandu 44600</li>
              <li>Phone: 01 5410000</li>
              <li>Fax: (099) 453-1357</li>

            </ul>
          </div>
          <div className="col-lg-4 offset-1">
            <h4 className='fw-bold mb-3'>AVAILABLE ON:</h4>
            <img className='me-4' src="https://a6n4d3q9.rocketcdn.me/wp-content/uploads/2018/08/app-store-button.png.webp" width="190" alt="" />
            <img src="https://a6n4d3q9.rocketcdn.me/wp-content/uploads/2018/08/google-play-button.png.webp" width="190" alt="" />
          </div>
          <div className="col-lg-1"></div>
        </div>
        <div className="row py-3">
          <div className="col-lg-4">
            <h4 className='mb-3 fw-bold'>Paymeent System</h4>
            <img src="https://a6n4d3q9.rocketcdn.me/wp-content/uploads/2018/08/payment.png" alt="" />
          </div>
          <div className="col-lg-4">
            <h4 className='mb-3 fw-bold'>Shipping System</h4>
          <img src="https://a6n4d3q9.rocketcdn.me/wp-content/uploads/2018/08/shipping.png" alt="" />
          </div>
        </div>
      </div>
      <div className="footer py-2">
        <p className='text-center m-0'>
          AASHISH &#169; 2023 CREATED BY RL STUDIO. PREMIUM E-COMMERCE SOLUTIONS.</p>
      </div>
    </section>
  )
}

export default Footer
