import Layout from '../layouts/default'
import React from "react";

const Login = () => {
   return (
      <Layout title="Sign in">
         <div className="content">
            <article className="login">
               <h3 className="title bold">
                  Sing In
               </h3>
               <div className="form">
                  {/*<ErrorAlert :error-message="errorMessage" />*/}
                  <input placeholder="Email address" type="text"/>
                  <br/>
                  <input className="form.password" placeholder="Password" type="password"/>
                  <br/>
                  <p className="button" style={{marginTop: '2rem', padding: '1rem 2rem 1rem'}}>
                     Sign In
                  </p>
                  <p style={{marginTop: '1rem'}}>
                     Don't have an account? <span className="accent" style={{textDecoration: 'none', cursor: 'pointer'}}>Sign up!</span>
                  </p>
               </div>
            </article>
         </div>
      </Layout>
   )
}

export default Login