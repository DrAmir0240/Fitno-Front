import { SearchBar } from "@/components/navigation";
import { StatsCard } from "@/components/shared";
import PageHeader from "@/components/shared/PageHeader";
import { FilterButtons, TransactionHistory } from "@/components/templates/admin/commission";
import { Button } from "@/components/ui";
import { CiFilter } from "react-icons/ci";
import { FaFileExport } from "react-icons/fa6";
import { GoCreditCard } from "react-icons/go";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { PiFilePdf } from "react-icons/pi";

function CommissionPage() {
  const statsCards = [
    {
      title: "کمیسیون های شهریه",
      amount: "630,000 تومان",
      icon: <GoCreditCard size={30} color="#16DBCC" />,
    },
    {
      title: "کمیسیون تک جلسه",
      amount: "630,000 تومان",
      icon: <HiOutlineCurrencyDollar size={30} color="#16DBCC" />,
    },
  ];

  const transactionHistory = [
    {
      type: "کمیسیون شهریه",
      amount: "+2,500,000",
      date: "1401/05/20",
      icon: <HiOutlineCurrencyDollar size={18} />,
    },
    {
      type: "کمیسیون یک جلسه",
      amount: "+2,500,000",
      date: "1401/05/12",
      icon: <HiOutlineCurrencyDollar size={18} />,
    },
    {
      type: "کمیسیون یک جلسه",
      amount: "+2,500,000",
      date: "1401/05/10",
      icon: <HiOutlineCurrencyDollar size={18} />,
    },
  ];
  return (
    <div>
      <PageHeader title="دسته بندی کمیسیون ها:" showButton={false} />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 w-auto">
        {statsCards.map((card, index) => (
          <StatsCard key={index} card={card} />
        ))}
      </div>

      <SearchBar placeholder="جستجو کنید..." />

    <FilterButtons  />

     <TransactionHistory transactionHistory={transactionHistory} />
    </div>
  );
}

export default CommissionPage;
