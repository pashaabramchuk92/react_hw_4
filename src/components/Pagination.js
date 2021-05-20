const Pagination = ({ total, limit, page, setPage }) => {

  const pageArr = [];
  for (let i = 1; i <= Math.ceil(total/limit); i++) {
    pageArr.push(i);
  }

  return (
    <ul className="uk-pagination uk-flex-center uk-flex-middle" uk-margin="true">
      <li>
        {page > 1 && <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setPage(page - 1)
          }}
        ><span className="uk-icon uk-pagination-previous">
          <svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg" data-svg="pagination-previous">
            <polyline fill="none" stroke="#000" strokeWidth="1.2" points="6 1 1 6 6 11"></polyline>
          </svg>
        </span></a>}
      </li>
      {pageArr.map(x => {
        const curr = page;
        if(curr === x) {
          return <li key={x} className="uk-active"><span>{x}</span></li>
        }
        return (
          <li key={x}>
            <a
              href="/"
              value={x}
              onClick={(e) => {
                e.preventDefault();
                setPage(e.target.getAttribute('value'));
              }}
            >{x}</a>
          </li>
        )
      })}
      <li>
        {page < pageArr.length && <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setPage(page + 1)
          }}
        ><span className="uk-icon uk-pagination-next">
          <svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg" data-svg="pagination-next">
            <polyline fill="none" stroke="#000" strokeWidth="1.2" points="1 1 6 6 1 11"></polyline>
          </svg>
        </span></a>}
      </li>
    </ul>
  )
}

export default Pagination;