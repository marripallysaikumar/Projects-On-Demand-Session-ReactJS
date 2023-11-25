import './index.css'

const TabItem = props => {
  const {tabDetails, changeId, active} = props
  const {displayText, tabId} = tabDetails

  const changeTab = () => {
    changeId(tabId)
  }

  const ss = active ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container">
      <button type="button" className={`tab-btn ${ss}`} onClick={changeTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
