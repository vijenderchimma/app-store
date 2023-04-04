// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTab, changeTab, isActive} = props
  const {displayText, tabId} = eachTab

  const onChangeTabItem = () => {
    changeTab(tabId)
  }

  const isActiveClassName = isActive ? 'tab-button-styling' : 'tab-button'

  return (
    <li className="tab-list-item">
      <button
        type="button"
        className={isActiveClassName}
        onClick={onChangeTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
