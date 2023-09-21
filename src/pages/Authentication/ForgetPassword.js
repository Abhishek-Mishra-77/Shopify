import React, { useState } from 'react';
import './ForgetPassword.css'
import { Link } from 'react-router-dom';

const ForgetPassword = () => {


    const [email, setEmail] = useState('')
    const [name, setName] = useState('');


    const onPasswordChangeHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDLjHbIGbxJvyLOJJep_8c_WkMgAeNIdAg', {
                method: 'POST',
                headers: {
                    'Content-Type': 'applications/json'
                },
                body: JSON.stringify({
                    requestType: 'PASSWORD_RESET',
                    email: email
                })
            })
            if (response.ok) {
                // const data = await response.json();
                alert('Please kindly check your email!')
            }
            else {
                const data = await response.json();
                let erroMessage = 'Authentication fails!';
                if (data && data.error && data.error.message) {
                    erroMessage = data.error.message;
                }
                throw new Error(erroMessage);
            }

        }
        catch (error) {
            alert(error.message)
        }

    }


    return (
        <div className='auth-main'>
            <div className='auth'>
                <form className='login-form' onSubmit={onPasswordChangeHandler} >
                    <h2>Change password</h2>
                    <div className='inputBox'>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type='text'
                            placeholder='Enter you name'
                            required />
                        <i></i>
                    </div>
                    <div className='inputBox'>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type='email'
                            placeholder='Enter email '
                            required />
                        <i></i>
                    </div>
                    <div className='mb-10'>
                        <input type='submit' style={{ float: 'left' }} value='Submit' />
                        <Link to={'/auth'}>
                            <input type='button' style={{ float: 'right', backgroundColor: 'orange' }} value='Back' />
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgetPassword;