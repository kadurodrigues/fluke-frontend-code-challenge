import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { eventAPI } from '../../services/apis';
import EventMap from '../../components/EventMap';
import { Container, LinkStyled, ArrowLeft, Title } from "./style";

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
    <Container>
      <LinkStyled
        to={{
          pathname: '/',
          state: { from: history.location.pathname }
        }}
      >
        <ArrowLeft />
        Back
      </LinkStyled>
      <Title>{event?.title}</Title>
      <EventMap {...coordinates} />
    </Container>
  );
};

export default Event;
