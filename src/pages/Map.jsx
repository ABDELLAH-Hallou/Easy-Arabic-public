import React from 'react';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';

mapboxgl.accessToken = process.env.mapboxgl;



export default class Map extends React.Component {
    componentDidMount() {
      const map = new mapboxgl.Map({
        container: this.mapContainer,
        // style: 'mapbox://styles/mapbox/satellite-v9',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [0, 0],
        zoom: 17
      });
    
      const qatarBounds = [
        [50.75, 24.5], // Southwest coordinates
        [51.75, 26] // Northeast coordinates
      ];
  
      map.fitBounds(qatarBounds, {
        padding: { top: 50, bottom: 50, left: 50, right: 50 }
      });

      map.on('moveend', () => {
        const bounds = map.getBounds();
        const southWest = bounds.getSouthWest();
        const northEast = bounds.getNorthEast();
        const bbox = `${southWest.lng},${southWest.lat},${northEast.lng},${northEast.lat}`;
  
        const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${bbox}.json?types=poi&limit=100&access_token=${mapboxgl.accessToken}`;

        axios.get(geocodeUrl)
          .then(response => {
            const hotels = response.data.features;
            console.log("hotels : ", hotels)    
  
            hotels.forEach(hotel => {
              const marker = new mapboxgl.Marker()
                .setLngLat(hotel.center)
                .addTo(map);
            });
          });
      });

        // Add a search box element to the page
        const searchBox = document.createElement('input');
        searchBox.type = 'text';
        searchBox.placeholder = 'Search';
        searchBox.style.display = 'block';
        searchBox.style.width = '300px';
        searchBox.style.margin = '20px auto';
        searchBox.addEventListener('keydown', e => {
        if (e.keyCode === 13) {
            const searchUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchBox.value}.json?limit=1&access_token=${mapboxgl.accessToken}`;
            axios.get(searchUrl)
            .then(response => {
                const result = response.data.features[0];
                if (result) {
                map.flyTo({
                    center: result.center,
                    zoom: 12
                });
                const marker = new mapboxgl.Marker()
                    .setLngLat(result.center)
                    .addTo(map);
                }
            });
        }
        });
        this.mapContainer.prepend(searchBox);

    }
  
    render() {
      return (
        <div ref={el => this.mapContainer = el} 
            style={{
                height: '470px',
                width: '100%',
                marginBottom:'80px'
            }}
          />
      );
    }
  }