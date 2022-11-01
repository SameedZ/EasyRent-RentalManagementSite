import React,{useState} from 'react';
import ProfileImg from '../../src/assets/images/profile.png';
import BasicSelect from '../components/basicselect/basicselect';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';


const VerifyCustomer = (props) => {

  const [customerverified,setCustomerverified] = useState(false);

  // Customer non biological information
  const [customercnic,setCustomercnic] = useState('null');
  const [customernationality,setCustomernationality]= useState('null');
  const [customercity,setCustomercity]= useState('null');
  const [customerstreet,setCustomerstreet] = useState('null');
  const [customerpostalcode,setCustomerpostalcode]= useState('null');
  
  // Customer Biological Information
  const [customername,setCustomername]=useState('null');
  // Customer Date of Birth
  const [customerdob, setCustomerdob] = useState(new Date());
  const [customerphone,setCustomerphone]= useState('null');
  

  function prevent (event){
      event.preventDefault();

  }

  function Form_getNationality (data) {
    
    setCustomernationality(data);

  }
 
  function consoleallformvalues (){
     console.log(customercnic);
     console.log(customernationality);
     console.log(customercity);
     console.log(customerstreet);
     console.log(customerpostalcode);
     console.log(customername);
     console.log(customerdob);
     console.log(customerphone);
  }

  function checkallfieldsarefilled(){
    
  }

  function HandleVerifyCustomer(event){
     
    
   
    // Upon Customer Verfiication .. send confirmation to the calling class Booking to proceed further
   
    //  2 cases can arise here.
    // 1st: Customer gets verified
    // 2nd: Customer is black listed
    // apply if else conditions accordingly
    consoleallformvalues();
    props.verifyCustomerStatus(true);
    
    
  }



 return (
  
     <div className='col-4'>
        <div className="card">
          <div className="box">
            <img src={ProfileImg}  style={{ "padding": "20px","height":"150px"}} />
          </div>
          <div className="card__header">
            <h3>Customer Verification </h3>
            <h4 style={{"font-family":"Poppins"}}>Enter the Customer details</h4>
          </div>

          <form onSubmit={prevent} style={{ padding: "25px" }}>
            <input
              className="form-control"
              type="text"
              name="productid"
              onChange={(e)=>setCustomercnic(e.target.value)} 
              placeholder="CNIC [****-*******-*]"
              required
            />

             <BasicSelect data_basicselect={Form_getNationality} />

            <input
              className="form-control"
              type="text"
              name="productcity"
              onChange={(e)=>setCustomercity(e.target.value)} 
              placeholder="City"
              required
            />

            <input
              className="form-control"
              type="text"
              name="productcity"
              onChange={ (e)=>setCustomerstreet(e.target.value) }
              placeholder="Street"
              required
            />

            <input
              className="form-control"
              type="text"
              name="productcity"
              onChange={(e)=>setCustomerpostalcode(e.target.value)} 
              placeholder="Postal Code"
              required
            />            
            
            {/* Biological information*/}
            
            <h4>Biological Information</h4>
            <input
              className="form-control"
              type="text"
              name="c_fullname"
              onChange={(e)=>setCustomername(e.target.value)} 
              placeholder="Full Name"
              required
            />
            
            <p>Date of Birth</p>
            <DatePicker selected={customerdob} onChange={(date) => setCustomerdob(date)}  />

            <input
              className="form-control"
              type="text"
              name="productcity"
              onChange={ (e)=>setCustomerphone(e.target.value) }
              placeholder="Phone Number"
              required
            />              


            <br></br>
            <div className="form-button">
              <button id="submit" onClick={HandleVerifyCustomer} type="submit" className="ibtn">
                Verify
              </button>
            </div>
          </form>
        </div>
        
     </div>


 );


}


export default  VerifyCustomer;