import ApiService from './api-service';

const URL_TAG = '/tag';

const getTags = async () => {
  const response = await ApiService.get(URL_TAG);
  return response.data;
};
export {getTags};