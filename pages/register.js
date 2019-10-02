import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'
import Layout from '../layouts/default'
import ErrorAlert from '../components/ErrorAlert'
import { REGISTER_ENDPOINT } from '../constants'
import { withToastManager } from 'react-toast-notifications';
import { onEnterPress } from '../utils'

const Register = ({toastManager}) => {
   const [creds, setCreds] = useState({
      username: '',
      email: '',
      pass: '',
      cpass: '',
      terms: false,
      errorMessage: ''
   })
   const router = useRouter()

   const register = () => {
      const config = {
         headers: {
           Authorization: 'Basic ' + btoa(`${creds.username}:${creds.email}:${creds.pass}:${creds.cpass}:${creds.terms}`)
         }
       }

       axios.post(REGISTER_ENDPOINT, {}, config)
         .then((response) => {
            router.push('/')
            toastManager.add("Please verify your email", {
               appearance: 'success',
               autoDismiss: true
            })
         })
         .catch((error) => {
            const resp = error.response
            if (resp !== undefined) {
               const message = resp.data.message === undefined ? 'Something went wrong. Try again later.' : resp.data.message
               setCreds({
                  ...creds,
                  errorMessage: message
               })

               return
            }
            
            setCreds({
               ...creds,
               errorMessage: 'Something went wrong. Try again later.'
            })
         })
   }

   onEnterPress(register)

   const handleInputChange = (e) => {
      const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
      setCreds({
         ...creds,
         [e.target.name]: value
      })
   }

   

   return (
      <Layout title="Register">
         <div className="content">
            <title>Theta Radix • Sign up</title>
            <article className="register">
               <h3 className="title bold">
                  Sing Up
               </h3>
               <div className="form">
                  <ErrorAlert errorMessage={creds.errorMessage} />
                  <input name="username" placeholder="Username" type="text" onChange={handleInputChange} />
                  <br/>
                  <input name="email" placeholder="Email address" type="email" onChange={handleInputChange} />
                  <br/>
                  <input name="pass" placeholder="Password" type="password" onChange={handleInputChange} onChange={handleInputChange}/>
                  <br/>
                  <input name="cpass" placeholder="Confirm password" type="password" onChange={handleInputChange} />
                  <br/>
                  <input name="terms" id="terms" type="checkbox" onChange={handleInputChange} />
                  <label htmlFor="terms">Do you agree with terms of use</label>
                  <br/>
                  <p className="button big" style={{marginTop: '2rem'}} onClick={register}>
                     Create Account
                  </p>
                  <Link href="/login">
                     <p style={{marginTop: '1rem'}}>
                        Already have an account? <span className="accent" style={{textDecoration: 'none', cursor: 'pointer'}}>Sign in!</span>
                     </p>
                  </Link>
               </div>
            </article>
         </div>
      </Layout>
   )
}

export default withToastManager(Register)