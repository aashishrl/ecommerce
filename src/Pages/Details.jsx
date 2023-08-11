import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
function Details() {
    let { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);
    return (
        <>
            <div className="container py-5">
                <div className="card">                   
                    <div className="wrapper row">
                        <div className="preview col-md-5">
                            <div className="preview-pic tab-content">
                                <div className="tab-pane active" id="pic-1"><img src={data.thumbnail} className='w-100' /></div>
                            </div>
                        </div>
                        <div className="details col-md-7 sm-p-3">
                            <h3 className="product-title">{data.title}</h3>
                            <div className="rating">
                                <div className="stars">
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star" />
                                    <span className="fa fa-star" />
                                </div>
                                <span className="review-no">41 reviews</span>
                            </div>
                            <p className="product-description">{data.description}</p>
                            <h4 className="price d-flex align-items-center">current price: <span>${data.price}</span> <span className='ms-3 dis-p'>{data.discountPercentage}% OFF</span></h4>
                            <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                            <h5 className="sizes">sizes:
                                <span className="size" data-toggle="tooltip" title="small">s</span>
                                <span className="size" data-toggle="tooltip" title="medium">m</span>
                                <span className="size" data-toggle="tooltip" title="large">l</span>
                                <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
                            </h5>
                            <div className="action">
                                <button className="add-to-cart btn btn-default" type="button">add to cart</button>
                                <button className="like btn btn-default" type="button"><span className="fa fa-heart" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
            </>
            )
}

            export default Details
