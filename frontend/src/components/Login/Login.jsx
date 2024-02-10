import axios from 'axios';
import {useState} from 'react';
import SignupImg from '../..assets/login.png';
import backgroundImg from '../../assets/SignUpWp.png';
import styles from './styles.css'

import React from 'react'

export const Login = () => {
  return (
    <div className={styles.login_container} style={{backgroundImg: 'url(${background})'}}>
        <div className={styles.login_left_form_container}>
            <div className={styles.login_left}>
                <form className={styles.login_form_container} onSubmit={handleSubmit}>
                    <h1>Log in to your Account</h1>
                    <input type='email' placeholder='Email' name='email' onChange={handleChange} value={data.email} required className={styles.input}/>
                    <div className={styles.passwordContainer}>
                        <input type= {showPassword ? 'text':'password'}
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login;


