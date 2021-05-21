const getData = async (url, page, limit, order, query) => {
  try {
    const res = await fetch(
      `${url}?_page=${page}&_limit=${limit}&_sort=title&_order=${order}
      &title_like=${query}`);
    return await res.json();
  } catch (error) {
    console.log(`Error: ${error}`);
  }
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
  const res = await fetch(`${url}?_start=${start}&_end=${end}&_sort=title&_order=${order}`);
  return await res.json();
}

const getPostComments = async (url, id) => {
  const res = await fetch(`${url}/${id}?_embed=comments`);
  return await res.json();
}

const postNewComment = async (url, id, data) => {
  const res = await fetch(`${url}/${id}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return await res.json();
}

export {
  getData,
  getTotalCount,
  getMoreData,
  getPageData,
  getPostComments,
  postNewComment
}