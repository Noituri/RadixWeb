import React from 'react'
import Link from 'next/link'
import axios from 'axios'
import Layout from '../layouts/default'
import ErrorAlert from '../components/ErrorAlert'
import { withRouter } from 'next/router'
import { LOGIN_ENDPOINT } from '../constants'

class Login extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         email: '',
         pass: '',
         errorMessage: ''
      }

      this.handleInputChange = this.handleInputChange.bind(this)
      this.signIn = this.signIn.bind(this)
   }

   signIn(e) {
      e.preventDefault()

      const config = {
         headers: {
            Authorization: 'Basic ' + btoa(`${this.state.email}:${this.state.pass}`)
         }
      }

      axios.post(LOGIN_ENDPOINT, {}, config)
         .then((_resp) => {
            this.props.router.push('/user/apps')
         })
         .catch((error) => {
            const resp = error.response
            if (resp !== undefined) {
               this.setState({
                  errorMessage: resp.data.message
               })
               return
            }

            this.setState({
               errorMessage: 'Something went wrong. Try again later.'
            })
         })
   }

   handleInputChange(e) {
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   render() {
      return (
         <Layout title="Sign in">
            <div className="content">
               <article className="login">
                  <h3 className="title bold">
                     Sing In
                  </h3>
                  <div className="form">
                     <ErrorAlert errorMessage={this.state.errorMessage} />
                     <input name="email" placeholder="Email address" type="text" value={this.state.email} onChange={this.handleInputChange} />
                     <br/>
                     <input name="pass" className="form.password" placeholder="Password" type="password" value={this.state.pass} onChange={this.handleInputChange} />
                     <br/>
                     <p className="button" style={{marginTop: '2rem', padding: '1rem 2rem 1rem'}} onClick={this.signIn}>
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
}

export default withRouter(Login)