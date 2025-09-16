import { useState, useCallback } from 'react';
import { FiPlus, FiX, FiImage } from 'react-icons/fi';

export const GalleryUploader = ({
  label = "گالری تصاویر",
  initialImages = [],
  maxImages = 6,
  onImagesChange,
  aspectRatio = "",
  uploadText = "کلیک کنید یا فایل را بکشید",
  uploadSubText = "JPG, PNG حداکثر 5MB",
  className = "",
  ...props
}) => {
  const [galleryImages, setGalleryImages] = useState(initialImages);

  const handleGalleryUpload = useCallback((e) => {
    const files = Array.from(e.target.files);
    const newImages = [];
    
    files.forEach(file => {
      if (file.size > 5 * 1024 * 1024) {
        alert("حجم فایل باید کمتر از 5MB باشد");
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (e) => {
        newImages.push({
          src: e.target.result,
          file: file
        });
        
        if (newImages.length === files.length) {
          const updatedImages = [...galleryImages, ...newImages].slice(0, maxImages);
          setGalleryImages(updatedImages);
          onImagesChange?.(updatedImages);
        }
      };
      reader.readAsDataURL(file);
    });
  }, [galleryImages, maxImages, onImagesChange]);

  const removeGalleryImage = useCallback((index) => {
    const updatedImages = galleryImages.filter((_, i) => i !== index);
    setGalleryImages(updatedImages);
    onImagesChange?.(updatedImages);
  }, [galleryImages, onImagesChange]);

  const availableSlots = Math.max(0, maxImages - galleryImages.length);

  return (
    <div className={`space-y-3 ${className}`} {...props}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      
      <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <div key={index} className="relative group">
            <img
              src={image.src}
              alt={`Gallery ${index + 1}`}
              className={`w-full ${aspectRatio} object-cover rounded-lg border-2 border-gray-300 transition-transform group-hover:scale-105`}
            />
            <button
              type="button"
              onClick={() => removeGalleryImage(index)}
              className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600 transition-all opacity-0 group-hover:opacity-100"
              aria-label="حذف تصویر"
            >
              <FiX size={14} />
            </button>
          </div>
        ))}

        {availableSlots > 0 && (
          <label className="cursor-pointer">
            <div className={`${aspectRatio} border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center hover:border-gray-400 transition-colors p-4 group`}>
              <div className="relative">
                <FiImage className="w-8 h-8 text-gray-400 mb-2 group-hover:text-gray-600 transition-colors" />
                <FiPlus 
                  className="absolute -top-1 -right-1 bg-blue-500 text-white rounded-full w-4 h-4 p-0.5" 
                  size={12} 
                />
              </div>
              <p className="text-xs text-gray-500 text-center">
                {uploadText}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {uploadSubText}
              </p>
            </div>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleGalleryUpload}
              className="hidden"
            />
          </label>
        )}
      </div>
      <p className="text-xs text-gray-500">
        {galleryImages.length} از {maxImages} تصویر انتخاب شده
      </p>
    </div>
  );
};

export const GalleryUploaderField = ({ 
  name, 
  label, 
  required, 
  error,
  ...galleryProps 
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 mr-1">*</span>}
        </label>
      )}
      
      <GalleryUploader 
        {...galleryProps}
        className={error ? "border-red-500 border rounded-lg p-3" : ""}
      />
      
      {error && (
        <p className="text-red-500 text-xs flex items-center gap-1">
          <FiX className="flex-shrink-0" size={12} />
          {error}
        </p>
      )}
    </div>
  );
};

export const useGallery = (initialImages = []) => {
  const [images, setImages] = useState(initialImages);

  const addImages = useCallback((newImages) => {
    setImages(prev => [...prev, ...newImages]);
  }, []);

  const removeImage = useCallback((index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  }, []);

  const clearImages = useCallback(() => {
    setImages([]);
  }, []);

  return {
    images,
    addImages,
    removeImage,
    clearImages,
    setImages
  };
};

export const GalleryViewer = ({ images, className = "" }) => {
  if (!images || images.length === 0) {
    return (
      <div className={`flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-lg ${className}`}>
        <FiImage className="w-12 h-12 text-gray-400 mb-4" />
        <p className="text-gray-500 text-sm">تصویری وجود ندارد</p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 gap-4 ${className}`}>
      {images.map((image, index) => (
        <div key={index} className="relative aspect-square">
          <img
            src={image.src || image}
            alt={`Gallery ${index + 1}`}
            className="w-full h-full object-cover rounded-lg border-2 border-gray-300"
          />
        </div>
      ))}
    </div>
  );
};