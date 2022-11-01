import React from 'react'
import '../bookingchallan/bookingchallan.css';


export default function PaymentReceipt() {
    return (
        <div>
     <div className='row'> 
   <div className='col-2'>
   <div className='nice'>
        <div id="invoice-POS">
   <center id="top">
    <div className="logo" />
    <div className="info"> 
      <h2>EasyRent Payment Reciept</h2>
    </div>{/*End Info*/}
  </center>{/*End InvoiceTop*/}
  <div id="mid">
    <div className="info">
      <h2>Receipt Info</h2>
      <p> 
        Receipt Id : 1 < br />
        Date       : 24/12/2021 <br />
        Payment Id : 1 <br />
      </p>
    </div>
  </div>{/*End Invoice Mid*/}
  <div id="bot">
    <div id="table">
      <table>
        <tbody>
          <tr className="tabletitle">
            <td />
            <td className="Rate"><h2>Paid Amount</h2></td>
            <td className="payment"><h2>$419.25</h2></td>
          </tr>
          <tr className="tabletitle">
            <td />
            <td className="Rate"><h2>Total Amount</h2></td>
            <td className="payment"><h2>$3,644.25</h2></td>
          </tr>
          <tr className="tabletitle">
            <td />
            <td className="Rate"><h2>Remaining Balance</h2></td>
            <td className="payment"><h2>$3,644.25</h2></td>
          </tr>          
        </tbody></table>
    </div>{/*End Table*/}
    <div id="legalcopy">
      <p className="legal"><strong>Thank you for your business!</strong>&nbsp; <br/>
      
      </p>
    </div>
  </div>{/*End InvoiceBot*/}
        </div>{/*End Invoice*/}

   </div>

   </div>
  </div>           
        </div>
    )
}
