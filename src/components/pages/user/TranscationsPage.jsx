import { BreadCrumb } from '@/components/shared';
import TransactionsList from '@/components/templates/profile/transactions/transactionsList';

const TransactionsPage = () => {
  const transactions = [
    {
      id: 1,
      type: 'increase',
      title: 'افزایش موجودی',
      amount: '400,323',
      description: 'کسر از موجودی بابت پرداخت شهریه',
      date: '1403/05/01',
      time: '14:03:01',
      status: 'موفق'
    },
    {
      id: 2,
      type: 'increase',
      title: 'افزایش موجودی',
      amount: '400,323',
      description: 'کسر از موجودی بابت پرداخت شهریه',
      date: '1403/05/01',
      time: '14:03:01',
      status: 'موفق'
    },
    {
      id: 3,
      type: 'decrease',
      title: 'کاهش موجودی',
      amount: '400,323',
      description: 'کسر از موجودی بابت پرداخت شهریه',
      date: '1403/05/01',
      time: '14:03:01',
      status: 'موفق'
    },
    {
      id: 4,
      type: 'decrease',
      title: 'کاهش موجودی',
      amount: '400,323',
      description: 'کسر از موجودی بابت پرداخت شهریه',
      date: '1403/05/01',
      time: '14:03:01',
      status: 'موفق'
    },
    {
      id: 5,
      type: 'decrease',
      title: 'کاهش موجودی',
      amount: '400,323',
      description: 'کسر از موجودی بابت پرداخت شهریه',
      date: '1403/05/01',
      time: '14:03:01',
      status: 'موفق'
    },
    {
      id: 6,
      type: 'increase',
      title: 'افزایش موجودی',
      amount: '400,323',
      description: 'کسر از موجودی بابت پرداخت شهریه',
      date: '1403/05/01',
      time: '14:03:01',
      status: 'موفق'
    },
    {
      id: 7,
      type: 'increase',
      title: 'افزایش موجودی',
      amount: '400,323',
      description: 'کسر از موجودی بابت پرداخت شهریه',
      date: '1403/05/01',
      time: '14:03:01',
      status: 'موفق'
    }
  ];

  return (
        <div className="min-h-screen  font-sans" >
     <BreadCrumb title="تراکنش ها" />

      {/* Date Header */}
      <div className='bg-[#EFEFEF] p-2 py-4 rounded-3xl'>
        <p className="text-base md:text-xl font-[500] text-gray-600 mb-3 mx-2 ">امروز</p>
       

      {/* Transactions List */}
      <TransactionsList transactions={transactions} />
      </div>
    </div>
  );
};

export default TransactionsPage;