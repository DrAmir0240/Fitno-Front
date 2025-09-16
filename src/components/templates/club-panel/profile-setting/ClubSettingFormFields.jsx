"use client";
import { Input } from "@/components/ui";
import { RadioGroup } from "@/components/ui/RadioGroup";
import { GalleryUploader } from "../club-register";
import { useState } from "react";

export const ClubSettingFormFields = ({ selectedType, setSelectedType }) => {
  const [images, setImages] = useState([]);
  const typeOptions = [
    { value: "user", label: "کاربر" },
    { value: "club", label: "باشگاه" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      <Input type="text" name="name" label="نام باشگاه" />
      <Input type="text" name="phone" label="شماره تماس" />
      <Input type="text" name="address" label="آدرس" />
      <Input type="text" name="description" label="توضیحات" />
      <Input type="text" name="features" label="امکانات" />

      <GalleryUploader
        initialImages={images}
        onImagesChange={setImages}
        maxImages={4}
        label="گالری تصاویر"
      />
      <div className="md:col-span-2">
        <RadioGroup
          label="نوع کمیسیون"
          options={typeOptions}
          value={selectedType}
          onChange={setSelectedType}
        />
      </div>
    </div>
  );
};
