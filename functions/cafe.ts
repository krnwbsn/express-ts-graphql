import type { ICafe } from "../interfaces";

const getCafeList = (data: ICafe) => {
  const { cafeName, city, isLessThan5drinks, pinCode } = data;
  return {
    cafeName,
    city,
    isLessThan5drinks,
    pinCode,
  };
};

export { getCafeList };
