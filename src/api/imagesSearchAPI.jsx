const API_KEY = '24849264-d08f72a499b0a222dfd5d523c';
const URL = 'https://pixabay.com/api/';

export const searchImages = async (query, page = 1) => {
  const res = await fetch(`${URL}?key=${API_KEY}&q=${query}&per_page=10&page=${page}`);
  if (!res.ok) return {images: [], total: 0};

  const result = await res.json();
  if (!result.hits && result.total) return { images: [], total: 0 };

  const images = result.hits.map(image => ({
    id: image.id || -1,
    url: image.largeImageURL || '',
    alt: image.tags,
  }))

  const total = result.total || 0;
  return {images, total};
}
