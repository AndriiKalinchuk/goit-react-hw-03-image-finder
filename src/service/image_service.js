import axios from 'axios';

const API_KEY = '36213838-e372b0534fd2b886e594c2bd9';
axios.defaults.baseURL = 'https://pixabay.com/api/';

axios.defaults.params = {
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const getImages = async (
  query,
  currentPage,
  image_type,
  orientation,
  per_page
) => {
  const { data } = await axios.get(
    `?q=${query}&page=${currentPage}&key=${API_KEY}&image_type=${image_type}&orientation=${orientation}&per_page=${per_page}`
  );

  return data;
};
