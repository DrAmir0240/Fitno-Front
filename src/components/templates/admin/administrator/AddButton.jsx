import { Button } from "@/components/ui";
import { FiPlus } from "react-icons/fi";

const AddButton = ({ onClick, children = "اضافه کردن", className = "" }) => {
  return (
    <Button
      startIcon={<FiPlus size={32} />}
      variant="outline"
      onClick={onClick}
      className={`border-blue-500 h-[220px] hover:text-blue-500 flex-col gap-3 justify-center ${className}`}
    >
      {children}
    </Button>
  );
};

export default AddButton;