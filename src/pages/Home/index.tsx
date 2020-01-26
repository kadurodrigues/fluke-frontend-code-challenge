import React from 'react';
import useFetchEvents from '../../helpers/fetchEvents';

import EventsList from '../../components/EventsList';
import StatusFilter from '../../components/StatusFilter';
import CategoriesFilter from '../../components/CategoriesFilter';
import DateFilter from '../../components/DateFilter';
import Loader from '../../components/Loader';

import { Filters } from './styles';

const Home: React.FC = () => {
  const {
    events,
    eventsFiltered,
    isEventsFiltered,
    isFetchingData,
  } = useFetchEvents()

  if (isFetchingData) return <Loader />
  
  return (
    <>
      <Filters>
        <StatusFilter />
        <CategoriesFilter />
        <DateFilter />
      </Filters>
      { isEventsFiltered ? (
        <EventsList events={eventsFiltered} />
      ) : (
        <EventsList events={events} />
      )}
    </>
  );
};

export default Home;
