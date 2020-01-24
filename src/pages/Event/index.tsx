import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

import { BackButton, ArrowLeft } from "./style";

const Event: React.FC = () => {
  const [event, setEvent] = useState();
  const {
    state: { url }
  } = useLocation();
  const history = useHistory();

  useEffect(() => {
    async function fetchEvent() {
      const data = await fetch(url);
      const event = await data.json();

      console.log(event);
      setEvent(event);
    }

    fetchEvent();
  }, [url]);

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
