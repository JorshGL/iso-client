import React from 'react'
import { useSelector } from 'react-redux'
import {
  MdArrowBackIosNew,
  MdNotifications,
  MdCancel
} from 'react-icons/md'

const TopBar = ({ backButtonEnabled }) => {
  const { user } = useSelector(state => state.auth);
  return (
    <div className='flex items-center justify-end py-5 px-8 w-4/5 h-1/6 max-h-20 absolute top-0 right-0 shadow-sm shadow-neutral-400 gap-8'>
      {backButtonEnabled && (
        <MdArrowBackIosNew className='cursor-pointer mr-auto' />
      )}

      <div className='h-5/6 aspect-square overflow-hidden rounded-full'>
        <img src={user.pictureRef} alt="" />
      </div>

      <div className='font-poppins font-medium text-sm text-neutral-500'>{user.name}</div>

      <div className='flex items-center justify-center h-full aspect-square overflow-hidden rounded-full shadow-md shadow-neutral-400 text-neutral-400'>
        <MdNotifications className='text-2xl' />
      </div>
      <div className='flex items-center justify-center h-full aspect-square overflow-hidden rounded-full shadow-md shadow-neutral-400 text-neutral-400'>
        <MdCancel className='text-2xl' />
      </div>
    </div>
  )
}

export default TopBar
