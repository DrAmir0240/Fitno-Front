import { SearchBar } from "@/components/navigation";
import { Button } from "@/components/ui";
import { CiFilter } from "react-icons/ci";
import { LuCircleFadingPlus } from "react-icons/lu";

export function AttendanceHeader() {
  return (
    <div className="mb-8">
      {/* Entry/Exit Buttons */}
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          ورود و خروج
        </h1>
        <Button
          className="px-10 rounded-[14px]"
          endIcon={<LuCircleFadingPlus size={18} />}
          size="sm"
        >
          ثبت ورود
        </Button>
      </div>

      {/* Inventory Section */}
      <div className="grid grid-cols-2 gap-3 w-full mb-6">
        <Button size="lg" className="bg-gray-200 hover:bg-gray-300 text-lg font-medium text-black">
          ورود و خروج
        </Button>
        <Button size="lg" className="text-lg font-medium ">سابقه ورود و خروج</Button>
      </div>
      
      {/* Search and Filters */}
      <SearchBar placeholder="جستجو کنید..." />

      {/* Filter Buttons */}
      <div className="flex gap-2 mb-8">
        <Button 
          variant="outline" 
          size="sm"
          className="rounded-3xl px-7 md:text-base text-gray-700 hover:bg-blue-500"
        >
          همه
        </Button>
        
        <Button 
          variant="outline" 
          size="sm"
          className="rounded-3xl px-7 md:text-base text-gray-700 hover:bg-blue-500"
        >
          نام و نام خانوادگی
        </Button>
        
        <Button 
          variant="default" 
          size="sm"
          className="rounded-3xl px-7 md:text-base font-medium"
        >
          شماره کمد
        </Button>
        
        <Button 
          variant="outline" 
          size="sm"
          className="rounded-3xl md:text-base text-gray-700 px-7 hover:bg-blue-500"
          endIcon={<CiFilter size={24} />}
        >
          فیلتر
        </Button>
      </div>
    </div>
  );
}

export default AttendanceHeader;