import ApiService from './api-service';

const URL_TAG = '/tag';

const getTags = async () => {
  const response = await ApiService.get(URL_TAG);
  return response.data;
};

const tagImage = async (id, tagId, data) => {
    const response = await ApiService.patch(`/mural/${id}/tag/${tagId}`, data);
    return response.data;
};

export { getTags, tagImage};