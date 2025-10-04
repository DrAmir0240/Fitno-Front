export const StatsCard = ({ card }) => {
  return (
    <div className="bg-[#56C1FF] dark:bg-blue-600 rounded-3xl p-4 transition-colors duration-300">
      <div className="flex items-center gap-4 mb-2">
        <div className="bg-[#DCFAF8] dark:bg-blue-100/20 w-[70px] h-[70px] bg-opacity-20 p-2 rounded-full flex justify-center items-center transition-colors duration-300">
          {card.icon}
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm opacity-90 mb-1 text-white dark:text-white/90 transition-colors duration-300">
            {card.title}
          </p>
          <p className="text-xl font-bold text-[#0832DE] dark:text-white transition-colors duration-300">
            {card.amount}
          </p>
        </div>
      </div>
    </div>
  );
};