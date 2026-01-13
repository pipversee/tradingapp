import { AddTradeForm } from '@/components/AddTradeForm'
import React from 'react'

const AddTrade = () => {
  return (
    <div className='py-8 md:py-9 z-20'>
      <h2 className="font-display text-[28px] md:text-[40px] tracking-tighter leading-[1.1] mb-6 pl-6 text-white">
        Add <span className='bg-linear-to-r from-green-400 to-green-600 bg-clip-text text-transparent'>Trade</span>
      </h2>

      <AddTradeForm />
    </div>
  )
}

export default AddTrade
