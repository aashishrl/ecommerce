import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomeProducts(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${props.tt}`)
            .then((res) => res.json())
            .then((data) => setData(data.products));
    }, []);
    return (
        <>
            <section className='s3 pt-3 pb-5'>
                <div className="container">
                    <div className="p-title py-4 d-flex justify-content-between align-items-center">
                        <h2 className='text-uppercase'>{props.tt}</h2>
                        <div className="p-ll"></div>
                        <p className='fw-bold m-0'>View All</p>
                    </div>
                    <div className="row">
                        {data.slice(0, 4).map((ff) => (
                            <div className="col-md-3 col-sm-6">
                                <div className="product-grid2">
                                    <div className="product-image2">
                                        <img className="pic-1" src={ff.thumbnail} />
                                        <img className="pic-2" src={ff.thumbnail} />
                                        <ul className="social">
                                            <Link to={`/details/${ff.id}`} className='text-decoration-none'>
                                                <li><a href="#" data-tip="View Detail's"><i className="fa fa-eye" /></a></li>
                                            </Link>
                                            <li><a href="#" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag" /></a></li>
                                            <li><a href="#" data-tip="Add to Cart"><i className="fa fa-shopping-cart" /></a></li>
                                        </ul>
                                        <a className="add-to-cart" href="#">Add to cart</a>
                                    </div>
                                    <div className="product-content">
                                        <h3 className="title">{ff.title}</h3>
                                        <span className="price">${ff.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>           
        </>
    )
}
export default HomeProducts;