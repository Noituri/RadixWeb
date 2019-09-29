import { action, observable } from 'mobx'
import { useStaticRendering } from 'mobx-react'

const isServer = typeof window === 'undefined'
useStaticRendering(isServer)

export class Store {
   @observable user = null

   @action setUser = (user) => {
      this.user = user
   }
}

export async function fetchInitialStoreState() {
   return {}
}