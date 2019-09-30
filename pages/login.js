import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import Layout from '../layouts/default'
import ErrorAlert from '../components/ErrorAlert'
import { useRouter } from 'next/router'
import { LOGIN_ENDPOINT } from '../constants'
import { onEnterPress } from '../utils'

const Login = () => {
   const [creds, setCreds] = useState({
      email: '',
      pass: '',
      errorMessage: ''
   })
   const router = useRouter()

   const signIn = () => {
      const config = {
         headers: {
            Authorization: 'Basic ' + btoa(`${creds.email}:${creds.pass}`)
         }
      }

      axios.post(LOGIN_ENDPOINT, {}, config)
         .then(() => {
            router.push('/user/apps')
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

   onEnterPress(signIn)

   const handleInputChange = (e) => {
      setCreds({
         ...creds,
         [e.target.name]: e.target.value
      })
   }

   return (
      <Layout title="Sign in">
         <div className="content">
            <article className="login">
               <h3 className="title bold">
                  Sing In
               </h3>
               <div className="form">
                  <ErrorAlert errorMessage={creds.errorMessage} />
                  <input name="email" placeholder="Email address" type="text" value={creds.email} onChange={handleInputChange} />
                  <br/>
                  <input name="pass" className="form.password" placeholder="Password" type="password" value={creds.pass} onChange={handleInputChange} />
                  <br/>
                  <p className="button" style={{marginTop: '2rem', padding: '1rem 2rem 1rem'}} onClick={signIn}>
                     Sign In
                  </p>
                  <Link href="/register">
                     <p style={{marginTop: '1rem'}}>
                        Don't have an account? <span className="accent" style={{textDecoration: 'none', cursor: 'pointer'}}>Sign up!</span>
                     </p>
                  </Link>
               </div>
            </article>
         </div>
      </Layout>
   )
}

export default Login