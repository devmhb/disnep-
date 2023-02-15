import Head from 'next/head'
import Homepage from "./Homepage"
const Home = () => {
  return (
    <div>
      <Head>
        <title className='font-poppins'>Disnep+</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Homepage/>
      </div>
    </div>
  )
}

export default Home
