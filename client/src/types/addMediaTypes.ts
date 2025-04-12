export interface AddMediaProps {
  onUpload: (files: File[]) => void;
  productId?: number | null;
}

export interface MediaState {
  loading: boolean;
  error: string | null;
  uploaded: string[]; // список URL завантажених файлів
}
