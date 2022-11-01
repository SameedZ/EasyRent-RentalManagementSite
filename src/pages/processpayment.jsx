import React, { useState } from "react";
import ImgProcessPayment from "../assets/images/img_processpayment.png";
import axios from 'axios';

var Challan = {
  ChallanID:null,
  total:null,
  duedate:null,
  Type:null,
  Status:null
};
export default function ProcessPayment() {
  const [verifychallan, setVerifychallan] = useState(false);
  const [paymentstatus, setPaymentstatus] = useState(false);

  function initiatePayment(data) {
      setVerifychallan(true);
  }

  function GeneratePaymentReceipt(data) {
      // 
      setPaymentstatus(data);
  } 

  return (
    <div>
      {verifychallan ? (
        <div>
          <Payment VerifyPaymentStatus={GeneratePaymentReceipt}/>
        </div>
      ) : (
        <VerifyChallan VerfiyChallanStatus={initiatePayment} />
      )}
    </div>
  );
}

const VerifyChallan = (props) => {
  const [searchedchallanid, setSearchedchallanid] = useState(null);
  function prevent(e) {
    e.preventDefault();
  }

  var SearchedChallanId = async ()=> {
    axios.defaults.withCredentials = true;
    var response = await axios.post('http://localhost:3001/makePayment/verify',{id:searchedchallanid});
    console.log(response);
    Challan.ChallanID = response.data._id;
    Challan.total = response.data.total;
    Challan.duedate = response.data.DueDate;
    Challan.Type = response.data.Type;
    Challan.Status = response.data.Status;
    if (searchedchallanid <= 0) {

    } else {
      props.VerfiyChallanStatus({status:true,response:response});
    }
  }

  return (
    <div>
      <div>
        <div className="col-4">
          <div className="card">
            <div className="card__header">
              <h4>Verify Challan</h4>
            </div>

            <form
              onSubmit={prevent}
              style={{ display: "flex", padding: "25px" }}
            >
              <input
                className="form-control"
                type="text"
                name="productname"
                onChange={(e) => setSearchedchallanid(e.target.value)}
                placeholder="Challan Id...."
                required
              />
              <button
                id="submit"
                onClick={SearchedChallanId}
                type="submit"
                className="ibtn"
              >
                Verify
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const Payment = (props) => {
  const [amountpaid, setAmountpaid] = useState(0);
  const [paymentStatus,setPaymentstatus] = useState('NULL');
  const [receiptStatus,setReceiptStatus] = useState(false);
  const [receipt,setReceipt] = useState({
    receiptID:'',
    paymentID:'',
    total:'',
    date:'',
    paid:'',
    return:''
  });
  function prevent(e) {
    e.preventDefault();
  }
  var initiate = async ()=>{
    axios.defaults.withCredentials=true;
    var response = await axios.post('http://localhost:3001/makePayment/initiate');
    if(response.status==200){
      setPaymentstatus('INITIATE')
    }
  }
  var confirm = async ()=>{
    axios.defaults.withCredentials=true;
    var response = await axios.post('http://localhost:3001/makePayment/confirm');
    if(response.status==200){
      setPaymentstatus('PAID');
    }
  }
  var setPayment = async ()=>{
      axios.defaults.withCredentials=true;
      var response = await axios.post('http://localhost:3001/makePayment/set',{amount:amountpaid});
      if(response.status==200){
        setPaymentstatus('SET');
      }
  }
  var GeneratePaymentReceipt = async () =>{
    var response = await axios.post('http://localhost:3001/makePayment/generateReceipt');
      setReceipt({receiptID:response.data.__receiptID,PaymentID:response.data.PaymentID,total:response.data.Total,paid:response.data.Paid,
      date:response.data.Date,return:response.data.Return});
      setReceiptStatus(true);
      console.log(receipt);
  }

  return (
    <div>{
      paymentStatus!='PAID' && (
      <div className="row">
        <div className="card" style={{ "margin-left": "25px" }}>
          <center>
            <div className="box">
              <img src={ImgProcessPayment} style={{ padding: "20px" }} />
            </div>
            <div className="card__header">
              <h3>Payment Process </h3>
              <p>Collect Payment from the Customer</p>
            </div>
          </center>

          <form onSubmit={prevent} style={{ padding: "25px" }}>
            <div id="bot">
              <div id="table">
                <table>
                  <tbody>
                    <tr className="">
                      <td className="item">
                        <h4>Id</h4>
                      </td>
                      <td className="Hours">
                        <h4>Type</h4>
                      </td>
                      <td className="Rate">
                        <h4>Due Date</h4>
                      </td>
                    </tr>

                    <tr className="service">
                      <td className="tableitem">
                        <p className="itemtext">{Challan.ChallanID}</p>
                      </td>
                      <td className="tableitem">
                        <p className="itemtext">{Challan.Type}</p>
                      </td>
                      <td className="tableitem">
                        <p className="itemtext">{Challan.duedate}</p>
                      </td>
                    </tr>

                    <tr className="">
                      <td />
                      <td className="Rate">
                        <h2>Total</h2>
                      </td>
                      <td className="payment">
                        <h2>{Challan.total}</h2>
                      </td>
                    </tr>
                    {
                      Challan.Status=='PAID' && (<tr className="">
                        <td />
                        <td className="Rate">
                          <h2>PAID</h2>
                        </td>
                      </tr>)
                    }

                    {Challan.Status!='PAID' && paymentStatus=='INITIATE' && (<tr className="">
                      <td />
                      <td className="Rate">
                        <h4>Total Paid</h4>
                      </td>
                      <td className="payment">
                        <input
                          className="form-control"
                          
                          type="text"
                          name="productid"
                          style={{ "background": "white" }}
                          onChange={(e)=>setAmountpaid(e.target.value)} 
                          placeholder="$$$$$$"
                          required
                        />
                      </td>
                    </tr>)}
                  </tbody>
                </table>
              </div>
              {/*End Table*/}
            </div>

            <br></br>

            {
              Challan.Status!='PAID' && paymentStatus=='NULL' && (<div className="form-button">
              <button
                id="submit"
                onClick={initiate}
                type="submit"
                className="ibtn"
              >
                Initiate
              </button>
              </div>)
            }
            {
              Challan.Status!='PAID' && paymentStatus=='INITIATE' && (<div className="form-button">
              <button
                id="submit"
                onClick={setPayment}
                type="submit"
                className="ibtn"
              >
                Set Payment
              </button>
              </div>)
            }
            {
              Challan.Status!='PAID' && paymentStatus=='SET' && (<div className="form-button">
              <button
                id="submit"
                onClick={confirm}
                type="submit"
                className="ibtn"
              >
                Confirm
              </button>
              </div>)
            }
          </form>
        </div>
      </div>)
    } 
    {
      Challan.Status!='PAID' && paymentStatus=='PAID' && !receiptStatus && (<div>
          <h1>Paid</h1>
          <div className="form-button">
          <button
            id="submit"
            onClick={GeneratePaymentReceipt}
            type="submit"
            className="ibtn"
          >
            Generate Receipt
          </button>
          </div>
          </div>)
      
    }
    {
        receiptStatus && (<div className="row">
        <div className="card" style={{ "margin-left": "25px" }}>
          <center>
            <div className="card__header">
              <h3>Payment Receipt </h3>
              <h6>Receipt#:{receipt.receiptID}</h6>
              <h6>Issue Date:   {receipt.date}</h6>
              <br />
            </div>
            <br/>
            <br />
            <div id="table">
            <table>
              <tbody>
                <tr className="">
                  <td className="item">
                    <h6>Payment#</h6>
                  </td>
                  <td className="Hours">
                    <h6>Total</h6>
                  </td>
                  <td className="Rate">
                    <h6>Paid</h6>
                  </td>
                  <td className="Rate">
                    <h6>Return</h6>
                  </td>
                </tr>

                <tr className="service">
                  <td className="tableitem">
                    <p className="itemtext">{receipt.PaymentID}</p>
                  </td>
                  <td className="tableitem">
                    <p className="itemtext">{receipt.total} PKR</p>
                  </td>
                  <td className="tableitem">
                    <p className="itemtext">{receipt.paid} PKR</p>
                  </td>
                  <td className="tableitem">
                    <p className="itemtext">{receipt.return} PKR</p>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </center>
        </div>
      </div>)
    }
    </div>
  );
};
