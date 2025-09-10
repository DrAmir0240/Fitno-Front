import { Button } from '@/components/ui';
import { IoIosArrowBack } from "react-icons/io";

export const BreadCrumb = ({ title , onBack }) => {
  return (
    <div className="bg-white px-4 py-4 flex items-center justify-between mb-4">
      <div className="w-10"></div>
      <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
      <Button 
        className="bg-gradient-to-br w-14 h-14 from-gray-400 to-gray-200 rounded-full"
        onClick={onBack}
      >
        <IoIosArrowBack size={24} />
      </Button>
    </div>
  );
};