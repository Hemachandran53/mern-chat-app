import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

function Home() {
  return (
    <div className='flex sm:h-[450px] md:h-[500px] rounded-lg overflow-hidden bg-gry-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Home
