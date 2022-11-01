import React from 'react'
import './bookingchallan.css';



export default function Bookingchallan(props) {
    return (
        <div>
   <div className='col-2'>
   <div className='nice'>
        <div id="invoice-POS">
   <center id="top">
    <div className="logo" />
    <div className="info"> 
      <h2>EasyRent Booking Challan</h2>
    </div>{/*End Info*/}
  </center>{/*End InvoiceTop*/}
  <div id="mid">
    <div className="info">
      <h2>Contact Info</h2>
      <p> 
        Name    : {props.name} < br />
        Address : {props.street}<br />
        Phone   : {props.phone} <br />
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
            <td className="tableitem"><p className="itemtext">{props.productid}</p></td>
            <td className="tableitem"><p className="itemtext">{props.quantity}</p></td>
            <td className="tableitem"><p className="itemtext">{}</p></td>
          </tr>

          <tr className="tabletitle">
            <td />
            <td className="Rate"><h2>Total</h2></td>
            <td className="payment"><h2>{props.total}</h2></td>
          </tr>
        </tbody></table>
    </div>{/*End Table*/}
    <div id="legalcopy">
      <p className="legal"><strong>Thank you for your business!</strong>&nbsp; <br/>
      Payment is expected within 1 days; please process this booking invoice within that time. 
      </p>
    </div>
  </div>{/*End InvoiceBot*/}
        </div>{/*End Invoice*/}

   </div>

   </div>
        </div>
    )
}
