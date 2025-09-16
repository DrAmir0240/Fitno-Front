export const ImageUploader = ({
  label,
  imagePreview,
  onImageUpload,
  onRemoveImage,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-3">
        {label}
      </label>
      <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
        {imagePreview ? (
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="max-w-full max-h-48 mx-auto rounded-lg"
            />
            <button
              type="button"
              onClick={onRemoveImage}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600"
            >
              ×
            </button>
          </div>
        ) : (
          <div>
            <svg
              className="w-12 h-12 text-gray-400 mx-auto mb-4"
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
            <p className="text-gray-500 mb-2">کلیک کنید یا فایل را بکشید</p>
            <p className="text-xs text-gray-400">JPG, PNG حداکثر 5MB</p>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={onImageUpload}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );
};
