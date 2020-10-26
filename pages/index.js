import Head from 'next/head'
import api from '../utils/api'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        Blank
      </div>
    </div>
  )
}
// export async function getServerSideProps({req,res}) {
//   var users_res = await api.getUsers();
//   var users = users_res.data
//   // res.cookie('tesssst', 'value',{httpOnly : true});
//   console.log('users',users)
  
//   return {
//     props: {users}, // will be passed to the page component as props
//   }
// }
