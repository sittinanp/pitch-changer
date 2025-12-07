import { useState } from 'react';

import './LoginPage.css'
import { useAppDispatch } from "@app/hooks";
import { useNavigate } from 'react-router-dom';

import {login} from "@features/auth/api";


function Login(){
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [authing, setAuthing] = useState(false);
    const [error, setError] = useState('');

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

     async function handleLogin() {
        console.log(login({username : "sittinanp",password :"211025"}))
    }
    return (
        <div className='login-page'>
            <div className='login-page-container'>
                <div className='login-page-form'>
                    <div className='login-page-form-content'>
                        <div>
                            <h3>Pitch Changer</h3>
                            <p>Welcome Back! Please enter your details.</p>
                        </div>


                        <div className='login-page-form-input'>
                            <input
                                type='email'
                                placeholder='Email'
                                value={email}
                                className='login-page-input'
                                onChange={(e) => setEmail(e.target.value)} />
                            <input
                                type='password'
                                placeholder='Password'
                                value={password}
                                className='login-page-input'
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        

                        <div className='login-page-form-button'>
                             <button
                                className='login-page-button'
                                disabled={authing}
                                onClick={handleLogin}
                            >
                                Sign in
                            </button>
                            {/* Divider with 'OR' text */}
                            <div className="divider">OR</div>

                            {/* Button to log in with Google */}
                            <div className="login-page-icon-group">
                                <a href="#" className="login-page-icon-button">
                                    <img className="login-page-icon" src=""/>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <h1>Jello</h1>
                </div>
            </div>
        </div>
    );
}

export default Login;