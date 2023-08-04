import './index.css'
import Header from '../Header'

const Home = () => (
  <div className="bg">
    <Header />
    <div className="dfslk">
      <div className="afjklds">
        <h1>Clothes That Get YOU Noticed</h1>
        <p className="para">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a maker of the era and
          we are in revolution. Your fashion makes you been seen and heard that
          way you are. So, Celebrate the seasons new and exiting fashion in your
          own way.
        </p>
        <button className="shop-btn">Shop Now</button>
      </div>
      <img
        className="jkldfas"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png "
        alt=" clothes that get you noticed"
      />
    </div>
  </div>
)

export default Home
