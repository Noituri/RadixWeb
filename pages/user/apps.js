import Layout from '../../layouts/default'
import AppsList from '../../components/apps-list'
import CreateAppModal from '../../components/create-app-modal'

const Apps = () => {
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
         <CreateAppModal/>
         {/* <AppsList data={data}/> */}
      </Layout>
   )
}

export default Apps