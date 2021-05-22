const SortPosts = ({ setOrder }) => {
  return (
    <select
      className="uk-select uk-width-small uk-margin-auto-left"
      onChange={(e) => setOrder(e.target.value)}
    >
      <option value="asc">ASC</option>
      <option value="desc">DESC</option>
    </select>
  )
}

export default SortPosts;