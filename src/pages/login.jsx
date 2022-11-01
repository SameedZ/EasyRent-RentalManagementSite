import React,{useState} from 'react'
import Logo from '../assets/images/logo-02.png';
import '../assets/css/login.css';
import axios from 'axios';
axios.defaults.withCredentials = true;
 const Login = ()=> {
  
    const [username,setUsername]= useState(null);
    const [password,setPassword]= useState(null);

   function prevent(event){
    event.defaultPrevent();
   }

   const ValidateLogin = async ()=>{
            var user = await axios.post('http://localhost:3001/login',{username:username,password:password});
            if(user.status && user.data.session){
                console.log(user);
                    localStorage.setItem('LoginStatus',true);
                    localStorage.setItem('User',user.data.session.FullName);
                    localStorage.setItem('Access',user.data.session.Job_Title);
                    window.location.href = 'http://localhost:3000/';
            }
            else{
                console.log(user);
            }
   }
   const ValidateLogout = async ()=>{
            
            var response = await axios.post('http://localhost:3001/logout');
                if(response.status==200)
                {
                        console.log(response);
                       // localStorage.removeItem('LoginStatus');
                       // localStorage.removeItem('User');
                       // localStorage.removeItem('Access');
                }
                else{
                    console.log(response);
                }
   }
    return (
        <div className='parent_div'>
        <div className='child_div'>
        <div className='col-4' >
        <div className='card'>

         <form onSubmit={prevent}>
                <center>
                <div className='box'>
                    <img src={Logo} style={{"height":"200px"}}/>
                </div>
                <h3>Sign In</h3>
                </center> 

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" onChange={(e)=>setUsername(e.target.value) }  className="form-control" placeholder="example@123" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="button" onClick={ValidateLogin} className="btn btn-primary btn-block">Submit</button>
         </form>
              
        </div> 

        </div>
        </div>
        </div>
        
    )
}

export default Login;