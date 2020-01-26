import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { eventAPI } from '../../services/apis';
import EventMap from '../../components/EventMap';
import { BackButton, ArrowLeft, Title } from "./style";

const Event: React.FC = () => {
  const [event, setEvent] = useState();
  const [coordinates, setCoordinates] = useState();
  const {
    state: { eventId }
  } = useLocation();
  const history = useHistory();

  useEffect(() => {
    async function fetchEvent() {
      const event = await eventAPI(eventId);
      setEvent(event);

      const [longitude, latitude ] = event.geometries[0].coordinates;
      setCoordinates({ longitude, latitude })
    }

    fetchEvent();
  }, [eventId]);

  return (
    <>
      <BackButton onClick={() => history.push("/")}>
        <ArrowLeft />
        Back
      </BackButton>
      <Title>{event?.title}</Title>
      <EventMap {...coordinates} />
    </>
  );
};

export default Event;
