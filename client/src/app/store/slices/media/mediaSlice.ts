import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MediaState } from "types/addMediaTypes";
const initialState: MediaState = {
  loading: false,
  error: null,
  uploaded: [],
};

// thunk для завантаження одного файлу
export const uploadMedia = createAsyncThunk<
  string, // повертає URL
  { file: File; productId: number }
>("media/upload", async ({ file, productId }, { rejectWithValue }) => {
  const formData = new FormData();
  const key = file.type.startsWith("image") ? "photo" : "video";
  formData.append(key, file);

  const endpoint = `/api/items/${productId}/${key}`;

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error("Не вдалося завантажити медіа");
    }

    const data = await res.json();
    return data.photoUrl || data.videoUrl;
  } catch (err: any) {
    return rejectWithValue(err.message);
  }
});

const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    resetMedia: (state) => {
      state.uploaded = [];
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadMedia.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadMedia.fulfilled, (state, action) => {
        state.loading = false;
        state.uploaded.push(action.payload);
      })
      .addCase(uploadMedia.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetMedia } = mediaSlice.actions;
export default mediaSlice.reducer;
