import React from 'react'

function Featured() {
    return (
        <section className='my-3'>
            <div className="container">
                <div className="d-flex align-items-center">
                    <div className="col-lg-3 py-1 f-heading d-flex align-items-center">
                        <div className='span mx-2'></div>
                        <h3 className='fw-bold fs-3 m-0'>Featured Sellers</h3>
                    </div>
                    <div className='line ms-4'></div>
                </div>
                <div className="f-products">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="mb-5 fp-box shadow">
                                <div className="d-flex p-2">
                                    <img className='fbox-img' src="https://thulo.com/images/logos/164/radisson-kathmandu.jpg" width="70px" alt="alternative text" />
                                    <div>
                                        <h6>The Pastry Shop, Radisson Hotel</h6>
                                        <p className='fb-text'>For every delightful moment, Delicious cake and pastry treats are here to satisfy all your cravings and happy moment.</p>
                                    </div>
                                </div>
                                <div className="fbox-link d-flex justify-content-between px-2 py-2">
                                    <p className='fbl-text1 m-0'>29 Products</p>
                                    <p className='fbl-text2 m-0'>Visit Shop</p>
                                </div>
                            </div>
                            <div className=" fp-box shadow">
                                <div className="d-flex p-2">
                                    <img className='fbox-img' src="https://thulo.com/images/logos/163/e_rojireuyh.jpg" width="70px" alt="alternative text" />
                                    <div>
                                        <h6>Riaan Trading Company Pvt. Ltd.</h6>
                                        <p className='fb-text'>Riaan Trading Company is an authorized seller of Mamaearth skincare, haircare, and baby care products.</p>
                                    </div>
                                </div>
                                <div className="fbox-link d-flex justify-content-between px-2 py-2">
                                    <p className='fbl-text1 m-0'>687 Products</p>
                                    <p className='fbl-text2 m-0'>Visit Shop</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="mb-5 fp-box shadow">
                                <div className="d-flex p-2">
                                    <img className='fbox-img' src="https://thulo.com/images/logos/185/Untitled-2_cryv-rm.jpg" width="70px" alt="alternative text" />
                                    <div>
                                        <h6>Zamz</h6>
                                        <p className='fb-text'>Show your love in style this Valentine's Day with perfect Fashion Accessories like Wallets, Tote Bags, Travels Bags and many more from Zamz. Gift your partner Ultimate Symnol of your affection.</p>
                                    </div>
                                </div>
                                <div className="fbox-link d-flex justify-content-between px-2 py-2">
                                    <p className='fbl-text1 m-0'>31 Products</p>
                                    <p className='fbl-text2 m-0'>Visit Shop</p>
                                </div>
                            </div>
                            <div className=" fp-box shadow">
                                <div className="d-flex p-2">
                                    <img className='fbox-img' src="https://thulo.com/images/logos/164/krishnabakery.png" width="70px" alt="alternative text" />
                                    <div>
                                        <h6>Krishna Bakery & Confectionery</h6>
                                        <p className='fb-text'>Krishna Bakery provides you the varieties of the cakes and sweet treats for any occasion.</p>
                                    </div>
                                </div>
                                <div className="fbox-link d-flex justify-content-between px-2 py-2">
                                    <p className='fbl-text1 m-0'>43 Products</p>
                                    <p className='fbl-text2 m-0'>Visit Shop</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="mb-5 fp-box shadow">
                                <div className="d-flex p-2">
                                    <img className='fbox-img' src="https://thulo.com/images/logos/181/inaCenter.jpg" width="70px" alt="alternative text" />
                                    <div>
                                        <h6>INA Center</h6>
                                        <p className='fb-text'>Ina Center is an online store for the best spray and perfumes with a varietal of fruity and aromatic fragrances. The perfect gift for your partner.</p>
                                    </div>
                                </div>
                                <div className="fbox-link d-flex justify-content-between px-2 py-2">
                                    <p className='fbl-text1 m-0'>29 Products</p>
                                    <p className='fbl-text2 m-0'>Visit Shop</p>
                                </div>
                            </div>
                            <div className=" fp-box shadow">
                                <div className="d-flex p-2">
                                    <img className='fbox-img' src="https://thulo.com/images/logos/227/316671067_803884710701769_1588789167395760817_n.jpg" width="70px" alt="alternative text" />
                                    <div>
                                        <h6>Box of Happiness</h6>
                                        <p className='fb-text'>Perfect personalized gifts for your loved one. To make your moment special, Box of Happiness provides numbers of personalized hampers, chocolates photo frames and many more.</p>
                                    </div>
                                </div>
                                <div className="fbox-link d-flex justify-content-between px-2 py-2">
                                    <p className='fbl-text1 m-0'>30 Products</p>
                                    <p className='fbl-text2 m-0'>Visit Shop</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Featured
