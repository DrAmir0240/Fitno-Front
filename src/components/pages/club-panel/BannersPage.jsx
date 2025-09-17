"use client";
import { SearchBar } from "@/components/navigation";
import PageHeader from "@/components/shared/PageHeader";
import { BannerItem } from "@/components/templates/club-panel/banners/BannerItem";
import { Button, Input } from "@/components/ui";
import Dialog from "@/components/ui/dialog";
import ClubPanelLayout from "@/layouts/ClubPanelLayout";
import { useState, useRef } from "react";
import { FaPlus } from "react-icons/fa6";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

function BannersPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);

      // ایجاد پیش‌نمایش تصویر
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <ClubPanelLayout>
      <PageHeader
        title="مدیریت بنر ها"
        buttonText="بنر جدید"
        showButton={true}
        onButtonClick={openModal}
      />
      <SearchBar placeholder="جستجو" />

      <h3 className="font-medium text-lg mt-7"> بنر های صفحه باشگاه من </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <BannerItem src="/images/banner1.png" alt="banner 1" />
        <BannerItem src="/images/banner1.png" alt="banner 2" />
        <BannerItem src="/images/banner1.png" alt="banner 3" />
      </div>

      <Dialog
        contentClassName="lg:max-w-[800px] rounded-xl bg-[#D6E0E9]"
        open={isOpen}
        onOpenChange={setIsOpen}
        title="افزودن بنر جدید"
      >
        <Input className="border-gray-500" label="عنوان بنر" type="text" />

        <div className="mt-5 flex justify-between">
          <div className=" mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              افزودن عکس
            </label>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-3">
              {/* ابعاد بنر */}
              <div className="flex gap-4">
                <div className="flex items-center">
                  <Button
                    onClick={handleAddImageClick}
                    className=" bg-blue-100 border-2 border-dashed border-blue-300   hover:bg-blue-200 w-20 h-full transition-colors"
                  >
                    <FaPlus className="w-5 h-5 text-blue-500" />
                  </Button>

                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="hidden"
                  />
                </div>

                <Input
                  label="عرض (px):"
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  className="  border-gray-500 w-25 "
                  placeholder="۱۴۰۰"
                />

                <Input
                  label="طول (px):"
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-25  border-gray-500"
                  placeholder="۴۰۰"
                />
              </div>
            </div>
          </div>

          {imagePreview && (
            <div className="">
              <h4 className="text-sm font-medium text-gray-700 mb-3">
                پیش‌نمایش بنر:
              </h4>

              <div className="relative inline-block">
                <Image
                  src={imagePreview}
                  alt="پیش‌نمایش بنر"
                  width={300}
                  height={150}
                  className="rounded-lg border"
                  style={{
                    width: width ? `${width}px` : "300px",
                    height: height ? `${height}px` : "150px",
                    objectFit: "cover",
                  }}
                />

                <button
                  onClick={removeImage}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                >
                  <FaTimes size={14} />
                </button>
              </div>

              <div className="mt-2 text-xs text-gray-500">
                {selectedImage?.name}
              </div>
            </div>
          )}
        </div>
        <div className="mt-5">
          <Input label="توضیحات بنر" type="text" className=" border-gray-500" />
        </div>
        <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-400">
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            انصراف
          </button>
          <button
            onClick={() => {
              console.log("ذخیره بنر با مشخصات:", {
                width,
                height,
                image: selectedImage,
              });
              setIsOpen(false);
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            disabled={!selectedImage}
          >
            تایید و نمایش
          </button>
        </div>
      </Dialog>
    </ClubPanelLayout>
  );
}

export default BannersPage;
