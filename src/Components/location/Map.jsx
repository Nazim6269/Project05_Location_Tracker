import L from "leaflet";
import PropTypes from "prop-types";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const icon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const MapComponent =({lat,lng,zone})=> {
  
  return (
    <div className="h-[650px] rounded-3xl bg-gradient-to-br from-slate-800 via-slate-900 to-black shadow-xl">

      <MapContainer
        center={[lat, lng]}
        zoom={13}
        className="h-full w-full rounded-3xl"
      >
        <TileLayer
          attribution="© OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[lat, lng]} icon={icon}>
          <Popup>
            <b>{zone}</b> <br />
            Live Location
          </Popup>
        </Marker>
      
      </MapContainer>

      
    </div>
  );
}

//definging prop types
MapComponent.propTypes={
  lat:PropTypes.number,
  lng:PropTypes.number,
  zone:PropTypes.string
}

export default MapComponent