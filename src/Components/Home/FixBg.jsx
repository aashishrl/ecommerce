import React from 'react'
import {Link} from 'react-router-dom' 

function FixBg() {
  return (
    <section className='text-center b-fix'>
      <div className="row">
        <div className="col-lg-12">
          <p className='bf-text1 fw-bold'>BIGGEST BLACK FRIDAY SALE AT <span>THULO</span></p>
          <p className='bf-hide'>HURRY UP!!!!</p>
          <p className='bf-text2'>Don't miss the oppurtunity</p>
          <Link to="register" className='bf-btn fw-bold'>REGISTER NOW</Link>
        </div>
      </div>
    </section>
  )
}

export default FixBg
