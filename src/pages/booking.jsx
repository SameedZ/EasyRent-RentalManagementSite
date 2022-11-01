import React, { useState } from "react";
import BookingImg from "../assets/images/Booking-01.png";
import BookingReciept from "../components/bookingreciept/bookingreceipt";
import VerifyCustomer from "./verifycustomer";
import Bookingchallan from "../components/bookingchallan/bookingchallan";


const BookingConfirmation = (props) => {

  const [bookingconfirmationstatus,setBookingconfirmationstatus] = useState(false);
  const [display,setDisplay] =useState(true);
  const [displaybookingchallan,setDisplaybookingchallan] = useState(false);

  function handleconfirmation (){
     setBookingconfirmationstatus(true);
     setDisplaybookingchallan(true);

     // send back confirmation to the Booking Form

  }

  function handlerejection (){
    setBookingconfirmationstatus(false);
  }


  return (

   <div>

   {
    display?   
    <div className="card">
      <h2>Confirm Booking</h2>

      <div  style={{"display":"flex"}}>
      <button id="submit" onClick={handleconfirmation }  type="submit" className="ibtn" >
        Yes
      </button>
      <button id="submit" onClick={()=> setBookingconfirmationstatus(false)}
      style={{"margin-left":"23px"}} type="submit" className="ibtn">
        No
      </button>          
      </div>
    </div>

    :null
 
   }

   {
     displaybookingchallan?
     <Bookingchallan/>:null
   }

   </div>
     

    
  

  );
};

const BookingForm = (props) => {
  const [formproductid, setFormproductid] = useState(0);
  const [formproductquantity, setFormproductquantity] = useState(0);
  const [formproductrentduration, setFormproductrentduration] = useState(0);

  function prevent(e) {
    e.preventDefault();
  }

  function BookingHandler() {
    console.log("Product Id => " + formproductid);
    console.log("Product Quantity => " + formproductquantity);
    console.log("Rent for Days => " + formproductrentduration);

    // 1: verify if product id exists
    // 2: verify its status is available and the quantity requested is available
    
    
    // if all booking steps are completed success we send back a true status to the Booking component
    // to display/render Booking Challan + Reciept
   props.verifyBookingStatus(true);

  }

  return (
    <div>
      <div className="row">
        <div className="card" style={{ "margin-left": "25px" }}>
          <div className="box">
            <img src={BookingImg} style={{ padding: "20px" }} />
          </div>
          <div className="card__header">
            <h3>Booking Process </h3>
            <p>Enter the product details to book it today!</p>
          </div>

          <form onSubmit={prevent} style={{ padding: "25px" }}>
            <input
              className="form-control"
              type="text"
              name="productid"
              onChange={(e) => setFormproductid(e.target.value)}
              placeholder="Product Id"
              required
            />
            <input
              className="form-control"
              type="text"
              name="productquantity"
              onChange={(e) => setFormproductquantity(e.target.value)}
              placeholder="Quantity"
              required
            />
            <input
              className="form-control"
              type="text"
              name="productdescription"
              onChange={(e) => setFormproductrentduration(e.target.value)}
              placeholder="Days"
              required
            />

            <br></br>
            <div className="form-button">
              <button
                id="submit"
                onClick={BookingHandler}
                type="submit"
                className="ibtn"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const Booking = () => {
  const [customerverified, setCustomerverified] = useState(false);
  const [bookingprocess,setBookingprocess] = useState(false);
  
  function resetallstates () {
    setCustomerverified(false);
    setBookingprocess(false);
  }
   
  function HandleCustomerVerification(data) {
    if (data == true) {
      setCustomerverified(true);
      console.log("Customer Verified Status => " + customerverified);
    } else {
      setCustomerverified(false);
      console.log("Customer Verified Status => " + customerverified);
    }
  }

  function HandleCustomerBooking (data) {
    
    if (data==true){
      setBookingprocess(true);
      console.log("Booking Form Status => " + bookingprocess);
    } else {
      setBookingprocess(false);
      console.log("Booking Form Status => " + bookingprocess);     
    }
     
  }

  return (
    <div className="row">

      { // Customer Verification at first
        customerverified? null :
        <VerifyCustomer verifyCustomerStatus={HandleCustomerVerification} />
      } 
      
      {
        // if customer is verified proceed to Booking form
        customerverified ? (
          <div className="row">
            
            <BookingForm verifyBookingStatus={HandleCustomerBooking} />{" "}
          </div>
        ) : null
      }

      {
        bookingprocess? <div className="row"> 
        <Bookingchallan/> <BookingReciept/> 
        <button id="submit" onClick={resetallstates} > Done </button> 
        </div>:null
      }
      



    </div>
  );
};

export default Booking;
