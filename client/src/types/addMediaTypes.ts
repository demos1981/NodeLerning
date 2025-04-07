export interface AddMediaProps {
  onUpload: (files: File[]) => void;
  productId?: number | null;
}
