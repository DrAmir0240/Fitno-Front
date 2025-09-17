import { Button } from '@/components/ui'
import React from 'react'
import { LuCircleFadingPlus } from 'react-icons/lu'

function PageHeader({
  title,
  buttonText,
  onButtonClick,
  showButton = true,
  buttonClassName = "",
  titleClassName = ""
}) {
  return (
    <div className="md:flex justify-between my-6 items-center">
      <h1 className={`text-xl font-bold text-gray-800 ${titleClassName}`}>
        {title}
      </h1>
      
      {showButton && (
        <Button
          className={`px-10 rounded-[14px] text-base font-bold ${buttonClassName}`}
          endIcon={<LuCircleFadingPlus size={18} />}
          size="sm"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      )}
    </div>
  )
}

export default PageHeader