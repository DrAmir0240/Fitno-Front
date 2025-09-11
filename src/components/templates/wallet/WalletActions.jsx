import { Button } from "@/components/ui";
import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go";
import { IoIosSend } from "react-icons/io";


export function WalletActions() {
  const actions = [
    {
      icon: <GoArrowDownLeft className="text-4xl" color="#289DFC" />,
      label: "برداشت",
    },
    {
      icon: <GoArrowUpRight className="text-4xl" color="#289DFC" />,
      label: "افزایش",
    },
    {
      icon: <IoIosSend className="text-4xl" color="#289DFC" />,
      label: "تسویه",
    },
  ];

  return (
    <div className="flex justify-center gap-8 mt-10">
      {actions.map((action, index) => (
        <div key={index} className="flex flex-col items-center">
          <Button
            variant="outline"
            size="md"
            color="#7c7c7c"
            className="rounded-full w-15 h-15 md:w-18 md:h-18 shadow-lg"
          >
            {action.icon}
          </Button>
          <span className="text-sm md:text-lg text-gray-600 mt-3">
            {action.label}
          </span>
        </div>
      ))}
    </div>
  );
}