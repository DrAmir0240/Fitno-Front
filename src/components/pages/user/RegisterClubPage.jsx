"use client"
import { useState } from "react";
import { BreadCrumb } from "@/components/shared";
import { Button } from "@/components/ui";
import { UserLayout } from "@/layouts";
import { DiscountSection, PlanDetails, PlanSelection } from "@/components/templates/profile/register-club";

const RegisterClubPage = () => {
  const [discountCode, setDiscountCode] = useState('98KDN');
  const [selectedPlan, setSelectedPlan] = useState('monthly');

  const handlePlanChange = (value) => {
    setSelectedPlan(value);
  };

  return (
    <UserLayout>
      <div>
        <BreadCrumb title="ثبت نام در باشگاه" />

        {/* Plan Selection */}
        <PlanSelection 
          selectedPlan={selectedPlan} 
          onPlanChange={handlePlanChange} 
        />

        {/* Plan Details */}
        <PlanDetails selectedPlan={selectedPlan} />

        {/* Discount Section */}
        <DiscountSection discountCode={discountCode} />

        {/* Payment Button */}
        <Button className="w-full h-14 text-xl font-semibold shadow-md rounded-2xl">
          پرداخت
        </Button>
      </div>
    </UserLayout>
  );
};

export default RegisterClubPage;