import axios from 'axios';
import React,{useState} from 'react'
const RemoveProduct = () => {
  
  const [state,setState] = useState(0);
  const [productid, setproductid] = useState(null);
  const [verifiedProduct,setVerifiedProduct] = useState([]);

 
  function prevent(event){ event.preventDefault(); }

  function HandleRemoveProduct(){
   
    console.log("Product Id => "+productid);

  }  
  const handleVerifyProduct = async ()=>{
    axios.defaults.withCredentials = true;
    const res = await axios.get(`http://localhost:3001/removeProduct/verify/${productid}`);
    if(verifiedProduct.length){
    verifiedProduct.pop();
    }
    if(res.data.product){
      verifiedProduct.push({product:res.data.product,description:res.data.description[0]});//{product:res.data[0].product,description:res.data[0].description[0]});
      setState(1);
    }
    else{
      setState(3);
    }
  } 
  const handleConfirmRemove = async ()=>{
    axios.defaults.withCredentials = true;
    const res = await axios.get(`http://localhost:3001/removeProduct/confirm/${productid}`);
    if(res.status==200){
      console.log(res);
      setState(2);
    }
      console.log(res);
  }
  const HandleReset = async ()=>{
      setState(0);
      setproductid(null);
  }
  const HandleRefresh = async ()=>{
      window.location.href = 'http://localhost:3000/';
  }

return (<div>
  {
    state==3 && (<div>
  <h6>Product not Found</h6>    
  <div className="form-button">
  <button id="submit" onClick={HandleReset} className="ibtn">Try Again</button>  
  </div></div>)
  }
    {
      state==2 && (<div className='col-5'>
      <div className='card'>
      <div className='card__header'>
         <h3>Product Removed</h3>
         <h6>Product Removed Successfully</h6>
      </div> 
      <div className='card-body'>
            <div className="form-button">
              <button id="submit" onClick={HandleReset} className="ibtn">Remove Another</button> &nbsp;
              <button id="submit" onClick={HandleRefresh} className="ibtn">Close</button>  
            </div>
      </div>
      </div>
      </div>)
    }
    {
      state==1 && (<div className='col-5'>
      <div className='card'>
      <div className='card__header'>
         <h3>Product Details</h3>
      </div> 
      <div className='card-body'>
        <p>Product ID: {verifiedProduct[0].product._id}</p>
        <p>Product Name: {verifiedProduct[0].description.Name}</p>
        <p>In Stock: {verifiedProduct[0].product.Quantity}</p>
        <p>Product Rent: {verifiedProduct[0].description.rentCharges} PKR</p>
      </div>
      <div className='card-footer'>
            <div className="form-button">
              <button id="submit" onClick={handleConfirmRemove} className="ibtn">Confirm</button>  
            </div>
      </div>
      </div>
      </div>)
    }
    {state==0 &&
      (<div className='col-4'>
      <div className='card'>
      
      <div className='card__header'>
         <h3>Remove Product</h3>
      </div> 


      <div className="form-items">

          <form onSubmit={prevent} >
            <input className="form-control" onChange={(e)=>setproductid(e.target.value)}  type="text" name="productid" placeholder="Product Id" required />
                         
            <br></br>
            <div className="form-button">
              <button id="submit" onClick={handleVerifyProduct} className="ibtn">Verify</button>  
            </div>
          </form>

        </div>

      </div>

      </div>)
  }
  </div>



);


}

export default RemoveProduct;