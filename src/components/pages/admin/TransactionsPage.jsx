import AdminLayout from "@/layouts/AdminLayout";
import { SearchBar } from "@/components/navigation";
import { FiCheckCircle } from "react-icons/fi";
import { FilterButtons, StatsCards, TransactionsTable } from "@/components/templates/admin/transactions";

const TransactionsPage = () => {
  const transactions = [
    {
      id: 1,
      type: "پرداخت شهریه",
      amount: "990,000",
      date: "1403/04/03",
      time: "12:34",
      status: "موفق",
      description: "خرید",
      icon: <FiCheckCircle className="w-5 h-5 text-green-500" />,
    },
    {
      id: 2,
      type: "کمیسیون",
      amount: "990,000",
      date: "1403/04/03",
      time: "12:34",
      status: "موفق",
      description: "تراکنش",
      icon: <FiCheckCircle className="w-5 h-5 text-green-500" />,
    },
  ];

  return (
    <AdminLayout>
      <StatsCards />
    
      <SearchBar placeholder="جستجو کنید..." />
      
      <FilterButtons />
      
      <TransactionsTable transactions={transactions} />
    </AdminLayout>
  );
};

export default TransactionsPage;