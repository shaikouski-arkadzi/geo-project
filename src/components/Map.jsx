import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useGeolocation } from '../hooks/useGeolocation';
import { useUrlPosition } from '../hooks/useUrlPosition';
import { useCities } from '../state/Cities.context';
import Button from './Button';
import ChangeCenter from './ChangeCenter';
import DetectClick from './DetectClick';
import styles from './Map.module.css';

function Map() {
  const [mapPosition, setMapPosition] = useState([40, 0]);

  const { cities } = useCities();

  const { isLoading: isLoadingPosition, position: geolocationPosition, getPosition } = useGeolocation();

  const [mapLat, mapLng] = useUrlPosition();

  useEffect(() => {
    if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
  }, [mapLat, mapLng]);

  useEffect(() => {
    if (geolocationPosition) setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
  }, [geolocationPosition]);

  return (
    <div className={styles.mapContainer}>
      {!geolocationPosition && (
        <Button type="position" onClick={getPosition}>
          {isLoadingPosition ? 'Loading...' : 'Use your position'}
        </Button>
      )}

      <MapContainer center={mapPosition} zoom={6} scrollWheelZoom className={styles.map}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map(city => (
          <Marker position={[city.position.lat, city.position.lng]} key={city.id}>
            <Popup>
              <span>{city.emoji}</span> <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}

        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

export default Map;
