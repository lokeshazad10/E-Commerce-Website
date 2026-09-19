import React from 'react'

const Loader = () => {
  return (
    <div className='w-full h-[calc(100vh-4.5rem)] flex justify-center items-center'>
      <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500'>
        
      </div>
    </div>
  )
}

export default Loader
