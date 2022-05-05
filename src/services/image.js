import ApiService from './api-service';

const URL_IMAGE = '/image';

const getImages = async () => {
  const response = await ApiService.get(URL_IMAGE);
  return response.data;
};

export { getImages };