import { create } from "zustand";

interface PhotoStore {
  photo: string;
  addPhoto: (photo: string) => void;
  removePhoto: (photo: string) => void;
  clearPhotos: () => void;
}

export const usePhotoStore = create<PhotoStore>((set) => ({
  photo: "",
  addPhoto: (photo) => set(() => ({ photo })),
  removePhoto: (photo) => set((state) => ({ photo: state.photo === photo ? "" : state.photo })),
  clearPhotos: () => set({ photo: "" }),
}))

export const usePhoto = () => {
  const [
    photo,
    addPhoto,
    removePhoto,
    clearPhotos
  ] = usePhotoStore(
    (state) => [
      state.photo, 
      state.addPhoto, 
      state.removePhoto, 
      state.clearPhotos
    ]
  );

  return {
    photo,
    addPhoto,
    removePhoto,
    clearPhotos
  }
}