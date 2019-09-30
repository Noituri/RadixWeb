import App from 'next/app'
import React from 'react'
import { fetchInitialStoreState, Store } from '../store'
import { Provider } from 'mobx-react'
import { ToastProvider } from 'react-toast-notifications'

const Toast = ({ appearance, children }) => {
   const bgColor = appearance === 'error' ? '#E3195F' : '#F4F8FE'
   const fontColor = appearance === 'error' ? '#fff' : '#000'

   return (
      <div style={{
         border: '1px solid ' + bgColor,
         borderRadius: '1rem',
         backgroundColor: bgColor,
         padding: '.5rem 1rem',
         margin: '.5rem',
         userSelect: 'none',
         color: fontColor
      }}>
         { children }
      </div>
   )
}

class RadixApp extends App {
   state = {
      store: new Store(),
   }

   static async getInitialProps(appContext) {
      const appProps = await App.getInitialProps(appContext)
      const initialStoreState = await fetchInitialStoreState()

      return {
         ...appProps,
         initialStoreState,
      }
   }

   render() {
      const { Component, pageProps } = this.props
      return (
         <Provider store={this.state.store}>
            <ToastProvider components={{ Toast: Toast }} placement="bottom-center">
               <Component {...pageProps} />
            </ToastProvider>
         </Provider>
      )
   }
}
export default RadixApp