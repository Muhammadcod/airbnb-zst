import { dataList } from "../data";

let cache = new Map();

async function getData(url, pageNumber) {
  if (url === "/listings") {
    return await getAirBnbListings(pageNumber);
  } else {
    throw Error("Not implemented");
  }
}

export function fetchData(url, { params }) {
  if (!cache.has(url)) {
    cache.set(url, getData(url, params?.pageNumber ?? 1));
  }
  return cache.get(url);
}

async function getAirBnbListings(pageNumber) {
  const delay = Math.random() * 1000 + 500;
  const totalPage = Math.ceil(dataList.length / 10);
  await new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
  const docs = dataList.slice((pageNumber - 1) * 10, pageNumber * 10);

  return {
    data: {
      docs,
      totalPage,
      currentPage: pageNumber,
      hasMore: totalPage !== pageNumber,
    },
  };
}
