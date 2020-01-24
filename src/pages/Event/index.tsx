import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { eventAPI } from '../../services/apis';

import { BackButton, ArrowLeft } from "./style";

const Event: React.FC = () => {
  const [event, setEvent] = useState();
  const {
    state: { eventId }
  } = useLocation();
  const history = useHistory();

  useEffect(() => {
    async function fetchEvent() {
      const event = await eventAPI(eventId);
      setEvent(event);
    }

    fetchEvent();
  }, [eventId]);

  return (
    <>
      <BackButton onClick={() => history.push("/")}>
        <ArrowLeft />
        Back
      </BackButton>
      <h1>{event?.title}</h1>
    </>
  );
};

export default Event;
