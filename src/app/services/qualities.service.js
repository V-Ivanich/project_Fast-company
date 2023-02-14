import httpService from "./http.service";

const qualitiesEndpoint = "quality/";

const qualityService = {
    get: async () => {
        const { data } = await httpService.get(qualitiesEndpoint);
        console.log("data-serviceQual", data);
        return data;
    }
};

export default qualityService;
