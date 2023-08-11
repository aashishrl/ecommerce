import React from 'react'

function Sale() {
  return (
    <section className='pt-5 pb-0'>
          <div className="row sale m-0">
          <div className="col-lg-6 s-box1 p-0">
                  <img src="https://images.pexels.com/photos/5650027/pexels-photo-5650027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width="100%" height="100%" alt="" />
          </div>
            <div className="col-lg-6 s-box2 p-0 m-0">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h2>CLEARANCE SALE</h2>
                    <p className='b2-t1'>On All Items</p>
                    <p className='b2-t2 shadow mb-1'>50% OR MORE OFF</p>              
                    <p className='b2-t3'>SHOP NOW </p>
                </div>            
            </div>
      </div>
    </section>
  )
}

export default Sale
