"use client";
import { useState } from "react";
import { Button, Input } from "@/components/ui";
import {
  GalleryUploader,
  ImageUploader,
  ProvinceSelect,
} from "@/components/templates/club-panel/club-register";
import PageHeader from "@/components/shared/PageHeader";

export default function ClubRegistrationPage() {
  const [imagePreview, setImagePreview] = useState(null);
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({});

  const handleMainImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        gymImage: file,
      }));

      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  

  return (
    <>
       <PageHeader
        title="ثبت باشگاه"
        showButton={false}
      />

      <form className="p-6 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input id="gymName" name="gymName" type="text" label="نام باشگاه" />

          <ProvinceSelect />

          <Input id="city" name="city" type="text" label="شهر" />

          <Input id="phone" name="phone" type="text" label="شماره تماس" />

          <Input id="address" name="address" type="text" label="آدرس" />

          <Input
            id="managersCount"
            name="managersCount"
            type="number"
            label="تعداد کمد"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ImageUploader
            label="آپلود پروانه کسب"
            imagePreview={imagePreview}
            onImageUpload={handleMainImageUpload}
            onRemoveImage={() => {
              setImagePreview(null);
              setFormData((prev) => ({ ...prev, gymImage: null }));
            }}
          />

          <GalleryUploader
            initialImages={images}
            onImagesChange={setImages}
            maxImages={3}
            label="گالری تصاویر"
          />

          <Input
            id="description"
            name="description"
            type="text"
            label="ساعات کاری / روز های باشگاه"
          />
        </div>

        <div className="flex justify-end pt-6">
          <Button type="submit" className="w-48 text-lg">
            ثبت
          </Button>
        </div>
      </form>
    </>
  );
}
