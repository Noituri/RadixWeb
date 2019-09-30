import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import Layout from '../layouts/default'
import ErrorAlert from '../components/ErrorAlert'
import { withRouter } from 'next/router'
import { useRouter } from 'next/router'
import { LOGIN_ENDPOINT } from '../constants'

const Login = () => {
   const [creds, setCreds] = useState({
      email: '',
      pass: '',
      errorMessage: ''
   })
   const router = useRouter()

   const signIn = (e) => {
      e.preventDefault()

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
               setCreds({
                  ...creds,
                  errorMessage: resp.data.message
               })

               return
            }

            setCreds({
               ...creds,
               errorMessage: 'Something went wrong. Try again later.'
            })
         })
   }

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

export default withRouter(Login)