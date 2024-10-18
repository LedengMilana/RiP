import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    title: '',
    description: '',
    kind: 'Dog',
    breed: '',
    age: '',
    gender: 'M',
    location: '',
    price: '',
    image: '',
  },
  reducers: {
    setFormData: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetFormData: (state) => {
      return {
        title: '',
        description: '',
        kind: 'Dog',
        breed: '',
        age: '',
        gender: 'M',
        location: '',
        price: '',
        image: '',
      };
    },
  },
});

export const { setFormData, resetFormData } = modalSlice.actions

export default modalSlice.reducer