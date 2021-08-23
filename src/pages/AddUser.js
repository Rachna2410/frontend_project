import React, {useState,useEffect} from 'react';
import '../App.css';

function AddUser () {
	const [data,setData] = useState([]);
	const [mobile,setMobile] = useState();
	const [isError, setIsError] = useState(false);

	const submitUser =(e)=>{
		e.preventDefault();
		let username = document.getElementById('username').value;
		let email = document.getElementById('email').value;
		let phone = document.getElementById('phone').value;
		let dob = document.getElementById('dob').value;
		let state = document.getElementById('state').value;

		let dataObj = {
			username:username,
			email:email,
			phone:phone,
			dob:dob,
			state:state
		};

		localStorage.setItem('data',JSON.stringify(dataObj));
	}

	 useEffect(()=>{
	 	if (localStorage.getItem("data")){
	 		setData(JSON.parse(localStorage.getItem("data")))
	 	}
	 },[]);
	 
	return(
		<div className="container">
		<center><form onSubmit={submitUser}>
		
		<lable className="lable">Username</lable>  
		
		<input className="input" type="text" id="username" placeholder="User Name"  name="username"/><br/>
		
		<lable>Email</lable>
		
		  <input className="input" type="email" id="email" placeholder="Email" name="email" /><br/>
		
		<lable>Phone</lable>
		
		  <input className="input" type="number" id="phone" placeholder="Phone Number" name="phone" 
		   error={isError}
        value={mobile}
        label="Enter Phone Number"
        onChange={(e) => {
          setMobile(e.target.value);
          if (e.target.value.length > 10) {
            setIsError(true);
          }
      }}/><br/>
		
		<lable>DOB</lable>
		
		  <input className="input" type="date" id="dob" placeholder="Date of birth" name="dob" /><br/>
		
		<lable>State</lable>
		
		  <select className="input" name="state" id="state">
		<option value = "Select State">Select</option>
		<option value = "Rajasthan">Rajasthan</option>
		<option value = "karnataka">Karnataka</option>
		<option value = "Madhyapradesh">Madhyapradesh</option>
		<option value = "Maharashtra">Maharashtra</option>
		</select><br/>
		<button className="submitbtn">Add User </button>

		</form></center>
		</div>
		)
};
export default AddUser;