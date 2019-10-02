import React from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

const AppsList = ({ data }) => {
   const router = useRouter()

   const newAppBtn = []
   for (let i = 0; i < 6 - data.length; i++) {
      newAppBtn.push(
         <div key={i} className="app">
            <div className="app-logo">
               <h3>+</h3>
            </div>
            <p>New App</p>
         </div>
      )
   }

   return (
      <>
         <style global jsx>{`
            .app-selector {
               display: grid;
               grid-template-columns: auto auto;
               align-items: center;
               justify-content: center;
               grid-gap: 1rem;
            }
            .app-selector .app {
               user-select: none;
               cursor: pointer;
               text-align: center;
            }
            .app h3 {
               vertical-align: middle;
            }
            .app p {
               display: inline-block;
               margin-top: 0.5rem;
               text-align: center;
               color: #000;
               width: 5rem;
               overflow: hidden;
               text-overflow: ellipsis;
               white-space: nowrap;
            }
            .app-logo {
               /*background-image: linear-gradient(45deg, #A319E3, #E3195F);*/
               /*background-size: 200% 100%;*/
               background-color: #fff;
               border: 2px solid #000;
               border-radius: 1rem;
               width: 5rem;
               height: 5rem;
               line-height: 5rem;
               padding: 0.5rem;
               color: #000;
               font-size: 3rem;
               text-align: center;
               transition: all .4s ease-in-out;
            }
            .app-logo:hover {
               color: #fff;
               border-color: #E63946;
               background-color: #E63946;
               transition: all .4s ease-in-out;
            }

            @media only screen and (min-width: 1300px) {
               .app .app-logo {
                   width: 7rem;
                   height: 7rem;
                   font-size: 4rem;
                   line-height: 7rem;
               }
           }
         `}</style>
         <div className="app-selector">
            {data.map((item, index) => (
               <div key={index} className="app">
                  <div className="app-logo">
                     <h3>{item.name.charAt(0).toUpperCase()}</h3>
                  </div>
                  <p>{item.name}</p>
               </div>
            ))}

            {newAppBtn}
         </div>
      </>
   )
}

AppsList.propTypes = {
   data: PropTypes.array
}

export default AppsList