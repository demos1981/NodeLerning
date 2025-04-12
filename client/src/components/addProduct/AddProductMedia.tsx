import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import { uploadMedia, resetMedia } from "features/media/mediaSlice";
import { AddMediaProps } from "types/addMediaTypes";

const AddProductMedia: React.FC<AddMediaProps> = ({ productId }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const dispatch = useAppDispatch();

  const { loading, error, uploaded } = useAppSelector((state) => state.media);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const filesArray = Array.from(event.target.files);
    setSelectedFiles((prev) => [...prev, ...filesArray]);
  };

  const handleRemoveFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    if (!productId) {
      alert("ID продукту не знайдено. Спочатку створіть продукт.");
      return;
    }

    for (const file of selectedFiles) {
      await dispatch(uploadMedia({ file, productId }));
    }

    setSelectedFiles([]);
  };

  const handleReset = () => {
    dispatch(resetMedia());
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

      {/* Стани завантаження */}
      {loading && (
        <p className="mt-2 text-blue-500 font-medium">Завантаження файлів...</p>
      )}
      {error && <p className="mt-2 text-red-500">Помилка: {error}</p>}
      {uploaded.length > 0 && (
        <div className="mt-2 text-green-600">
          <p className="font-medium">Успішно завантажено:</p>
          <ul className="list-disc list-inside">
            {uploaded.map((url, i) => (
              <li key={i}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-600"
                >
                  {url}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={handleReset}
            className="mt-2 text-sm text-gray-600 underline"
          >
            Очистити список
          </button>
        </div>
      )}

      {/* Кнопка завантаження */}
      <button
        onClick={handleUpload}
        disabled={selectedFiles.length === 0 || loading}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
      >
        Завантажити
      </button>
    </div>
  );
};

export default AddProductMedia;
