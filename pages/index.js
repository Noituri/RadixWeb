import Link from 'next/link'
import Layout from '../layouts/default'

const Index = () => (
   <Layout title="Home">
      <style jsx>{`
         .home {
            text-align: center;
         }
     `}</style>
      <div className="content">
         <article className="home">
            <h2 className="title">
               <span className="accent">Host</span> your bots <span className="accent">with ease</span>
            </h2>
            <Link href="/register">
               <p className="button big" style={{marginTop: '3rem', padding: '1rem 2rem 1rem'}}>
                  Try it now!
               </p>
            </Link>
         </article>
      </div>
   </Layout>
);

export default Index;