import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

interface CoordinatesProps {
  latitude: number,
  longitude: number
}

const EventMap: React.FC<CoordinatesProps> = ({ longitude, latitude }) => {
  const [viewport, setViewport] = useState({
    height: 400,
    zoom: 8
  });

  return (
    <ReactMapGL
      {...viewport}
      width='100%'
      latitude={latitude}
      longitude={longitude}
      onViewportChange={setViewport}
      mapboxApiAccessToken="pk.eyJ1Ijoia2FkdWxuMiIsImEiOiJjazV2ZTE4Y3AwZDlxM2dwb3d3azN6cThpIn0.--z5tD1G1_e10WVAKAIhSg"
    />
  )
}

export default EventMap;