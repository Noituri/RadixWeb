import React from 'react'
import Link from 'next/link'

export default () => {
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
               <Link href="/login">
                  <p className="button longer item">
                     Sign In
                  </p>
               </Link>

               <p className="accent item" style={{ marginRight: '1rem', marginTop: '.3rem' }}>
                  Pricing
               </p>

               {/*
               <div v-else class="item dropdown" style="margin-right: 1rem">
                  <p class="button longer" to="/user/apps">
                     Username
                  </p>
                  <div class="space"/>
                  <div class="dropdown-content">
                     <p class="dropdown-item">
                        Profile
                     </p>
                     <nuxt-link class="dropdown-item" to="/user/apps">
                        Apps
                     </nuxt-link>
                     <p class="dropdown-item">
                        Logout
                     </p>
                  </div>
               </div>
               */}
            </nav>
         </header>
      </>
   )
}