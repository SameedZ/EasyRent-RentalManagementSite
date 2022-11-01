import React from "react";
import { useState } from "react";
import BookingReciept from "../components/bookingreciept/bookingreceipt";
import { Link } from "react-router-dom";


function getCurrentDate(){

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;
    return today;

}


const Return = () => {


  const [rentid,setRentid] = useState(null);
  const [searchedrentidfound,setSearchedrentidfound] = useState(false);
  const [returndate,setReturndate]= useState(null);

  function prevent(event){
   event.preventDefault();

  }



  function searchRentId(){

    
    console.log("rent id => " + rentid);
    // calculating return date
    setReturndate(getCurrentDate());



    // example validations here...
    if (rentid > 0 ){
          setSearchedrentidfound(true);
    } else {
        setSearchedrentidfound(false);
    }


    // axios post goes here.

  }
   
  
  

  return (
    <div>
      <h2 className="page-header">Returns</h2>

      <div className="col-4">
        <div className="card">
          <div className="card__header">
            <h4>Returns</h4>
          </div>
          
            <form onSubmit={prevent} style={{ display: "flex","padding":"25px" }}>
              <input
                className="form-control"
                type="text"
                onChange={(e)=>setRentid(e.target.value)}
                name="productname"
                placeholder="Rent Id...."
                required
              />
              <button id="submit" onClick={searchRentId} type="submit" className="ibtn">
                Search
              </button>
             
            </form>


    


        </div>
      </div>
      
      {
        searchedrentidfound? <div style={{"display":"flex"}}> 
        <BookingReciept /> <ReturnDate rd={returndate}/>  </div>:null
      }


    </div>
  );
};


function getCustomerFine () {

    return 1;

}



const ReturnDate = (props) => {

 const [returndate,setReturndate]= useState(props.rd);
 const [displayfine,setDisplayfine] = useState(false);
 
 function CalculateFine (){

  // getting the user fine based on the return date

  if (getCustomerFine() > 0){
    setDisplayfine(true);
  } else {
    setDisplayfine(false);
  }

   
     

 }

 return (

  <div className="col-4" style={{"margin-left":"10px"}} >
  <div className="card">
  <div className="card__header">
        <h3>EASYRENT RET INC</h3>
        <p>Current date is being display</p>
      </div>
        <input
                className="form-control"
                type="text"
                onChange={(e)=>setReturndate(e.target.value)}
                name="productname"
                placeholder={returndate}
                required
              />    
       <button onClick={CalculateFine}> Confirm </button>     
  </div>
   { displayfine?<CustomerFine fineamount={getCustomerFine()}/>:null} 

  </div>
  
 );

}


const CustomerFine = (props) => {
  
  const [finevalue,setFinevalue] = useState(props.fineamount);

  return (
  
    <div className="card">
        <h1>Total Fine Outstanding</h1>
        <p>----------------------</p>
        <p>Total = {finevalue}</p>
       
        <Link to='/'> <button> Pay Now </button> </Link>   
    </div>

  );


}

export default Return;
