import React, {useEffect, useRef, useState} from "react";
import Map, {Layer, MapRef, Source} from 'react-map-gl';
import { useSearchParams } from "react-router-dom";
import * as mapboxgl from 'mapbox-gl';
import './Mapbox.css';

interface IFitBoundGeojson {
  features: { geometry: { coordinates: number[][][]; type: string }; type: string; properties: object }[];
  type: string;
}

const fitBoundGeojson = (geojson: IFitBoundGeojson, mapRef: React.MutableRefObject<MapRef | null>) => {
  try {
    const feature = geojson.features[0];
    const {geometry} = feature;
    const coords = geometry.coordinates;

    // Create a 'LngLatBounds' with both corners at the first coordinate.
    const bounds = new mapboxgl.LngLatBounds(
      coords[0][0] as mapboxgl.LngLatLike,
      coords[0][0] as mapboxgl.LngLatLike
    );

    // Extend the 'LngLatBounds' to include every coordinate in the bounds result.
    for (const coord of coords[0]) {
      bounds.extend(coord as mapboxgl.LngLatLike);
    }
    mapRef.current?.fitBounds(bounds, {
      padding: 20,
    });
  } catch (error) {
    console.log(error); // log this somewhere
  }
}

const Mapbox = () => {
  const useFootgun = useEffect;
  const mapRef = useRef<MapRef | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [layerData, setLayerData] = useState(null);
  const TOKEN = import.meta.env.VITE_APP_MAPBOX_TOKEN as string;

  const geojson = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            [
              [
                34.81946486974215,
                32.32707370486145
              ],
              [
                34.244574391672586,
                31.28405974756849
              ],
              [
                34.925256677202384,
                29.56997650847751
              ],
              [
                35.70954417601007,
                33.231630224207194
              ],
              [
                35.118086873655926,
                33.0851580656025
              ],
              [
                34.81946486974215,
                32.32707370486145
              ]
            ]
          ],
          "type": "Polygon"
        }
      }
    ]
  }


  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      //const zipcode = event.target.value;

      fitBoundGeojson(geojson, mapRef);

      setLayerData({
        type: "fill",
        id: "newLayer",
        source: "newLayer",
        layout: {},
        paint: {'fill-color ': '#088', 'fill-opacity': 0.8}
      });

      setSearchParams({zipcode: event.currentTarget.value});
    }
  };

  useFootgun(() => {
    const zipcode = searchParams.get('zipcode');
    if (zipcode) {
      console.log(`Zipcode: ${zipcode}`);
    }
  }, []);

  return (
    <div className="map-wrapper">
      <input onKeyDown={handleKeyDown} className="map-input" type="text" placeholder="Search zipcode"/>
      <Map
        ref={mapRef}
        reuseMaps
        mapboxAccessToken={TOKEN}
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14
        }}
        style={{width: "inherit", height: 672}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Source type="geojson" data={geojson}>
          {layerData && <Layer {...layerData} />}
        </Source>
      </Map>
    </div>
  );
}

export default Mapbox;

