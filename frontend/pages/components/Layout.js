import Head from 'next/head'

 export default function Layout({ title, children }) {

     return (
         <>
         <Head>
             <title>{title ? title + ' - My Shop App' : 'My Shop App'}</title>
             <meta name="description" content="Shop app" />
             <link rel="icon" href="/favicon.ico" />
         </Head>

         <div className=''>
               <main className=''>
                   {children}
               </main>
           </div>
         </>
     )
 }