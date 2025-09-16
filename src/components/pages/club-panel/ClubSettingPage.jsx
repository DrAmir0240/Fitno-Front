"use client";
import { useState } from "react";
import { ProfileImageUpload } from "@/components/templates/club-panel/add-user";
import { Button } from "@/components/ui";
import ClubPanelLayout from "@/layouts/ClubPanelLayout";
import {
  ClubSettingFormFields,
  ProfileHeader,
} from "@/components/templates/club-panel/profile-setting";

function ClubSettingPage() {
  const [selectedType, setSelectedType] = useState("user");
  return (
    <ClubPanelLayout>
      <ProfileHeader />
      <form className="p-4 sm:p-6 space-y-6">
        <ProfileImageUpload />
        <ClubSettingFormFields
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
        <div className="flex justify-end pt-6">
          <Button type="submit" className="w-48 text-lg">
            ثبت
          </Button>
        </div>
      </form>
    </ClubPanelLayout>
  );
}

export default ClubSettingPage;
