import React, { useState } from "react";
import { AddMediaProps } from "types/addMediaTypes";

const AddProductMedia: React.FC<AddMediaProps> = ({ onUpload }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const filesArray = Array.from(event.target.files);
    setSelectedFiles((prev) => [...prev, ...filesArray]);
  };

  const handleRemoveFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpload = () => {
    if (selectedFiles.length > 0) {
      onUpload(selectedFiles);
      setSelectedFiles([]); // Очистити після завантаження
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md w-full">
      <label className="block mb-2 text-lg font-medium text-gray-700">
        Додати медіа
      </label>
      <input
        type="file"
        accept="image/*,video/*"
        multiple
        onChange={handleFileChange}
        className="mb-3 block w-full text-sm text-gray-500 border rounded-lg cursor-pointer"
      />

      {/* Попередній перегляд файлів */}
      <div className="grid grid-cols-3 gap-2">
        {selectedFiles.map((file, index) => (
          <div key={index} className="relative">
            {file.type.startsWith("image") ? (
              <img
                src={URL.createObjectURL(file)}
                alt="preview"
                className="w-full h-24 object-cover rounded-lg shadow-sm"
              />
            ) : (
              <video
                src={URL.createObjectURL(file)}
                controls
                className="w-full h-24 object-cover rounded-lg shadow-sm"
              />
            )}
            <button
              onClick={() => handleRemoveFile(index)}
              className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Кнопка завантаження */}
      <button
        onClick={handleUpload}
        disabled={selectedFiles.length === 0}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
      >
        Завантажити
      </button>
    </div>
  );
};

export default AddProductMedia;
