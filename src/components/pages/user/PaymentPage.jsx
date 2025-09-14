import { BreadCrumb } from '@/components/shared';
import { UserLayout } from '@/layouts';
import { PaymentFooter, SelectedSessions } from '@/components/templates/profile/payment';
import { DiscountSection } from '@/components/templates/profile/register-club';


function PaymentPage() {
  const sessions = [
    {
      id: 1,
      title: 'سانس دوماهه',
      sessionsCount: "12 جلسه",
      fee: "۱۲/۰۰۰/۰۰۰ تومان",
      startDate: "1404/06/06",
      endDate: "1404/08/06"
    },
  ];

  return (
    <UserLayout>
      <BreadCrumb title="پرداخت" />
      
      <SelectedSessions sessions={sessions} />
      
      <div className='mt-20'>
        <DiscountSection discountCode="98KDN" />
      </div>
      
      <PaymentFooter />
    </UserLayout>
  );
}

export default PaymentPage;