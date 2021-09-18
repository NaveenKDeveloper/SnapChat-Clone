import { createSlice } from '@reduxjs/toolkit';

export const CameraSlice = createSlice({
  name: 'Camera',
  initialState: {
    cameraImage: null,
  },
  reducers: {
    setCameraImage: (state, action) => {  //modify state in redux
      state.cameraImage = action.payload;
    },
    resetCameraImage: (state) => {
        state.cameraImage = null;
      },
  },
});

export const { setCameraImage, resetCameraImage } = CameraSlice.actions;

export const selectcameraImage = (state) => state.camera.cameraImage;

export default CameraSlice.reducer;