import { baseURL } from "../constant";
import { getCafeList } from "../functions/cafe";
import "isomorphic-fetch";

const resolvers = {
  Query: {
    cafes: async () => {
      const data = await fetch(`${baseURL}/cafes.json`);
      const dataJson = await data.json();
      const keys = Object.keys(dataJson);
      const mapsKeys = keys.map(function (item) {
        const cafeData = dataJson[item];
        const getCafesData = getCafeList(cafeData);
        return getCafesData;
      });
      return mapsKeys;
    },
  },
};

export { resolvers };
