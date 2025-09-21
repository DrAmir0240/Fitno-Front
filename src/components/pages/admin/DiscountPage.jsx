import AdminLayout from '@/layouts/AdminLayout';
import PageHeader from '@/components/shared/PageHeader';
import DiscountTabs from '@/components/templates/admin/discount/DiscountTabs';

const DiscountsPage = () => {
  const discountCodes = [
    {
      id: '1',
      code: 'gbqdb76',
      description: "  |  کد تخفیف هدیه باشگاه فیتنو اعمال روی حداقل ۷۰۰.۰۰۰ تومان |  مهلت ۲ روز ",
      type: 'active'
    },
    {
      id: '2', 
      code: 'gbqdb76',
      description: "  |  کد تخفیف هدیه باشگاه فیتنو اعمال روی حداقل ۷۰۰.۰۰۰ تومان |  مهلت ۲ روز ",
      type: 'used'
    },
    {
      id: '3',
      code: 'gbqdb76', 
      description: "  |  کد تخفیف هدیه باشگاه فیتنو اعمال روی حداقل ۷۰۰.۰۰۰ تومان |  مهلت ۲ روز ",
      type: 'new'
    },
    {
      id: '4',
      code: 'gbqdb76',
      description: "  |  کد تخفیف هدیه باشگاه فیتنو اعمال روی حداقل ۷۰۰.۰۰۰ تومان |  مهلت ۲ روز ",
      type: 'active'
    }
  ];

  return (
    <AdminLayout>
      <PageHeader title="کد های تخفیف" showButton={false} />
      <DiscountTabs discountCodes={discountCodes} />
    </AdminLayout>
  );
};

export default DiscountsPage;