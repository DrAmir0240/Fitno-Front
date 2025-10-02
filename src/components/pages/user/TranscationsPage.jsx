"use client"
import { BreadCrumb } from '@/components/shared';
import TransactionsList from '@/components/templates/profile/transactions/transactionsList';
import { useGetTransactions } from '@/services/queries/Profile';

const TransactionsPage = () => {
  const {data} = useGetTransactions()
  const transactions = data?.data
  console.log(data)

  return (
        <div className="min-h-screen  font-sans" >
     <BreadCrumb title="تراکنش ها" />

      {/* Date Header */}
      <div className='bg-[#EFEFEF] dark:bg-gray-800 p-2 py-4 rounded-3xl'>
        <p className="text-base md:text-xl font-[500] text-gray-600 mb-3 mx-2 ">امروز</p>
       

      {/* Transactions List */}
      <TransactionsList transactions={transactions} />
      </div>
    </div>
  );
};

export default TransactionsPage;