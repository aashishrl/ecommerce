import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'

function Category() {
    let { cid } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${cid}`)
            .then((res) => res.json())
            .then((data) => setData(data.products));
    }, []);
    return (
        <>           
            <div className="container py-5">
                <div className="row row-gap-5">
                {data.map((ff) => (
                    <div className="col-md-3 col-sm-6">
                        <div className="product-grid8">
                            <div className="product-image8">
                                <img className="pic-1" src={ff.thumbnail} />
                                <ul className="social">
                                    <li><a href className="fa fa-shopping-bag" /></li>
                                    <li><a href className="fa fa-shopping-cart" /></li>
                                </ul>
                                <span className="product-discount-label">{ff.discountPercentage}%</span>
                            </div>
                            <div className="product-content">
                                <div className="d-flex justify-content-between">
                                    <div className="price">$ {ff.price}</div>
                                    <span className="product-shipping">Free Shipping</span>
                                </div>
                                <h3 className="title fw-bold">{ff.title}</h3>
                                <Link  to={`/details/${ff.id}`}  className="all-deals" href="#">See Details <i className="fa fa-angle-right icon" /></Link>
                            </div>
                        </div>
                    </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Category
