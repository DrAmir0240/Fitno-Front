"use client";
import {
  Button,
  Input,
  Select,
} from "@/components/ui";
import { useState, useRef } from "react";
import { FaPlus } from "react-icons/fa6";
import Image from "next/image";
import Dialog from "@/components/ui/dialog";
import { FaTimes } from "react-icons/fa";

export const AddBannerModal = ({ open, onOpenChange }) => {
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);

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
    <Dialog
      contentClassName="lg:max-w-[800px] rounded-xl bg-[#D6E0E9]"
      open={open}
      onOpenChange={onOpenChange}
      title="افزودن بنر جدید"
    >
      <Input className="border-gray-500" label="عنوان بنر" type="text" />

      <div className="mt-5 flex justify-between">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            افزودن عکس
          </label>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <Button
                  onClick={handleAddImageClick}
                  className="bg-blue-100 border-2 border-dashed border-blue-300 hover:bg-blue-200 w-20 h-full transition-colors"
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
                className="border-gray-500 w-25"
                placeholder="۱۴۰۰"
              />

              <Input
                label="طول (px):"
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-25 border-gray-500"
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
                className="rounded-lg border object-cover"
                style={{
                  width: width ? `${width}px` : "300px",
                  height: height ? `${height}px` : "150px",
                }}
              />

              <Button
                onClick={removeImage}
                size="icon"
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-7 h-7 hover:bg-red-600 transition-colors"
              >
                <FaTimes size={14} />
              </Button>
            </div>

            <div className="mt-2 text-xs text-gray-500">
              {selectedImage?.name}
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-5">
        <Input label="توضیحات بنر" type="text" className="border-gray-500" />

        <Select
          label="نمایش در قسمت"
          className="mt-5"
          triggerClassName="w-[200px]  border-gray-500"
          options={['آزمایشی', "اصلی"]}
          placeholder="یک گزینه را انتخاب کنید"
        />
      </div>
      
      <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-400">
        <Button
          onClick={() => onOpenChange(false)}
          variant="outline"
          className="w-28"
        >
          انصراف
        </Button>
        <Button
          className="w-28"
          disabled={!selectedImage}
        >
          تایید و نمایش
        </Button>
      </div>
    </Dialog>
  );
};

