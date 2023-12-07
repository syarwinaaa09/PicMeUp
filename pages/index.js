import Modal from '../components/Modal'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Head from 'next/head'


export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>PicMeUp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <Header />
      <Feed />
      <Modal />

      
    </div>
  )
}
