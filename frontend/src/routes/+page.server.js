import fetchApi from "$lib/utils/strapi";
export const load = async () => {
    const data = await fetchApi({
        endpoint: "home",
        query: {
            'populate[texts][populate]': '*',
            'populate[GridComponents][populate][Paragraphs][populate]': '*',
            'populate[GridGallery][populate]': '*',
            'populate[applynowsection][populate]': '*'
            },
        wrappedByKey: "data",
        wrappedByList: false
    });
    
    return {...data};
};
