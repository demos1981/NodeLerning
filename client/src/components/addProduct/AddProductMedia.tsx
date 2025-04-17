import React, { useState } from "react";
import { AddMediaProps } from "types/addMediaTypes";
import {
  useUploadMediaMutation,
  useDeleteMediaMutation,
  useGetMediaQuery,
} from "app/store/api/mediaApi";

export const AddProductMedia: React.FC<AddMediaProps> = ({ productId }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadMedia, { isLoading, error, isSuccess }] =
    useUploadMediaMutation();
  const [deleteMedia] = useDeleteMediaMutation();
  const { data: media, isLoading: isMediaLoading } = useGetMediaQuery(
    productId ?? 0,
    { skip: !productId } // Важливо пропустити запит, якщо немає productId
  );
  const [uploadStatus, setUploadStatus] = useState<{
    loaded: number;
    total: number;
  }>({ loaded: 0, total: 0 });

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
      alert("ID продукту не знайдено.");
      return;
    }
    setUploadStatus({ loaded: 0, total: selectedFiles.length });

    // Завантажуємо кожен файл окремо
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      try {
        // Визначаємо тип файлу (фото чи відео)
        const type = file.type.startsWith("image") ? "photo" : "video";

        // Завантажуємо файл
        await uploadMedia({
          file,
          productId,
          type,
        }).unwrap();

        // Оновлюємо статус завантаження
        setUploadStatus((prev) => ({
          ...prev,
          loaded: prev.loaded + 1,
        }));
      } catch (err) {
        console.error(`Помилка при завантаженні файлу ${file.name}:`, err);
      }
    }

    // Очищаємо список обраних файлів після завершення
    setSelectedFiles([]);
  };

  const handleDelete = async (type: "photo" | "video") => {
    if (!productId) return;
    try {
      await deleteMedia({ productId, type }).unwrap();
    } catch (err) {
      console.error(`Помилка при видаленні ${type}:`, err);
      alert(`Не вдалося видалити ${type === "photo" ? "фото" : "відео"}`);
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

      {/* Прогрес завантаження */}
      {uploadStatus.total > 0 && uploadStatus.loaded < uploadStatus.total && (
        <div className="mt-2">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{
                width: `${(uploadStatus.loaded / uploadStatus.total) * 100}%`,
              }}
            />
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Завантажено {uploadStatus.loaded} з {uploadStatus.total}
          </p>
        </div>
      )}

      {/* Завантажені медіа */}
      {!isMediaLoading && media && (
        <div className="mt-4">
          <h3 className="font-medium text-gray-800">Завантажено:</h3>
          <div className="grid grid-cols-2 gap-4 mt-2">
            {media.photoUrl && (
              <div className="relative">
                <img
                  src={media.photoUrl}
                  alt="Фото"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <button
                  onClick={() => handleDelete("photo")}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center"
                >
                  🗑
                </button>
              </div>
            )}
            {media.videoUrl && (
              <div className="relative">
                <video
                  src={media.videoUrl}
                  controls
                  className="w-full h-32 object-cover rounded-lg"
                />
                <button
                  onClick={() => handleDelete("video")}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center"
                >
                  🗑
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {isLoading && <p className="mt-2 text-blue-500">Завантаження...</p>}
      {error && <p className="mt-2 text-red-500">Помилка при завантаженні</p>}
      {isSuccess && uploadStatus.loaded === uploadStatus.total && (
        <p className="mt-2 text-green-600">Успішно завантажено!</p>
      )}

      <button
        onClick={handleUpload}
        disabled={selectedFiles.length === 0 || isLoading}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
      >
        Завантажити
      </button>
    </div>
  );
};
