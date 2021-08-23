import React,{useState,useEffect} from 'react';
import axios from 'axios';

function Users (prop) {
	const [data,setData] = useState([]);
	const [value,setValue] = useState([]);

	let config = JSON.parse(localStorage.getItem('data'));

	useEffect(()=>{
		axios.get('/api/config')
		.then(function(res){
			console.log(res);
			setData(res.data);
			setValue(res.data.username);
		})
	},[])
	return (
		<div>
		{value.map(function(val){
			return (
				<li>{val}</li>
				)
		})}
		</div>
		)
}
export default Users;