import React, { useState } from 'react'
import Layout from '../../layouts/default'
import AppsList from '../../components/apps-list'
import CreateAppModal from '../../components/create-app-modal'

const Apps = () => {
   const [showModal, setShowModal] = useState(false)
   const data = [
      {
         id: '123',
         name: 'Test'
      },
      {
         id: '321',
         name: 'OwoTest'
      }
   ]

   return (
      <Layout title="Apps">
         { showModal && <CreateAppModal onClose={ () => setShowModal(false) } /> }
         <AppsList data={data} onNewApp={ () => setShowModal(true) } />
      </Layout>
   )
}

export default Apps