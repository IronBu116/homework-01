import httpService from "./http.service";

const qualityEndpoint = "quality/";

const qualityService = {
  update: async (id, content) => {
    const { data } = await httpService.put(qualityEndpoint + id, content);
    console.log(data);
    return data;
  },
  get: async (id) => {
    const { data } = await httpService.get(qualityEndpoint + id);
    console.log(data);
    return data;
  },
  fetchAll: async () => {
    const { data } = await httpService.get(qualityEndpoint);
    console.log(data);
    return data;
  },
  create: async (content) => {
    const { data } = await httpService.post(qualityEndpoint, content);
    return data;
  },
  delete: async (id) => {
    const { data } = await httpService.delete(qualityEndpoint + id);
    return data;
  },
};

export default qualityService;
