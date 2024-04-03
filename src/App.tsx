import { Container, Card, Search, Map } from "./App";
import mobileBg from './assets/pattern-bg-mobile.png';
import deskBg from './assets/pattern-bg-desktop.png';
import iconArrow from './assets/icon-arrow.svg';

import { api } from "./service/api.service";
import { apiKey } from "./service/api.service";

import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export function App() {

  const [ip, setIp] = useState<string>("");
  const [dataIp, setDataIp] = useState<any>({})

  const submit = async() => {

    if(!ip) return
    
    try {
      const response = await api.get(`?apiKey=${apiKey}&ipAddress=${ip}`);
      const data = response.data

      console.log(data)
      setDataIp(data)
    } catch (error) {
      console.log(error)
    }
  }

  //console.log(dataIp.location.lat, dataIp.location.lng)
  return (
    <Container>
      <img 
        className="imgBgMobile"
        src={mobileBg} 
        alt="Background image mobile" 
      />

      <img 
        className="imgBgDesk"
        src={deskBg} 
        alt="Background image desktop" 
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
              alt="svg search"
            />
          </button>
        </div>
      </Search>
    
      <Card>
        <div className="info">
          <span>IP ADDRESS</span>
            {!dataIp.ip ? (
              <p>192.212.174.101</p>
            ):(
              <p>{dataIp.ip}</p>
            )}
        </div>

        <div className="info">
          <span>LOCATION</span>
          {!dataIp.location ? (
          <p>Brooklyn, NY 10001</p>
          ):(
            <>
              <p>{dataIp.location.region},</p> 
              <strong>{dataIp.location.city},</strong> <br/>   
              <strong>{dataIp.location.country }</strong>            
            </>
          )}
        </div>
        
        <div className="info">
          <span>TIME ZONE</span>
          {!dataIp.location ? (
          <p>UTC - 05:00</p>
          ):(
            <p>{dataIp.location.timezone}</p>
          )}
        </div>

        <div className="info">
          <span>ISP</span>
          {!dataIp.location ? (
          <p>SpaceX Starlink</p>
          ):(
            <p>{dataIp.isp}</p>
          )}
        </div>
      </Card>
      <Map>
        <div className="map-Container">
          <MapContainer center={!dataIp.location ? ([51.505, -0.09]): ([dataIp.location.lat, dataIp.location.lng])} zoom={13}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>        
        </div>
      </Map>
      
    </Container>
  )
}

