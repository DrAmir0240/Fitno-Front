import { Button } from '@/components/ui'
import React from 'react'
import { LuCircleFadingPlus } from 'react-icons/lu'

export const MessagesHeader =()=> {
  return (
  <div className="md:flex justify-between my-6">
        <h1 className="text-xl font-bold text-gray-800 mb-6">
          لیست پیام ها
        </h1>
        <Button
          className="px-10 rounded-[14px] text-base font-bold"
          endIcon={<LuCircleFadingPlus size={18} />}
          size="sm"
        >
          پیام جدید
        </Button>
      </div>
  )
}

