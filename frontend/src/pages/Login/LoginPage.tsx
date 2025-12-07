import { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '../../assets/google.svg';


import './LoginPage.css'


function Login(){
    // Initialize Firebase authentication and navigation
    const auth = getAuth();
    const navigate = useNavigate();
    
    // State variables for managing authentication state, email, password, and error messages
    const [authing, setAuthing] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signInWithGoogle = async () => {}

    const signInWithEmail = async () => {}

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
                                onClick={signInWithEmail}
                                disabled={authing}>
                                Sign in
                            </button>


                            {/* Divider with 'OR' text */}
                            <div className="divider">OR</div>

                            {/* Button to log in with Google */}
                            <div className="login-page-icon-group">
                                <a href="#" className="login-page-icon-button" onClick={signInWithGoogle}>
                                    <img className="login-page-icon" src={GoogleIcon}/>
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