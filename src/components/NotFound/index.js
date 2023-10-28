// Write your code here
import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <Header />
    <div className="not-found-content">
      <div className="not-found-image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
          className="not-found-image"
          alt="not found"
        />
        <h1 className="not-found-heading">Lost Your Way?</h1>
        <p className="not-found-description">
          Sorry, we cannot find that page. You will find lots to explore on the home page
        </p>
      </div>
    </div>
  </div>
)

export default NotFound
