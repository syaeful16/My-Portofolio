import React from 'react'

const Modal = ({data}) => {
  return (
    <div className='fixed bottom-0 left-0 block w-screen h-screen bg-white'>
      <h1 className='text-black'>{data[1]}</h1>
    </div>
  )
}

export default Modal