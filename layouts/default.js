import React from 'react'
import PropTypes from 'prop-types'
import Navigation from '../components/navigation'

const Default = ({ title, children }) => {
   return (
      <>
         <style global jsx>{`
            @charset "UTF-8";
            @font-face {
                font-family: "Manrope";
                src: url("/static/fonts/manrope-extrabold.woff2") format("woff2"), url("/static/fonts/manrope-extrabold.woff") format("woff"), url("/static/fonts/manrope-extrabold.otf") format("truetype");
                font-style: normal;
                font-weight: 800;
            }
            
            @font-face {
                font-family: "Manrope";
                src: url("/static/fonts/manrope-bold.woff2") format("woff2"), url("/static/fonts/manrope-bold.woff") format("woff"), url("/static/fonts/manrope-bold.otf") format("truetype");
                font-style: normal;
                font-weight: 700;
            }
            
            @font-face {
                font-family: "Manrope";
                src: url("/static/fonts/manrope-semibold.woff2") format("woff2"), url("/static/fonts/manrope-semibold.woff") format("woff"), url("/static/fonts/manrope-semibold.otf") format("truetype");
                font-style: normal;
                font-weight: 600;
            }
            
            @font-face {
                font-family: "Manrope";
                src: url("/static/fonts/manrope-medium.woff2") format("woff2"), url("/static/fonts/manrope-medium.woff") format("woff"), url("/static/fonts/manrope-medium.otf") format("truetype");
                font-style: normal;
                font-weight: 500;
            }
            
            @font-face {
                font-family: "Manrope";
                src: url("/static/fonts/manrope-regular.woff2") format("woff2"), url("/static/fonts/manrope-regular.woff") format("woff"), url("/static/fonts/manrope-regular.otf") format("truetype");
                font-style: normal;
                font-weight: 400;
            }
            
            @font-face {
                font-family: "Manrope";
                src: url("/static/fonts/manrope-light.woff2") format("woff2"), url("/static/fonts/manrope-light.woff") format("woff"), url("/static/fonts/manrope-light.otf") format("truetype");
                font-style: normal;
                font-weight: 300;
            }
            
            @font-face {
                font-family: "Manrope";
                src: url("/static/fonts/manrope-thin.woff2") format("woff2"), url("/static/fonts/manrope-thin.woff") format("woff"), url("/static/fonts/manrope-thin.otf") format("truetype");
                font-style: normal;
                font-weight: 200;
            }
            
            * {
                font-family: 'Manrope', sans-serif;
                margin: 0;
                padding: 0;
            }

            .content {
                margin-top: 5rem;
            }
            
            .accent {
                color: #EC0B43;
                font-weight: 600;
            }
            
            .bold {
                font-weight: 600;
            }
            
            .button {
                display: inline-block;
                font-weight: 600;
                background-color: #EC0B43;
                border-radius: 10rem;
                color: #fff;
                padding: 1rem 1rem 1rem;
                max-width: 7rem;
                font-size: 1rem;
                text-decoration: none;
                transition: background-color ease-out 0.2s;
            }
            
            .button.longer {
                width: 4rem;
                height: 0.2rem;
                line-height: .2rem;
                text-align: center;
            }
            
            .button:hover {
                cursor: pointer;
                /* color: #000; */
                background-color: rgb(255, 2, 44);
            }
         `}</style>

         <title>Radix - {title}</title>
         <Navigation/>
         <main>{children}</main>
      </>
   )
}

Default.propTypes = {
   title: PropTypes.string
}

export default Default