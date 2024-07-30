import { Marker } from 'react-leaflet/Marker'
import { Popup } from 'react-leaflet/Popup'
import { TileLayer } from 'react-leaflet/TileLayer'
import { MapContainer } from 'react-leaflet/MapContainer'





export const MapaU = () =>{
    return(
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    )
}