import React from 'react'
import PropTypes from 'prop-types'
import Default from "../layouts/default";

const ErrorAlert = ({ errorMessage }) => {
   return (
      <div className="alert">
         <style jsx>{`
            .alert .error {
                display: inline-block;
                background-color: #EC0B43;
                color: #fff;
                border-radius: 2rem;
                padding: 0.5rem 1rem 0.5rem;
                max-width: 25rem;
                opacity: 0;
                transition: opacity .5s;
            }
         `}</style>

         <div className="error" style={{opacity: errorMessage === '' ? 0 : 1}}>
            <p>{errorMessage}</p>
         </div>
      </div>
   )
}

ErrorAlert.propTypes = {
   errorMessage: PropTypes.string
}

export default ErrorAlert