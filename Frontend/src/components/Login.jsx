import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = ({tokenState , settokenState}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/signin', { email, password });
            setMessage(response.data.message);
            const userInfo = {name : response.data.name , email : response.data.email} ;
            localStorage.setItem('user', JSON.stringify(userInfo));
            localStorage.setItem('token', response.data.accessToken);
            const token = localStorage.getItem('token') ;
            settokenState(token) ;
            navigate('/');
        } catch (err) {
            console.log(err);
            setMessage(err.response.data.message);
        }
    };

    return (
        <center><div class="card card1" style={{width: "22rem"}}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label  for="exampleInputEmail1" class="form-label cardEle">
                    Email:
                    <input
                        class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                <label for="exampleInputPassword1" class="form-label cardEle">
                    Password:
                    <input
                        type="password"
                        class="form-control" id="exampleInputPassword1" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit" class="btn btn-primary cardEle">Submit</button>
            </form>
            <Link to="/forgot-password">
                <button class="btn btn-primary cardEle">Forgot Password</button>
            </Link>
            
            {message && <p>{message}</p>}

    </div>
   </center>
    );
};

export default Login;

