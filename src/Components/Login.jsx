import React from 'react'
import Input from './Input'  
import Button from './Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {loggedIn} from '../utils/userSlice'

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
        e.preventDefault();

        axios.post("http://localhost:8000/user/sign-in", {
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        }, {withCredentials: true}).then(res => {
            if(res.status !== 200){
                document.getElementById("password").value= "";
            }
            else{
                dispatch(loggedIn(res.data.user));
                navigate("/shop");
            }
        })
    }

    return (
        <div className="bg-gray-200 flex justify-center items-center h-screen w-screen">
          <div className=" border-t-8 rounded-sm border-indigo-600 bg-white p-12 shadow-2xl w-96">
            <h1 className="font-bold text-center block text-2xl">Log In</h1>
            <form onSubmit={handleSubmit}>
            <Input type="email" id="email" name="email" label="Email Address" placeholder="me@example.com" autofocus={true}/>
            <Input type="password" id="password" name="password" label="Password" placeholder="••••••••••" />
            <Button value="Submit"/>
            </form>
          </div>
        </div>
      )
}

export default Login