import React from 'react'

function Confirm({caption= 'Alert',subCaption = 'Are You Sure ? ',closeDiscard,confirm}) {
  const handleClose = (e) => {

    if(e.target.dataset.confirm){
      confirm(true)
      return
    }
    confirm(false)
    closeDiscard(false)
  }
  return (
    <div className='w-80  h-fit rounded-lg bg-white fixed top-1/2 left-1/2 shadow-sm shadow-gray-500' style={{
      transform:'translate(-50%,-50%)'
    }}>
        <div className='p-2 text-center space-y-1 py-3'>
          <strong className='text-lg font-semibold'>{caption}</strong>
          <p className='text-sm font-semibold text-gray-400 '>{subCaption}</p>
        </div>
        <div className='flex flex-col'>
          <button className='text-red-700 font-semibold border-t py-3' onClick={handleClose} data-confirm = {true}>Discard</button>
          <button className='font-light border-t py-3' onClick={handleClose} data-confirm ={false}>Cancel</button>

        </div>
    </div>
  )
}

export default Confirm