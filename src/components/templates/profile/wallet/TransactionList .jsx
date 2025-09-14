import { TransactionItem } from "./TransactionItem ";

export function TransactionList() {
  const transactions = [
    {
      id: 1,
      type: "increase",
      amount: "400,323",
      status: "موفق",
      description: "شماره کارت موجودی یا پرداخت شده",
      transactionType: "تسویه روزانه",
      date: "1403/04/06 | 19:20"
    },
    {
      id: 2,
      type: "decrease",
      amount: "400,323",
      status: "موفق",
      description: "شماره کارت موجودی یا پرداخت شده",
      transactionType: "تسویه روزانه",
      date: "1403/04/06 | 19:20"
    },
    {
      id: 3,
      type: "increase",
      amount: "400,323",
      status: "موفق",
      description: "شماره کارت موجودی یا پرداخت شده",
      transactionType: "تسویه روزانه",
      date: "1403/04/06 | 19:20"
    }
  ];

  return (
    <>
      <div className="px-4 mb-3 mt-5">
        <h2 className="text-sm md:text-lg font-bold text-gray-900">
          فهرست تراکنش‌ها
        </h2>
      </div>

      <div className="space-y-1">
        {transactions.map(transaction => (
          <TransactionItem key={transaction.id} {...transaction} />
        ))}
      </div>
    </>
  );
}