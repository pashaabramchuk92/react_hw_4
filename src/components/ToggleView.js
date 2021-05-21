const ToggleView = ({ viewGrid, handleToggleView }) => {

  const activeClassGrid = viewGrid ? 'uk-active' : '';
  const activeClassList = viewGrid ? '' : 'uk-active';
  
  return (
    <div className="uk-button-group uk-margin-left">
      <button
        className={"uk-button uk-button-default" + activeClassGrid}
        onClick={handleToggleView}
      >
        <span uk-icon="icon:  grid"></span>
      </button>
      <button
        className={"uk-button uk-button-default" + activeClassList}
        onClick={handleToggleView}
      >
        <span uk-icon="icon:  list"></span>
      </button>
    </div>
  )
}

export default ToggleView;