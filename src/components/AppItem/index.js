// Write your code here
import './index.css'

const AppItem = props => {
  const {eachApp} = props
  const {imageUrl, appName} = eachApp

  return (
    <li className="app-container">
      <img className="app-image" src={imageUrl} alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
