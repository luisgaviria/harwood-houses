import fetchApi from "$lib/utils/strapi";
export const load = async () => {
    const data = await fetchApi({
        endpoint: "layout",
        query: {
            'populate[leftfooter][populate][menutitle][populate][link][populate]': "*",
            'populate[rightfooter][populate][menutitle][populate][link][populate]': "*"
            },
        wrappedByKey: "data",
        wrappedByList: false
    });

    console.log(data);
    
    return {...data};
};
