import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchQuery: '',
  images: [],
  totalImages: 0,
  error: '',
  loading: false,
  page: 1,
}

export const imagesGallerySlice = createSlice({
  name: 'imagesGallery',
  initialState,
  reducers: {
    SEARCH_IMAGES_START: (state, action) => {
      return {
        ...state,
        loading: true,
        searchQuery: action.payload.searchQuery,
      }
    },
    SEARCH_IMAGES_SUCCESS: (state, action) => {
      return {
        ...state,
        loading: false,
        images: action.payload.images,
        totalImages: action.payload.totalImages
      }
    },
    SEARCH_IMAGES_ERROR: (state, action) => {
      return {
        ...state,
        loading: true,
        searchQuery: '',
        totalImages: 0,
        error: action.payload
      }
    },
    IMAGES_PAGINATION_START: (state, action) => {
      return {
        ...state,
        error: action.payload
      }
    },
    IMAGES_PAGINATION_SUCCESS: (state, action) => {
      return {
        ...state,
        page: action.payload.newPage,
        images: action.payload.images,
        totalImages: action.payload.totalImages,
      }
    },
    IMAGES_PAGINATION_ERROR: (state, action) => {
      return {
        ...state,
        error: action.payload
      }
    },
  }
})

export const { 
  SEARCH_IMAGES_START, SEARCH_IMAGES_SUCCESS,
  SEARCH_IMAGES_ERROR, IMAGES_PAGINATION_START,
  IMAGES_PAGINATION_SUCCESS, IMAGES_PAGINATION_ERROR} = imagesGallerySlice.actions;

export default imagesGallerySlice.reducer;


