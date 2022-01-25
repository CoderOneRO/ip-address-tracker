import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from "leaflet";
import logoLocation from "./images/icon-location.svg";

function Map({ ipData, isLoaded, error }) {

    const newMapIcon = L.icon({ iconUrl: logoLocation, iconSize: [40, 50] });

    return (
        <div className="map">
            {isLoaded ? (
            <MapContainer
                center={error ? [51.505, -0.09] : [ipData.location.lat, ipData.location.lng]}
                zoom={13}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {!error ? (
                <Marker
                    icon={newMapIcon}
                    position={[ipData.location.lat, ipData.location.lng]}
                ></Marker>
                ) : null}
            </MapContainer>
            ) : ( "Loading map...")}
        </div>
    );
}

export default Map;