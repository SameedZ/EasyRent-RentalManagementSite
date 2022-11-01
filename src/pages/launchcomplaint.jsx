import React from 'react';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';

import BookingReciept from '../components/bookingreciept/bookingreceipt';


const LaunchComplaint = () => {

  const [recieptid,setRecieptid]= useState(0);
  const [recieptverified, setRecieptverified] = useState(false);

  function prevent(e){
   
   e.preventDefault();
   if( recieptid > 0 ){
     setRecieptverified(true);
     console.log("bool value is"+recieptverified);
   }
    
  }
   
  function verifyReciept(){
      
    console.log(recieptid);
      
  }


  return (


     <div>

    <form  onSubmit={prevent} >

      <div className='col-4'>

      <div className="card">

        <div className="form-items">
          <h2>Launch a Complaint</h2>
          <p>Enter the Reciept Id details</p>

          <input className="form-control" onChange={(e)=>setRecieptid(e.target.value)}type="text" name="productname" placeholder="Reciept Id" required />
          <br></br>
          <div className="form-button">
            <button id="submit" onClick={(e)=>verifyReciept(e.target.value)} type="submit" className="ibtn"> Verify</button>
          </div>

        </div>


      </div>

      </div> 




    </form>

{
  recieptverified?
  
  <div  style={{"display":"flex"}}><BookingReciept/><ProceedComplaint/></div>
  
  :null
}

</div>

  );

}


const ProceedComplaint = () => {
 

  const [launchcomplaint,setLaunchcomplaint]= useState(false);  

  function renderAddComplaintDetails(){

  }

  function renderNormalView(){
  
    return (
      <div className='nice'>
      <div className="card">
      <h2> Checkout </h2>
      <p>Are you sure you want to continue ?</p>
      <button onClick={()=>setLaunchcomplaint(true)} > Launch  </button>
      </div>
      </div>
    );
  }


  return (

       <div >
        {
        launchcomplaint?<AddComplaintDetails/>:renderNormalView()
        }


       </div>


  );



}


const AddComplaintDetails = () => {

  return (


     <div className='col-14'> 
    <div className="card">

        <h2>Add Complaint Details</h2>
        <p>Enter the details</p>


        <input className="form-control" type="text" name="productname" placeholder="Subject" required />
        <input className="form-control" type="text" name="productname" placeholder="Complaint Text...." required />
        <br></br>
        <div className="form-button">
          <button id="submit" type="submit" className="ibtn">Add Complaint</button>
        </div>
        
    </div>

    </div>

  );


}



export default LaunchComplaint;