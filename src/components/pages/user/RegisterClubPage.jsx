"use client"
import { useState, useEffect } from "react";
import { BreadCrumb } from "@/components/shared";
import { Button } from "@/components/ui";
import { DiscountSection, PlanDetails, PlanSelection } from "@/components/templates/profile/register-club";
import { useGetGymDetails } from "@/services/queries/Profile";

const RegisterClubPage = () => {
  const { data, isLoading } = useGetGymDetails();
  const club = data?.data;
  console.log(club)
  const [discountCode, setDiscountCode] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    if (club?.membership_types?.length > 0) {
      setSelectedPlan(club.membership_types[0].id.toString());
    }
  }, [club]);

  const handlePlanChange = (value) => {
    setSelectedPlan(value);
  };


  if (!club) {
    return (
      <div className="text-center py-10">
        <p className="text-lg text-gray-600">باشگاه یافت نشد</p>
      </div>
    );
  }

  return (
    <div>
      <BreadCrumb title={`ثبت نام در باشگاه ${club?.title}`} />

      {/* Plan Selection */}
      <PlanSelection 
        selectedPlan={selectedPlan} 
        onPlanChange={handlePlanChange}
        membershipTypes={club?.membership_types}
        clubTitle={club?.title}
      />

      {/* Plan Details */}
      <PlanDetails selectedPlan={selectedPlan} membershipTypes={club?.my_memberships} />

      {/* Discount Section */}
      <DiscountSection discountCode={discountCode} />

      {/* Payment Button */}
      <Button className="w-full h-14 text-xl font-semibold shadow-md rounded-2xl">
        پرداخت
      </Button>
    </div>
  );
};

export default RegisterClubPage;