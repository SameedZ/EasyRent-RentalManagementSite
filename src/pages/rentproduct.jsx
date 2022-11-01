import React,{useState} from "react";
import Bookingchallan from "../components/bookingchallan/bookingchallan";
import PaymentReceipt from "../components/paymentreceipt/paymentreceipt";

export default function Rentproduct() {

  const [verifybookingstatus,setVerifybookingstatus] = useState (false);
  const [verifypaymentstatus,setVerifypaymentstatus] = useState(false);

  function setBookingStatus (data ) {
      if (data==true){
          setVerifybookingstatus(true);
      } else {
          setVerifybookingstatus(false);
      }
  }

  return (
    <div>
      <h2 className="page-header">Rent Product</h2>
      
      {
          verifybookingstatus?<VerifyPayment /> : <Verifybooking VerifyBookingStatus={setBookingStatus} /> 
      }
      
      
    </div>
  );
}

const Verifybooking = (props) => {
 
  const [searchedbookingid,setSearchedbookingid] = useState (null);
  const [displaybookingchallan,setDisplaybookingchallan] = useState (false);   

  function prevent(e) {
    e.preventDefault();
  }

  function SearchedBookingChallan () {
    
    console.log("searhed booking id => " + searchedbookingid);
    if(searchedbookingid <= 0 ){
       setDisplaybookingchallan(false);
       props.VerifyBookingStatus(false);     
       alert("Booking Id not Found");
    } else {
       setDisplaybookingchallan(true);
       
    }
    

  }

  function setBookingStatus () {
    props.VerifyBookingStatus(true);     
  }


  return (
    <div>
      <div>
        

        <div className="col-4">
          <div className="card">
            <div className="card__header">
              <h4>Verify Booking</h4>
            </div>

            <form
              onSubmit={prevent}
              style={{ display: "flex", padding: "25px" }}
            >
              <input
                className="form-control"
                type="text"
                name="productname"
                onChange={(e)=>setSearchedbookingid(e.target.value)}
                placeholder="Booking Id...."
                required
              />
              <button id="submit" onClick={SearchedBookingChallan}  type="submit" className="ibtn">
                Verify
              </button>
            </form>
          </div>
        
        
        {
            displaybookingchallan? <div className="row"> 
            <Bookingchallan /> 
            <button id="submit" onClick={setBookingStatus}  style={{"margin-top":"10px","margin-left":"15px","background":"#5bb1ff"}}  type="submit" className="ibtn">
                Continue
              </button>          
             </div>: null
        }
        </div>
         
      </div>
    </div>
  );
};

const VerifyPayment = () => {

    const [searchedreceiptid,setSearchedreceiptid] = useState (null);
    const [displaypaymentreceipt,setDisplaypaymentreceipt] = useState (false);   
  
    function prevent(e) {
      e.preventDefault();
    }
  
    function SearchedReceiptId () {
      
      console.log("searhed receipt id => " + searchedreceiptid);
      if(searchedreceiptid <= 0 ){
        setDisplaypaymentreceipt(false);
        // props.VerifyBookingStatus(false);     
         alert("Payment not Found");
      } else {
        setDisplaypaymentreceipt(true);
         
      }
      
  
    }    
   
    function prevent(e) {
        e.preventDefault();
      }

    return (
 
        <div>

         <div className="col-4">
          <div className="card">
            <div className="card__header">
              <h4>Verify Payment</h4>
            </div>

            <form
              onSubmit={prevent}
              style={{ display: "flex", padding: "25px" }}
            >
              <input
                className="form-control"
                type="text"
                name="productname"
                onChange={(e)=>setSearchedreceiptid(e.target.value)} 
                placeholder="Reciept Id...."
                required
              />
              <button id="submit" onClick={SearchedReceiptId}   type="submit" className="ibtn">
                Verify
              </button>
            </form>


          </div>

          {
            displaypaymentreceipt? <div className="row"> 
            <PaymentReceipt /> {/* Pass props to payment receipt*/} 
            <button id="submit"  style={{"margin-top":"10px","margin-left":"15px","background":"#5bb1ff"}}  type="submit" className="ibtn">
                Generate Rent Reciept
              </button>          
             </div>: null
        }

        </div>       
        
        </div>     

    );
 
     
}

