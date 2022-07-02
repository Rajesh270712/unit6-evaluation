import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isAuth } from '../Redux/auth/action';

export const Login = () => {

    const {auth} = useSelector((state)=>(state))
    const dispatch= useDispatch()
    const navigate= useNavigate()
    const [user,setUser] = useState({
        email:"",
        password:""
    })
 

    const {email, password} = user;

    function handleChange(e){
        const {name, value} = e.target;

        setUser({...user, [name]:value})
    }

    function handleLogin(){
        fetch(`https://reqres.in/api/login`,{
            method:"POST",
            body: JSON.stringify(user),
            headers:{
                "Content-Type" :"Application/json"
            }
        })
        .then((res)=>res.json())
        .then(res=>res.token==undefined ? alert("Invalid Input") : dispatch(isAuth(true)) )
        .then(auth ? null : navigate("/homepage"))
    }

    // console.log(user);
  return (
    <div>
   
        <center><h1>Login Page</h1></center>
    <FormControl onSubmit={handleLogin} isRequired>
      <FormLabel >Email</FormLabel>
      <Input onChange={handleChange} name="email" value={email} placeholder="Email" />
      <FormLabel >Password</FormLabel>
      <Input onChange={handleChange} name="password" value={password} placeholder="Password" />
      <input onClick={handleLogin} type="submit" />
    </FormControl>
    </div>
  );
};

export default Login
