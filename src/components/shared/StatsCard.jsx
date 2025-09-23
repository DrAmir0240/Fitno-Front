export const StatsCard = ({ card }) => {
  return (
    <div className="bg-[#56C1FF] rounded-3xl p-4">
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
  );
};
