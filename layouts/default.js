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
            
            .title {
                user-select: none;
                font-size: 3rem;
                color: #000;
                text-align: center;
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
            
            .big {
                width: 15rem !important;
            }
            
            .form {
                text-align: center;
                color: #000;
            }
            
            .form input {
                border: 1px solid rgba(0, 0, 0, 0.2);
                border-radius: 2rem;
                background-color: #fff;
                display: inline-block;
                margin-top: 1rem;
                font-family: 'Manrope', sans-serif;
                font-size: 1.3rem;
                padding: 1rem 1rem 1rem;
                max-width: 60%;
                color: #000;
            }
            
            ::placeholder {
                color: rgba(0, 0, 0, 0.5);
            }
            
            .form input:focus {
                outline: none;
                /*border: 1px #F100E6 solid;*/
            }
            
            .form input:disabled {
                border: 1px solid rgba(0, 0, 0, 0.2);
                background-color: rgba(216, 216, 216, 0.623);
            }
            
            @media only screen and (min-width: 750px) {
                .logo .name {
                    margin-top: .4rem;
                }
                .content {
                    padding: 1rem 7rem 1rem !important;
                }
                .dashboard {
                    margin-left: 0.6rem !important;
                    margin-right: 0.6rem !important;
                }
                .dashboard .content {
                    padding: 1rem !important;
                }
                .activities+.deploy-panel {
                    display: block !important;
                }
                .deploy-panel {
                    border-left: 2px solid rgba(255, 255, 255, 0.9) !important;
                    margin-top: -2.5rem !important;
                    padding-top: 2rem;
                    padding-left: 1rem !important;
                    margin-right: 1rem !important;
                }
            }
            
            @media only screen and (min-width: 1000px) {
                .logo .name {
                    margin-top: 0rem;
                }
                .content {
                    padding: 1rem 15rem 1rem !important;
                }
                .dashboard {
                    margin-left: 2rem !important;
                    margin-right: 2rem !important;
                }
                .dashboard .content {
                    padding: 1rem !important;
                }
                .title {
                    font-size: 4rem !important;
                }
                nav {
                    font-size: 1.5rem !important;
                }
                .button .big {
                    max-width: 10rem !important;
                    font-size: 2rem !important;
                }
                .register .button, .login .button {
                    max-width: 15rem !important;
                    font-size: 1.5rem !important;
                }
                .app-selector {
                    grid-template-columns: auto auto auto !important;
                }
            }
            
            @media only screen and (min-width: 1300px) {
                .home {
                    margin-top: 5%;
                    /* float: left; */
                }
                .home>.title {
                    margin-left: auto;
                    margin-right: auto;
                    max-width: 30rem;
                }
                .app .app-logo {
                    width: 7rem !important;
                    height: 7rem !important;
                    font-size: 4rem !important;
                    line-height: 7rem !important;
                }
            }
            
            @media only screen and (min-width: 1900px) {
                .dashboard {
                    margin-left: 30rem !important;
                    margin-right: 30rem !important;
                }
            }
            
            @media only screen and (min-width: 2200px) {
                .dashboard {
                    margin-left: 40rem !important;
                    margin-right: 40rem !important;
                }
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