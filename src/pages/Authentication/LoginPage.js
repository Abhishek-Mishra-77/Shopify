import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {


    const [isLogin, setIsLogin] = useState(true)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onAuthenticationHandler = async (e) => {
        e.preventDefault();


        let URL;
        if (isLogin) {
            URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDLjHbIGbxJvyLOJJep_8c_WkMgAeNIdAg'
        }
        else {
            URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDLjHbIGbxJvyLOJJep_8c_WkMgAeNIdAg'
        }

        try {
            const response = await fetch(URL, {
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (response.ok) {
                const data = await response.json();
                alert('Authentication succesfull completed!')
                const { idToken } = data
                localStorage.setItem('email', email)
                localStorage.setItem('token', idToken);
                navigate('/')
            }
            else {
                const data = await response.json();
                let errroMessage = 'Authentication Fails!';
                if (data && data.error && data.error.message) {
                    errroMessage = data.error.message
                }
                throw new Error(errroMessage)
            }
        }
        catch (error) {
            alert(error.message)
        }

    }


    const onLoginhandler = () => {
        setIsLogin((isLogin) => !isLogin)
    }


    const onLogoutHandler = () => {
        localStorage.removeItem('email')
        localStorage.removeItem('token')
        alert('Your are logout!')
    }



    return (
        <div className='auth-main'>
            <div className='auth'>
                <form className='login-form' onSubmit={onAuthenticationHandler}>
                    <h2>{isLogin ? 'Login' : 'Sign up'}</h2>
                    <div className='inputBox'>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type='text'
                            placeholder='Enter your username'
                            required />
                        <i></i>
                    </div>
                    <div className='inputBox'>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type='password'
                            placeholder='Enter your password'
                            required />
                        <i></i>
                    </div>
                    <div className='linkss'>
                        <Link to={'/forget'} href='#'>Forgot Password</Link>
                        <a onClick={onLoginhandler} href='#'>{!isLogin ? 'Login' : 'Signup'}</a>
                    </div>
                    <div>
                        {isLogin && <input type='button' onClick={onLogoutHandler} style={{ float: 'right', background: 'red' }} value="Logout" />}
                        <input type='submit' style={{ float: 'left' }} value={`${isLogin ? 'Login' : 'Sign up'}`} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage