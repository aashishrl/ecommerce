import React from 'react'

function Top() {
    return (
        <section className='top py-1'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <ul className='list-unstyled d-flex align-items-center gap-4 m-0'>
                            <div className="dropdown">
                                <button className=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">EN</button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#"><img src="https://www.nabilbank.com/assets/country-flags/US.svg" alt='alternative text' /><span className="lang-text"> English</span></a></li>
                                    <li><a className="dropdown-item" href="#"><img src="https://www.nabilbank.com/assets/country-flags/NP.svg" alt='alternative text' /><span className="lang-text"> नेपाली</span></a></li>
                                </ul>
                            </div>
                            <li><span className='text-secondary'>Hotline: </span><a href="tel:015670001" className=' top-link'>01 5670001</a></li>
                            <li className=' top-bd d-flex align-items-center gap-2'>
                                <a href='' className='top-link d-flex gap-2 align-items-center'>
                                    <i className="fs-6 bi bi-envelope-paper"></i>
                                    <span className=''> Contact </span>
                                </a>
                            </li>
                            <li className=' d-flex align-items-center gap-2'>
                                <a href="" className='top-link d-flex gap-2 align-items-center'>
                                    <i className="fs-6 bi bi-geo-alt"></i>
                                    <span className='' href=""> Store location </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 text-end">
                        <div className="social">
                        <img src="https://e7.pngegg.com/pngimages/991/568/png-clipart-facebook-logo-computer-icons-facebook-logo-facebook-thumbnail.png" width="26" alt="" />
                        <img src="/social/social2.jpg" className='mx-2' width="28" alt="" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553" width="23" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Top
