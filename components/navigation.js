import React from 'react'
import { inject, observer } from 'mobx-react'
import Link from 'next/link'

@inject('store')
@observer
class Navigation extends React.Component {
   render() {
      return (
         <>
            <style jsx>{`
            nav {
                padding: .5rem 1rem 1rem 1rem;
                margin-bottom: 1rem;
                color: #57575A;
                /* background-color: #E63946; */
                height: 2rem;
            }
            
            nav .logo {
                cursor: pointer;
                display: flex;
                float: left;
            }
            
            .logo img {
                margin-right: .5rem;
                height: 2rem;
            }
            
            .logo .name {
                font-size: 1.2rem;
                font-weight: 600;
                color: #EC0B43;
                margin-top: .2rem;
            }
            
            nav .item {
                cursor: pointer;
                font-size: 1rem;
                max-width: 5rem;
                text-decoration: none;
                float: right;
            }

            .accent.item:hover {
                color: rgb(255, 2, 44);
            }
         `}</style>
            <header>
               {/*
         <transition name="fade">
            <UserProfile v-if="showProfile" @close-modal="showProfile=false" />
         </transition>
         */}
               <nav role="navigation">
                  <Link href="/">
                     <div className="logo" style={{textDecoration: 'none'}}>
                        <img src="../static/images/applogo.png"/>
                        <p className="name">Radix</p>
                     </div>
                  </Link>

                  { this.props.store.user === null ? (
                     <>
                        <Link href="/login">
                           <p className="button longer item">
                              Sign In
                           </p>
                        </Link>

                        <p className="accent item" style={{ marginRight: '1rem', marginTop: '.3rem' }}>
                           Pricing
                        </p>
                     </>
                  ) : (
                     <div className="item dropdown" style={{marginRight: '1rem'}}>
                        <p className="button longer">
                           {this.props.store.user.name}
                        </p>
                        <div className="space"/>
                        <div className="dropdown-content">
                           <p className="dropdown-item">
                              Profile
                           </p>
                           <p className="dropdown-item">
                              Apps
                           </p>
                           <p className="dropdown-item">
                              Logout
                           </p>
                        </div>
                     </div>
                  )

                  }
               </nav>
            </header>
         </>
      )
   }
}

export default Navigation