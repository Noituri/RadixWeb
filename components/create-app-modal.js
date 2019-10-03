import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ErrorAlert from './error-alert'

const CreateAppModal = ({ onClose }) => {
   const [errorMessage, setErrorMessage] = useState('')

   return (
      <div id="createAppModal" className="modal">
         <div className="modal-content">
            <div className="title-bar">
               <p id="closeModalBtn" style={{ float: 'right', cursor: 'pointer' }} onClick={ onClose }>
                  Close
               </p>
               <br />
               <h4 style={{ fontSize: '3rem' }}>
                  App creator
               </h4>
            </div>
            <ErrorAlert errorMessage={errorMessage} />
            <div className="form" style={{ marginTop: errorMessage === '' ? '-2rem' : '0'}}>
               <input style={{ fontSize: '1rem', width: '80%', marginBottom: '1rem' }} type="text" placeholder="App name" />
               <br />
               <label htmlFor="appSelect" style={{ marginRight: '0.5rem', color: '#000' }}>My app uses:</label>
               <select id="appSelect">
                  <option value={0}>
                     Discord.js
                  </option>
                  <option value={1}>
                     Discord.py
                  </option>
               </select>
               <br />
               <p className="button" style={{ marginTop: '1rem' }}>
                  Create app
               </p>
            </div>
         </div>
      </div>
   )
}

CreateAppModal.propTypes = {
   onClose: PropTypes.func
}


export default CreateAppModal