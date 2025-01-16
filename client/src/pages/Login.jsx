import React, { useContext, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const Login = () => {
  const [inputs, setInputs] = useState({
    email:"",
    password:"",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

const handleChange = (e) =>{
  setInputs((prev)=>({...prev, [e.target.name]: e.target.value}))
};

const handleSubmit = async (e) =>{
  e.preventDefault();
  console.log(inputs)
  try{
    await login(inputs)
    navigate("/")
  } catch(err){
    setError(err.response.data);
  }
};
  return (
    <div className='auth'>
        <h1>Se connecter</h1>
        <form action="">
            <input type="text" placeholder='email' name='email' onChange={handleChange} />
            <input type="password" placeholder='password' name='password'onChange={handleChange}/>
            <button onClick={handleSubmit} >Se connecter</button>
            {err && <p>{err}</p>}
            <span>Vous n'êtes pas inscrit? <Link to="/register">S'inscrire</Link> 
            </span>
        </form>
    </div>
  )
}

export default Login