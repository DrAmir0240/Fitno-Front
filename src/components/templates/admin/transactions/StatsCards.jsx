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
      icon: <FaHandHoldingDollar size={30} color="#396AFF" />,
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
        <div key={index} className="bg-[#56C1FF] rounded-3xl p-4">
          <div className="flex items-center gap-4 mb-2">
            <div className="bg-[#DCFAF8] w-[70px] h-[70px] bg-opacity-20 p-2 rounded-full flex justify-center items-center">
              {card.icon}
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm opacity-90 mb-1">{card.title}</p>
              <p className="text-xl font-bold text-[#0832DE]">{card.amount}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};