import fetchApi from '$lib/utils/strapi.js';
export const load = async () => {
    const data =  await fetchApi({
    endpoint: 'about',
    query: {
      populate: '*'
    },
    wrappedByKey: 'data',
    wrappedByList: false
  });

  return data;
};