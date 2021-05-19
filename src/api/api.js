// const getData = async (url, page, limit, order, query) => {
//   const res = await fetch(`${url}?_page=${page}&_limit=${limit}&_sort=title&_order=${order}&q=${query}`);
//   return await res.json();
// }

const getData = async (url) => {
  const res = await fetch(url);
  return await res.json();
}

const getTotalCount = async (url, page) => {
  const res = await fetch(`${url}?_page=${page}`);
  return res.headers.get('X-Total-Count');
}

const getPageData = async (url, id) => {
  const res = await fetch(`${url}/${id}`);
  return res.json();
}

const getMoreData = async (url, start, end, order) => {
  const res = await fetch(`${url}?_start=${start}&_end=${end}&_sort=id&_order=${order}`);
  return await res.json();
}

export {
  getData,
  getTotalCount,
  getMoreData,
  getPageData
}