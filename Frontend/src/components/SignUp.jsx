import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/signup', {email, password ,name : username});
            setMessage(response.data.message);
            navigate('/signin');
        } catch (err) {
            setMessage(err.response.data.message);
        }
    };

    return (
       <center><div class="card card1" style={{width: "22rem"}}>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label for="exampleInputEmail1" class="form-label cardEle">
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        class="form-control" id="exampleInputEmail1"
                    />
                </label>
                <label for="exampleInputEmail1" class="form-label cardEle">
                    Email:
                    <input
                        type="email"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        class="form-control" id="exampleInputEmail1" 
                    />
                </label>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                <label for="exampleInputPassword1" class="form-label cardEle">
                    Password:
                    <input
                        type="password"
                        value={password}
                        class="form-control" id="exampleInputPassword1" 
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button class="btn btn-primary cardEle signUp" type="submit">Sign Up</button>
            </form>
            {message && <p>{message}</p>}
        </div>
        </center>
    );
};

export default SignUp;
