export const GalleryUploader = ({
  label,
  galleryImages,
  onGalleryUpload,
  onRemoveImage,
  maxImages,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-3">
        {label}
      </label>

      <div className="grid grid-cols-3 gap-4 mb-4">
        {galleryImages.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover rounded-lg border-2 border-gray-300"
            />
            <button
              type="button"
              onClick={() => onRemoveImage(index)}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600"
            >
              ×
            </button>
          </div>
        ))}

        {Array.from(
          { length: Math.max(0, maxImages - galleryImages.length) },
          (_, index) => (
            <div
              key={`empty-${index}`}
              className="p-10 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center relative hover:border-gray-400 transition-colors"
            >
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              {index === 0 && (
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={onGalleryUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};
