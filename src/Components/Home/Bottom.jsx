import React from 'react'

function Bottom() {
    return (
        <section className='bottom py-3'>
            <div className="container">
                <div className="d-flex justify-content-between">
                    <div className='b-box d-flex gap-3 align-items-center'>
                        <i className="fa fa-ship fs-1" aria-hidden="true"></i>
                        <span>
                            <p className='mb-2 bi-text1'>FREE SHIPPING</p>
                            <p className='m-0 bi-text2'> Carrier information.</p>
                        </span>
                    </div>
                    <div className='b-box d-flex gap-3 align-items-center'>
                        <i className="fs-1 fa fa-money" aria-hidden="true"></i>
                        <span>
                            <p className='mb-2 bi-text1'>ONLINE PAYMENT</p>
                            <p className='m-0 bi-text2'> Payment methods.</p>
                        </span>
                    </div>
                    <div className='b-box d-flex gap-3 align-items-center'>
                        <i className="fs-1 fa fa-headphones" aria-hidden="true"></i>
                        <span>
                            <p className='mb-2 bi-text1'>24/7 SUPPORT</p>
                            <p className='m-0 bi-text2'> Unlimited help desk.</p>
                        </span>
                    </div>
                    <div className='b-box d-flex gap-3 align-items-center'>
                        <i className="fs-1 bi bi-patch-check"></i>
                        <span>
                            <p className='mb-2 bi-text1'>100% SAFE</p>
                            <p className='m-0 bi-text2'> View our benefits.</p>
                        </span>
                    </div>
                    <div className='b-box d-flex gap-3 align-items-center'>
                        <i className="fs-1 fa fa-retweet" aria-hidden="true"></i>
                        <span>
                            <p className='mb-2 bi-text1'>FREE RETURNS</p>
                            <p className='m-0 bi-text2'> Track or cancel orders.</p>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bottom
