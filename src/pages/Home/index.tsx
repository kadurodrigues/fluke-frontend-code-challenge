import React, { useState, useEffect } from "react";
import api from "../../services/api";
import EventsList from "../../components/EventsList";
import Filter from "../../components/Filter";

const Home: React.FC = () => {
  const [events, setEvents] = useState();
  const [eventsFiltered, setEventsFiltered] = useState();

  useEffect(() => {
    async function fetchEvents() {
      const [opened, closed] = await Promise.all([api("open"), api("closed")]);
      const data = [...opened.events, ...closed.events];
      setEvents(data);
      setEventsFiltered(data);
    }

    fetchEvents();
  }, []);

  const filterByStatusOptions = {
    title: "Status",
    options: [
      { value: "all", label: "All" },
      { value: "opened", label: "Opened" },
      { value: "closed", label: "Closed" }
    ],
    handleFilterChange: (event: any) => handleFilterStatus(event.target.value)
  };

  const handleFilterStatus = (filter: string) => {
    if (filter === "closed") {
      setEventsFiltered(() => events.filter((event: any) => event.closed));
    } else if (filter === "opened") {
      setEventsFiltered(() => events.filter((event: any) => event.closed === undefined)
      );
    } else {
      setEventsFiltered(events);
    }
  };

  return (
    <>
      <Filter {...filterByStatusOptions} />
      <EventsList events={eventsFiltered} />
    </>
  );
};

export default Home;
