import React from 'react'
import './bookingreceipt.css';

const BookingReciept = () => {

  
  return (

    <div className='row'> 
   <div className='col-2'>
   <div className='nice'>
        <div id="invoice-POS">
   <center id="top">
    <div className="logo" />
    <div className="info"> 
      <h2>EasyRent Booking Reciept</h2>
    </div>{/*End Info*/}
  </center>{/*End InvoiceTop*/}
  <div id="mid">
    <div className="info">
      <h2>Contact Info</h2>
      <p> 
        Name    : Sameed Zahoor < br />
        Address : street city, state 0000<br />
        Email   : JohnDoe@gmail.com <br />
        Phone   : 555-555-5555 <br />
      </p>
    </div>
  </div>{/*End Invoice Mid*/}
  <div id="bot">
    <div id="table">
      <table>
        <tbody><tr className="tabletitle">
            <td className="item"><h2>Item</h2></td>
            <td className="Hours"><h2>Qty</h2></td>
            <td className="Rate"><h2>Sub Total</h2></td>
          </tr>
          <tr className="service">
            <td className="tableitem"><p className="itemtext">Communication</p></td>
            <td className="tableitem"><p className="itemtext">5</p></td>
            <td className="tableitem"><p className="itemtext">$375.00</p></td>
          </tr>
          <tr className="service">
            <td className="tableitem"><p className="itemtext">Asset Gathering</p></td>
            <td className="tableitem"><p className="itemtext">3</p></td>
            <td className="tableitem"><p className="itemtext">$225.00</p></td>
          </tr>

          <tr className="tabletitle">
            <td />
            <td className="Rate"><h2>tax</h2></td>
            <td className="payment"><h2>$419.25</h2></td>
          </tr>
          <tr className="tabletitle">
            <td />
            <td className="Rate"><h2>Total</h2></td>
            <td className="payment"><h2>$3,644.25</h2></td>
          </tr>
        </tbody></table>
    </div>{/*End Table*/}
    <div id="legalcopy">
      <p className="legal"><strong>Thank you for your business!</strong>&nbsp; <br/>
      Payment is expected within 31 days; please process this invoice within that time. There will be a 5% interest charge per month on late invoices. 
      </p>
    </div>
  </div>{/*End InvoiceBot*/}
        </div>{/*End Invoice*/}

   </div>

   </div>
  </div>

  );



}


export default BookingReciept;