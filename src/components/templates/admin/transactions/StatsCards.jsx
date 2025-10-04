import { StatsCard } from "@/components/shared";
import { FaDollarSign, FaHandHoldingDollar, FaSackDollar } from "react-icons/fa6";

export const StatsCards = () => {
  const statsCards = [
    {
      title: " مجموع تراکنش ها",
      amount: "630,000 تومان",
      icon: <FaDollarSign size={30} color="#16DBCC" />,
    },
    {
      title: "تراکنش های ورودی",
      amount: "630,000 تومان",
      icon: <FaHandHoldingDollar size={30} color="#16DBCC" />,
    },
    {
      title: "تراکنش های خروجی",
      amount: "630,000 تومان",
      icon: <FaSackDollar size={30} color="#FFBB38" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 w-auto">
      {statsCards.map((card, index) => (
       
       <StatsCard key={index} card={card} />
      ))}
    </div>
  );
};