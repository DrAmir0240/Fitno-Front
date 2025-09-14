"use client"
import React from 'react';
import { UserLayout } from '@/layouts';
import { ReusableTabs } from '@/components/ui/tabs';
import { BreadCrumb } from '@/components/shared';
import { DiscountCodesList } from '@/components/templates/profile/discount';


const DiscountsPage = () => {
  const discountCodes = [
    {
      id: '1',
      code: 'gbqdb76',
      description: 'کد تخفیف هدیه به پشتیان فیتنو تا 75,000 تومان | اعتبار روی خرید من 2,400 تومان | اعتبار تا',
      type: 'active'
    },
    {
      id: '2', 
      code: 'gbqdb76',
      description: 'کد تخفیف هدیه به پشتیان فیتنو تا 75,000 تومان | اعتبار روی خرید من 2,400 تومان | اعتبار تا',
      type: 'used'
    },
    {
      id: '3',
      code: 'gbqdb76', 
      description: 'کد تخفیف هدیه به پشتیان فیتنو تا 75,000 تومان | اعتبار روی خرید من 2,400 تومان | اعتبار تا',
      type: 'new'
    },
    {
      id: '4',
      code: 'gbqdb76',
      description: 'کد تخفیف هدیه به پشتیان فیتنو تا 75,000 تومان | اعتبار روی خرید men 2,400 تومان | اعتبار تا',
      type: 'active'
    }
  ];

  const activeCodes = discountCodes.filter(code => code.type === 'active');
  const usedCodes = discountCodes.filter(code => code.type === 'used');
  const newCodes = discountCodes.filter(code => code.type === 'new');

  const tabsData = [
    {
      value: 'active',
      label: 'کدهای اختصاصی',
      content: <DiscountCodesList codes={activeCodes} type="active" />
    },
    {
      value: 'used',
      label: 'کدهای استفاده شده',
      content: <DiscountCodesList codes={usedCodes} type="used" />
    },
    {
      value: 'new',
      label: 'تخفیفات جدید',
      content: <DiscountCodesList codes={newCodes} type="new" />
    }
  ];

  return (
    <UserLayout>
      <div className="min-h-screen" >
       <BreadCrumb title="لیست تخفیف ها" />

        <div className="bg-[#F3F3F4] rounded-3xl py-4">
          <ReusableTabs
            tabs={tabsData}
            defaultValue="active"
            className="w-full px-3"
            tabsListClassName="bg-[#D6D6D6] min-w-[200px] grid grid-cols-3 mx-auto rounded-full"
          />
        </div>
      </div>
    </UserLayout>
  );
};

export default DiscountsPage;