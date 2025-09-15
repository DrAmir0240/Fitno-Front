"use client";
import { useState } from "react";
import ClubPanelLayout from "@/layouts/ClubPanelLayout";
import {
  AddUserHeader,
  FormActions,
  ProfileImageUpload,
  UserFormFields,
} from "@/components/templates/club-panel/add-user";

export default function AddUserPage() {
  const [selectedGender, setSelectedGender] = useState("male");

  return (
    <ClubPanelLayout>
      <AddUserHeader />
      <form className="p-4 sm:p-6 space-y-6">
        <ProfileImageUpload />
        <UserFormFields
          selectedGender={selectedGender}
          setSelectedGender={setSelectedGender}
        />
        <FormActions />
      </form>
    </ClubPanelLayout>
  );
}
