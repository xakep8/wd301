import React, { useEffect, useState } from 'react';
import { API_ENDPOINT } from '../../config/constants';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const [userName,setName]=useState('');
    const [userEmail,setEmail]=useState('');
    const navigate=useNavigate();

    async function getUserData(id:String) {
        const response=await fetch(`${API_ENDPOINT}/users/${id}`,{
            headers:{
                'Content-Type': 'application/json',
                Authorization:`Bearer ${localStorage.getItem('authToken')}`,
            }
        });
        const data=await response.json();
        setName(data.name);
        setEmail(data.email);
    }

    useEffect(()=>{
        const id=localStorage.getItem('id');
        if(id){
            getUserData(id).then(()=>{console.log('Data retrived')});
        }
    },[])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>
        <p>Name: {userName}</p>
        <p>Email: {userEmail}</p>
        <button id='logout-link' onClick={()=>{navigate('/logout')}}>Logout</button>
        </div>
    );
}

export default Dashboard;