import { Container, Card, Search, Map } from "./App";
import mobileBg from './assets/pattern-bg-mobile.png';
import deskBg from './assets/pattern-bg-desktop.png';
import iconArrow from './assets/icon-arrow.svg';
import { api } from "./service/api.service";
import { apiKey } from "./service/api.service";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

import svgIcon from './assets/marker-svgrepo-com.svg';

export function App() {

  const [ip, setIp] = useState<string>("");
  const [dataIp, setDataIp] = useState<any>({})

  const Submit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(!ip) return
    
    try {
      const response = await api.get(`?apiKey=${apiKey}&ipAddress=${ip}`);
      const data = response.data
      //console.log(data)
      setDataIp(data)
    } catch (error) {
      console.log(error)
    }
  }

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
        <form onSubmit={(e) => {Submit(e)}}>
          <h1>IP Address Tracker</h1>
          <div className="inputDiv">
            <input
              type="search"
              placeholder="Search for any IP address or domain"
              onChange={(e) => setIp(e.target.value)}
            />
            <button type="submit">
              <img
                src={iconArrow}
                alt="svg search"
              />
            </button>
          </div>
        </form>
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
          <MapContainer 
            key={dataIp.location ? dataIp.location.lat + dataIp.location.lng : 'default'} 
            center={!dataIp.location ? [40.621806, -73.970135] : [dataIp.location.lat, dataIp.location.lng]} zoom={12}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker 
                position={!dataIp.location ? [40.621806,-73.970135] : [dataIp.location.lat, dataIp.location.lng]}
                icon={new Icon({
                  iconUrl: svgIcon,
                })}
              >
              <Popup>
                <p className="point">The location of<br/> your IP address.</p>
              </Popup>
            </Marker>
          </MapContainer>        
        </div>
      </Map>
    </Container>
  )
}