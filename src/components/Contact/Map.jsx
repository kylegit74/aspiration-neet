import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = { lat: 22.5726, lng: 88.3639 };

function MyGoogleMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: "ba9AxfeNQ0YBx1tdhEFKt0nqbq8NS-6Xyw28fIISFN8",
      version: "weekly",
      libraries: ["marker"],
    });

    loader.load().then(() => {
      const { Map } = window.google.maps;
      const { AdvancedMarkerElement } = window.google.maps.marker;

      const map = new Map(mapRef.current, {
        center,
        zoom: 12,
      });

      new AdvancedMarkerElement({
        map,
        position: center,
        title: "Our Location",
      });
    }).catch((error) => {
      console.error("Google Maps API failed to load:", error);
    });
  }, []);

  return <div ref={mapRef} style={containerStyle}></div>;
}

export default MyGoogleMap;
