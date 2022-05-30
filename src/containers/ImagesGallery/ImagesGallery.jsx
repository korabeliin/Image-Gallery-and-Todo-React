import React, {useCallback, useMemo} from 'react';
import ImagesList from '../../components/ImagesGallery/ImagesList/ImagesList';
import ImagesSearchForm from '../../components/ImagesGallery/ImagesSearchForm/ImagesSearchForm';
import {searchImages} from '../../api/imagesSearchAPI';
import {useDispatch, useSelector} from 'react-redux';
import {
    SEARCH_IMAGES_ERROR, SEARCH_IMAGES_START,
    SEARCH_IMAGES_SUCCESS, IMAGES_PAGINATION_START,
    IMAGES_PAGINATION_SUCCESS, IMAGES_PAGINATION_ERROR} from '../../redux/slices/imagesGallerySlice';

import Pagination from "../../components/common/Pagination/Pagination";

const ImagesGallery = () => {

    const imagesGal = useSelector(state => {
        return ({
            images: state.gallery.images,
            totalImages: state.gallery.totalImages,
            loading: state.gallery.loading,
            page: state.gallery.page,
            searchQuery: state.gallery.searchQuery,
        });
    });

  const dispatch = useDispatch();

  const maxPages = useMemo(() => {
      const maxPages = Math.ceil(imagesGal.totalImages / 10);
      return maxPages > 50 ? 50 : maxPages;
  }, [imagesGal.totalImages])

  const handleSubmitSearch = useCallback(
      async searchQuery => {
  if(imagesGal.loading) return;

    try {
      dispatch(SEARCH_IMAGES_START({searchQuery: searchQuery}));
      const imagesData = await searchImages(searchQuery);
      dispatch(SEARCH_IMAGES_SUCCESS({
        images: imagesData.images,
        totalImages: imagesData.total,
      }))
    } catch(error) {
        dispatch(SEARCH_IMAGES_ERROR(error.message));
    }
  }, [imagesGal.loading]);

  const handleChangePage = useCallback( async newPage => {
      if(imagesGal.page === newPage) return;
      try {
          dispatch(IMAGES_PAGINATION_START());
          const imagesData = await searchImages(imagesGal.searchQuery, newPage);
          dispatch(IMAGES_PAGINATION_SUCCESS({
              images: imagesData.images,
              totalImages: imagesData.total,
              newPage,
          }));
      } catch (e) {
          dispatch(IMAGES_PAGINATION_ERROR(e.message));
      }
  }, [imagesGal.searchQuery, imagesGal.page])

  return (
    <div>
      <ImagesSearchForm 
        onSubmit={handleSubmitSearch}
        searchQuery={imagesGal.searchQuery}
      />
      <ImagesList
          images={imagesGal.images}
          loading={imagesGal.loading} />
      <Pagination
            page={imagesGal.page}
            maxPages={maxPages}
            onChangePage={handleChangePage} />
    </div>
  );
};

export default ImagesGallery;