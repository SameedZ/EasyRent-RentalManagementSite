import React from 'react';

import { Link } from 'react-router-dom'


  
  const ProductCard = (props) => {
  
  
      return (
              <div className="col-sm-4 col-lg-4">
                <div className="product-item" style={{borderRadius:"10px"}}>
                  <ul className="product-icon-top">
                    <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                  </ul>
                  <a href="#" className="product-img">
                  <img className="lazy" src={"../assets/img/prod-1.png"} data-src="../assets/img/prod-1.png" /></a>
                  <br></br>
                  <div className="product-item-cover">
                    <div className="price-cover">
                      <div className="new-price badge">Rent per Day : {props.productinfo.rentcharges} PKR</div>
                      <div className="old-price badge">Stock : {props.productinfo.quantity} </div>
                    </div>
                    <h6 className="prod-title">
                    <a href="#">{props.productinfo.Name} <br />
                                                Category: {props.productinfo.category} 
                                                          
                    </a>
                    </h6>
                    
                  </div>
                  <div className="prod-info" style={{borderRadius:"10px"}}>
                    <ul className="prod-list">
                      <li>Product ID:  <span>{props.productinfo.id}</span></li>
                      <li>Max Day Limit: <span>{props.productinfo.maxDayLimit}</span></li>
                      <li>Fine per day: <span>{props.productinfo.finePerDay}</span></li>
                    </ul>
                  </div>
                </div>
              </div>
      
        
      );
  
  }
  


  export default ProductCard;