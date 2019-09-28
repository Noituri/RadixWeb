import React from "react"
import Link from 'next/link'
import Layout from '../layouts/default'

const Register = () => {
   return (
      <Layout title="Register">
         <div className="content">
            <title>Theta Radix • Sign up</title>
            <article className="register">
               <h3 className="title bold">
                  Sing Up
               </h3>
               <div className="form">
                  {/* <ErrorAlert :error-message="errorMessage" />*/}
                  <input placeholder="Username" type="text"/>
                  <br/>
                  <input placeholder="Email address" type="email"/>
                  <br/>
                  <input placeholder="Password" type="password"/>
                  <br/>
                  <input placeholder="Confirm password" type="password"/>
                  <br/>
                  <input id="terms" type="checkbox"/>
                  <label for="terms">Do you agree with terms of use</label>
                  <br/>
                  <p className="button big" style={{marginTop: '2rem'}}>
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

export default Register