const getData = async (page, limit, order, query) => {
  const res = await fetch(
    `${process.env.REACT_APP_API_URL}?_page=${page}&_limit=${limit}&_sort=title&_order=${order}
    &title_like=${query}`);
  return await res.json();
}

const getTotalCount = async (page) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}?_page=${page}`);
  return res.headers.get('X-Total-Count');
}

const getPageData = async (id) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/${id}`);
  return res.json();
}

const getMoreData = async (start, end, order) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}?_start=${start}&_end=${end}&_sort=title&_order=${order}`);
  return await res.json();
}

const getPostComments = async (id) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/${id}?_embed=comments`);
  return await res.json();
}

const postNewComment = async (id, data) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/${id}/comments`, {
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