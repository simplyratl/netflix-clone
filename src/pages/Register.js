import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import '../style/dist/min/register.min.css';

const Register = () => {
    return (
        <div className='register-container'>
            <a href='/'>
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
                    alt=''
                    className='logo'
                />
            </a>

            <div className='register-wrapper'>
                <h2 className='sign-in-header'>Sign in</h2>

                <form>
                    <input type='text' placeholder='Email or phone number' />
                    <input type='password' placeholder='Password' />
                    <button type='submit'>Sign in</button>
                </form>

                <div className='bottom-bar'>
                    <div className='remember-me'>
                        <input type='checkbox' />
                        <span>Remember me</span>
                    </div>

                    <a href='#'>Need help?</a>
                </div>

                <div className='login-with-fb'>
                    <a href='#'>
                        <AiFillFacebook className='icon' />
                        <span>Login with Facebook</span>
                    </a>
                </div>

                <div className='new-to-netflix'>
                    <span>New to netflix?</span>
                    <a href='#'>Sign up now</a>
                </div>
            </div>
        </div>
    );
};

export default Register;
