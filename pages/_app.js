import App from 'next/app'
import React from 'react'
import { fetchInitialStoreState, Store } from '../store'
import { Provider } from 'mobx-react'

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
            <Component {...pageProps} />
         </Provider>
      )
   }
}
export default RadixApp