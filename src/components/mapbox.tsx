import Map from 'react-map-gl';

const mapbox = () => {
  return (
    <div>
      <Map
        mapboxAccessToken="pk.eyJ1IjoiandlYmRldiIsImEiOiJjbDc0ZmU1NjAwOW90M250aDJtZG5tMmJiIn0.YdqgvikWgQKr1Yvq45N75Q"
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14
        }}
        style={{width: "inherit", height: 672}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </div>
  );
}

export default mapbox;