"use client";
import { useGetGymDetails } from "@/services/queries/Profile";
import { useParams } from "next/navigation";
import { BreadCrumb } from "@/components/shared";
import { ClubHeader, ClubInfo } from "@/components/templates/profile/clubDetails";

function ClubDetailsPage() {
  const params = useParams();
  const { data, isLoading } = useGetGymDetails(params.id);
  const club = data?.data;
  
  if (!club) {
    return (
      <div className="text-center py-10">
        <p className="text-lg text-gray-600">باشگاه یافت نشد</p>
      </div>
    );
  }

  return (
    <div>
      <BreadCrumb title={`جزئیات باشگاه ${club?.title}`} />
      <ClubHeader club={club} />
      <ClubInfo club={club} />
    </div>
  );
}

export default ClubDetailsPage;