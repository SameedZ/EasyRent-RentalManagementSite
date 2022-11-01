import React from 'react'
import Button from '@material-ui/core/Button'
import { TextField } from '@material-ui/core'


const UpdateProcess = () => {


    return (
 
      <div className='col-4'>
      <div className='card'>
      
      <div className='card__header'>
         <h3>Update Product</h3>
         <p>Enter the product details</p>
      </div> 

      <div className="form-items">
      
      
    
      <form style={{"padding":"25px"}}>
      <TextField required id="outlined-required" label="Required"
       defaultValue="Product Id"
        />       
      </form>
    
      
    
      <form style={{"display":"flex","padding":"25px"}} >
        <input className="form-control" type="text" name="productname" placeholder="Product Name" required />
        <div className="form-button">
          <button id="submit" type="submit" className="ibtn">Update</button>    
      </div>
      </form>
       
      <form style={{"display":"flex","padding":"25px"}}>
        <input className="form-control" type="text" name="productname" placeholder="Product Description" required />
        <div className="form-button">
          <button id="submit" type="submit" className="ibtn">Update</button>    
      </div>
        
      </form>  
    
      <form style={{"display":"flex","padding":"25px"}}>
      
        <input className="form-control" type="text" name="productquantity" placeholder="Quantity" required />
        <div className="form-button">
          <button id="submit" type="submit" className="ibtn">Update</button>    
      </div>
        
      </form> 
    
      <form style={{"display":"flex","padding":"25px"}}>
        <input className="form-control" type="text" name="productquantity" placeholder="Rent Per Day" required />
        <div className="form-button">
          <button id="submit" type="submit" className="ibtn">Update</button>    
      </div>
        
      </form> 
    
     
    
      </div>
    
  
      </div>
      </div>
      
      );   
}

const UpdateProduct = () => {



  return (

    <div className="row">

     <UpdateProcess/>     
     
    </div>
 
  );



}







export default UpdateProduct;