import React from 'react'
import ProductCard from '../components/productcard/productcard'
import { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
const ProductCatalog = () => {
  const [productList, setProductList] = useState([]);
  const [count,setCount] = useState(0);
  fetch = async ()=>{
    const data = await axios.get('http://localhost:3001/productCatalogue/availableProducts');
    while(productList.length){
      productList.pop();
    }
    for(var i=0;i<data.data.length;i++){
        productList.push({Name:data.data[i].Name,id:data.data[i].ProductId._id,quantity:data.data[i].ProductId.Quantity,productdescription:data.data[i].instruction,category:data.data[i].category,rentcharges:data.data[i].rentCharges,
        finePerDay:data.data[i].fineCharges,thumbnail:data.data[i].thumbnail,maxDayLimit:data.data[i].maxDayLimit});
    }
    console.log(productList);
    setCount(1);
  }
  if(!count){
    fetch();
  }
    return (

        <div>
        <h1 className="nice">Product Catalog</h1>
        <br /><br />
        <div className='row'>
          {
            productList.length==0 && (<div className='badge' style={{color:'grey'}}><h6>Product Catalogue is empty, wait few hours for stock update</h6></div>)
          }
          {
              productList.map((ProductInfo)=>{
                return (<ProductCard productinfo={ProductInfo} />);
              })
          }
        </div>
        </div>

    )
}

export default ProductCatalog