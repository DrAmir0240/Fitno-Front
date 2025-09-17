
import PageHeader from '@/components/shared/PageHeader'
import { RevenueFilters, RevenueSummary, RevenueTable } from '@/components/templates/club-panel/revenues'
import ClubPanelLayout from '@/layouts/ClubPanelLayout'

function RevenuesPage() {
  const reports = [
    {
      id: 1,
      title: "محموع درآمد",
      count: "430,000 تومان"
    },
    {
      id: 2,
      title: "درآمدحاصل از تراکنش‌ها",
      count: "130,000 تومان "
    },
    {
      id: 3,
      title: "درآمدحاصل از کمیسیون‌ها",
      count: "130,000 تومان "
    },
    {
      id: 4,
      title: "درآمد حاصل از بسته‌ها و سرویس‌ها",
      count: "130,000 تومان "
    },
    {
      id: 5,
      title: "مجموع تخفیفات",
      count: "130,000 تومان "
    },
    {
      id: 6,
      title: "تعداد تراکنش ها",
      count: "130,000 تومان "
    },
  ]

  const transactions = [
    {
      id: 1,
      type: "تراکنش ورودی",
      subject: "پرداخت شهریه",
      amount: "100,000 تومان",
      date: "1403/09/09",
      status: "پرداخت موفق",
      statusColor: "text-green-500"
    },
    {
      id: 2,
      type: "تخفیف",
      subject: "تخفیف مناسیتی",
      amount: "10,000 تومان",
      date: "1403/09/10",
      status: "کسر شده",
      statusColor: "text-red-500"
    },
    {
      id: 3,
      type: "تراکنش ورودی",
      subject: "پرداخت شهریه",
      amount: "100,000 تومان",
      date: "1403/09/09",
      status: "پرداخت موفق",
      statusColor: "text-green-500"
    },
    {
      id: 4,
      type: "تراکنش ورودی",
      subject: "پرداخت شهریه",
      amount: "100,000 تومان",
      date: "1403/09/09",
      status: "پرداخت موفق",
      statusColor: "text-green-500"
    },
  ]

  return (
    <ClubPanelLayout>
  
      <PageHeader
        title="گزارش گیری درآمد ها"
        showButton={false}
      />

      <RevenueSummary reports={reports} />
      <RevenueFilters />
      <RevenueTable transactions={transactions} />
    </ClubPanelLayout>
  )
}

export default RevenuesPage