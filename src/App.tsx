import { Container, Card, Search } from "./App";
import mobileBg from './assets/pattern-bg-mobile.png';
import deskBg from './assets/pattern-bg-desktop.png';
import iconArrow from './assets/icon-arrow.svg';

import { api } from "./service/api.service";
import { apiKey } from "./service/api.service";

import { useState } from "react";

function App() {

  const [ip, setIp] = useState<string>();
  const [dataIp, setDataIp] = useState<any>({})

  const submit = async() => {
    
    try {
      const response = await api.get(`=${ip}`);
      const data = response.data

      console.log(data)
      setDataIp(data)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(ip)
  return (
    <Container>
      <img 
        className="imgBgMobile"
        src={mobileBg} 
        alt="Background image" 
      />

      <img 
        className="imgBgDesk"
        src={deskBg} 
        alt="Background image" 
      />

      <Search>
        <h1>IP Address Tracker</h1>
        <div className="inputDiv">
          <input
            type="search"
            placeholder="Search for any IP address or domain"
            onChange={(e) => setIp(e.target.value)}
          />
          <button type="submit" onClick={submit}>
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
            {!dataIp.ip ? (
              <p>192.212.174.101</p>
            ):(
              <p>{dataIp.ip}</p>
            )}
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
