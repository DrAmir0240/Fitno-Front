import { Button } from '@/components/ui'
import React from 'react'
import { CiFilter } from 'react-icons/ci'
import { FaFileExport } from 'react-icons/fa6'
import { PiFilePdf } from 'react-icons/pi'

export const FilterButtons=()=> {
  return (
  <div className="flex flex-col gap-5 md:flex-row items-start justify-between my-5">
        <div className="flex gap-3 items-center flex-wrap">
          <Button
            variant="outline"
            size="sm"
            className="rounded-xl px-4 py-3 text-xs md:text-base text-gray-700 hover:bg-blue-500"
          >
            همه
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="rounded-xl px-4 py-3 text-xs md:text-base text-gray-700 hover:bg-blue-500"
          >
            تست
          </Button>

          <Button
            variant="default"
            size="sm"
            className="rounded-xl px-4 py-3 text-xs md:text-base font-medium"
          >
            تست
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="rounded-xl px-4 py-3 text-xs md:text-base text-gray-700 hover:bg-blue-500"
            endIcon={<CiFilter size={20} />}
          >
            فیلتر
          </Button>
        </div>

        <div className="flex flex-row md:flex-col gap-2">
          <Button
            variant="outline"
            size="sm"
            className="rounded-xl px-4 py-3 text-xs md:text-base text-gray-700 hover:bg-blue-500"
            endIcon={<FaFileExport size={20} />}
          >
            دریافت خروجی اکسل
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-xl px-4 py-3 text-xs md:text-base text-gray-700 hover:bg-blue-500"
            endIcon={<PiFilePdf size={20} />}
          >
            دریافت خروجی pdf
          </Button>
        </div>
      </div>
  )
}

