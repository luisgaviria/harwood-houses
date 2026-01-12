import fetchApi from "$lib/utils/strapi.js";

export const load = async () => {
  const data = await fetchApi({
    endpoint: "apply",
    query: {
      populate: "*",
    },
    wrappedByKey: "data",
    t: false,
  });

  return data;
};
