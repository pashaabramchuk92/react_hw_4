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
        ><span className="uk-icon uk-pagination-previous" uk-pagination-previous="true">
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
        ><span className="uk-icon uk-pagination-next" uk-pagination-next="true">
          </span></a>}
      </li>
    </ul>
  )
}

export default Pagination;