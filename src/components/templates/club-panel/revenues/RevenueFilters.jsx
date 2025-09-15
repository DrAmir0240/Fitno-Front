import { SearchBar } from '@/components/navigation'
import { Button } from '@/components/ui'
import { CiFilter } from 'react-icons/ci'
import { FaFileExport } from "react-icons/fa"

export const RevenueFilters = () => {
  return (
    <>
      <div className="mb-6">
        <SearchBar placeholder="جستجو کنید..." />
      </div>
      
      <div className="flex flex-col lg:flex-row justify-between gap-4 mb-8">
        <div className='flex flex-wrap gap-2'>
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
            از تاریخ: ۱۴۰۴/۰۲/۰۲
          </Button>
          
          <Button 
            variant="default" 
            size="sm"
            className="rounded-xl px-4 py-3 text-xs md:text-base font-medium"
          >
            تا تاریخ: ۱۴۰۴/۰۲/۰۲
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

        <Button 
          variant="outline" 
          size="sm"
          className="rounded-xl px-4 py-3 text-xs md:text-base text-gray-700 hover:bg-blue-500 whitespace-nowrap"
          endIcon={<FaFileExport size={16} />}
        >
          دریافت خروجی اکسل
        </Button>
      </div>
    </>
  )
}
