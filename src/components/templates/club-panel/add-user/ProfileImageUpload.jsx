import { FiPlus } from "react-icons/fi";
import { useState } from "react";

export const ProfileImageUpload = ({ onImageUpload }) => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const preview = e.target.result;
        setImagePreview(preview);
        if (onImageUpload) onImageUpload(preview);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="relative">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden bg-gray-50">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Profile Preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-center flex flex-col justify-center items-center">
              <FiPlus className="text-lg sm:text-xl" />
              <span className="text-xs text-gray-500 mt-1">افزودن تصویر</span>
            </div>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );
};
