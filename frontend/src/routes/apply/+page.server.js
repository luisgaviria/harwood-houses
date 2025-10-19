import { dev } from "$app/environment";
import fetchApi from '$lib/utils/strapi.js';

export const load = async () => {
    const data =  await fetchApi({
    endpoint: 'apply',
    query: {
      populate: '*' // Populate all fields, including nested ones
    },
    wrappedByKey: 'data',
    wrappedByList: false
  });

  return data;
};
// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
