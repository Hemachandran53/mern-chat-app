import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
import MessageContainer from '../messages/MessageContainer'

function Sidebar() {
  return (
    <div className='border-right bordee-slate-500 p-4 flex flex-col'>
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
  )
}

export default Sidebar
