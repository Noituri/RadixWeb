import React from 'react'
import Layout from '../../../layouts/default'
import {useRouter} from 'next/router'

const Dashboard = () => {
   const router = useRouter()
   const {id} = router.query

   return (
      <Layout title="Dashboard (APPNAME)">
         <style global jsx>{`
            .selected {
              opacity: 1;
            }
            .not-selected {
              opacity: 0.5;
            }
            .dashboard .content {
                color: #fff;
                margin-top: 3rem;
                margin-left: 1rem;
                margin-right: 1rem;
            }
            .top-panel {
              border-radius: 1rem;
              text-align: center;
              padding-bottom: .5rem;
              margin-bottom: 1rem;
              color: #000;
              background-color: #F4F8FE;
            }
            .actions-panel {
              background-color: #F4F8FE;
              color: #000;
              margin-bottom: 1rem;
              padding-bottom: .5rem;
              border-radius: 1rem;
              text-align: center;
            }
            .actions-panel h3 {
              text-align: left;
              margin-left: 1rem;
            }
            .usage-panel {
              margin-bottom: 1rem;
              display: grid;
              grid-template-columns: auto auto;
              grid-gap: 1rem;
            }
            .usage-panel h3 {
              text-align: left;
              margin-left: 1rem;
            }
            .usage-panel .cpu {
              background-color: #F4F8FE;
              color: #000;
              border-radius: 1rem;
              text-align: center;
              padding-bottom: 8rem;
            }
            .usage-panel .ram {
              background-color: #F4F8FE;
              color: #000;
              border-radius: 1rem;
              text-align: center;
              padding-bottom: .5rem;
            }
            .activities-panel h3 {
              text-align: left;
              margin-left: 1rem;
            }
            .actions {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              grid-gap: 1rem;
              justify-content: center;
              margin: .5rem;
            }
            .top-panel .bot-name {
              font-size: 1.5rem;
            }
            .settings {
                float: right;
                cursor: pointer;
                margin-right: 1rem;
                color: #000;
            }
            .switch-slider {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                cursor: pointer;
                transition: 0.5s;
            }
            .switch-slider:before {
                border: 1px solid #000;
                border-radius: 1rem;
                position: absolute;
                height: 2rem;
                width: 2rem;
                content: "";
                bottom: -0.04rem;
                left: 0rem;
                background-color: none;
                transition: 0.5s;
            }
            input:checked + .switch-slider:before {
                transform: translateX(2rem);
                background-color: #EC0B43;
            }
            .switch {
                border: 1px solid #000;
                border-radius: 1rem;
                position: relative;
                display: inline-block;
                margin-top: 1rem;
                height: 2rem;
                width: 4rem;
            }
            .switch input {
                height: 0;
                width: 0;
                opacity: 0;
            }
            .activities-panel {
                background-color: #F4F8FE;
                color: #000;
                border-radius: 1rem;
                padding-bottom: 1rem;
                margin-bottom: 1rem;
            }
            .menu h4 {
                cursor: pointer;
            }
            .activities .activity {
                margin: 1rem;
                border: 2px solid rgba(0, 0, 0, .1);
                border-radius: 1rem;
                padding: 1rem;
            }
            .activity .date {
                font-weight: 300;
                float: right;
            }
            .deploy-panel {
                margin-top: 1rem;
            }
            .deploy-options {
                margin-top: 0.5rem;
                display: grid;
                grid-template-columns: auto auto;
                grid-gap: 1rem;
            }
            .deploy-options div {
                border: 2px solid #fff;
                border-radius: 1rem;
                padding: 1rem;
                opacity: 0.5;
                transition: 0.2s;
                cursor: pointer;
            }
            .deploy-options div:hover {
                opacity: 0.7;
            }
            .uploadOption input {
                font-size: 1rem;
            }
            @media only screen and (min-width: 1000px) {
                .dashboard .content {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-template-rows: 15rem 20rem;
                    column-gap: 1rem;
                }
            
                .top-panel {
                    grid-row-start: 1;
                    grid-column-start: 2;
                }
            
                .actions-panel {
                    grid-row-start: 2;
                    grid-column-start: 2;  
                }
            
                .usage-panel {
                    grid-template-columns: auto;
                    grid-template-rows: 1fr 1fr;
                    grid-row-start: 1;
                    grid-row-end: 3;
                    grid-column-start: 1;  
                }
                
                .activities-panel {
                    overflow-y: auto;
                    grid-row-start: 1;
                    grid-row-end: 3;
                    grid-column-start: 3;  
                }
            }
         `}</style>
         <div className="dashboard">
            <div className="content">
               {/* <BotSettings v-if="modals.settings" /> */}
               <div className="top-panel">
                  <h4 className="bot-name">
                     Name
                  </h4>
                  <h3>Start your app</h3>

                  <label className="switch">
                     <input type="checkbox" disabled/>
                     <span className="switch-slider"/>
                  </label>

                  <p style={{marginTop: '1rem'}}>
                     Status: online
                  </p>
                  <p className="settings">
                     Settings
                  </p>
                  <br/>
               </div>

               <div className="actions-panel">
                  <h3>Actions</h3>

                  <div className="actions">
                     <div className="button">
                        <p>Deploy</p>
                     </div>
                     <div className="button">
                        <p>Servers</p>
                     </div>
                     <div className="button">
                        <p>DBL</p>
                     </div>
                  </div>
               </div>

               <div className="usage-panel">
                  <div className="cpu">
                     <h3>CPU usage</h3>
                  </div>
                  <div className="ram">
                     <h3>Memory usage</h3>
                  </div>
               </div>

               <div className="activities-panel">
                  <h3>Activities</h3>
                  {/*<Activities :data="app.activities" />*/}
               </div>
            </div>
         </div>
      </Layout>
   )
}

export default Dashboard