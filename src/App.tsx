import { Container, Card, Search } from "./App"
import mobileBg from './assets/pattern-bg-mobile.png';

import iconArrow from './assets/icon-arrow.svg';

function App() {

  return (
    <Container>
      <img 
        className="imgBgMobile"
        src={mobileBg} 
        alt="" 
      />

      <Search>
        <h1>IP Address Tracker</h1>
        <div className="inputDiv">
          <input
            type="search"
          />
          <button>
            <img
              src={iconArrow}
              alt=""
            />
          </button>
        </div>
      </Search>
    
      <Card>
        <div className="info">
          <span>IP ADRESS</span>
          <p>192.101.303.250</p>
        </div>

        <div className="info">
          <span>LOCATION</span>
          <p>Brooklyn, NY 10001</p>
        </div>
        
        <div className="info">
          <span>TIME ZONE</span>
          <p>UTC - 05:00</p>
        </div>

        <div className="info">
          <span>ISP</span>
          <p>SpaceX Starlink</p>
        </div>
      </Card>

      
    </Container>
  )
}

export default App
