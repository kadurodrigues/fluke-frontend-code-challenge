import React, { useState, useEffect } from 'react';
import { eventsAPI, categoriesAPI } from '../../services/apis';
import EventsList from '../../components/EventsList';
import Filter from '../../components/Filter';

import { FiltersWrapper } from './styles';

interface Category {
  id: number;
  title: string;
}

const Home: React.FC = () => {
  const [events, setEvents] = useState();
  const [categories, setCategories] = useState([]);
  const [eventsFiltered, setEventsFiltered] = useState();

  useEffect(() => {
    async function fetchEvents() {
      const [opened, closed, categoriesData] = await Promise.all([
        eventsAPI('open'),
        eventsAPI('closed'),
        categoriesAPI()
      ]);

      setEvents([...opened.events, ...closed.events]);
      setEventsFiltered([...opened.events, ...closed.events]);
      setCategories(() => categoriesData.categories.map((category: Category) => ({
          value: category.id,
          label: category.title
        }))
      );
    }

    fetchEvents();
  }, []);

  const statusFilter = {
    title: 'Status',
    options: [
      { value: 'all', label: 'All' },
      { value: 'opened', label: 'Opened' },
      { value: 'closed', label: 'Closed' }
    ],
    handleFilterChange: (event: any) => handleFilterStatus(event.target.value)
  };

  const categoriesFilter = {
    title: 'Categories',
    width: '150px',
    options: [...categories],
    handleFilterChange: (event: any) => handleFilterCategories(event.target.value)
  };

  const handleFilterStatus = (filter: string) => {
    if (filter === 'closed') {
      setEventsFiltered(() => events.filter((event: any) => event.closed));
    } else if (filter === 'opened') {
      setEventsFiltered(() =>
        events.filter((event: any) => event.closed === undefined)
      );
    } else {
      setEventsFiltered(events);
    }
  };

  const handleFilterCategories = (categorieId: number) => {
    setEventsFiltered(() =>
      events.filter((event: any) => event.categories[0].id === Number(categorieId))
    )
  };

  return (
    <>
      <FiltersWrapper>
        <Filter {...statusFilter} />
        <Filter {...categoriesFilter} />
      </FiltersWrapper>
      <EventsList events={eventsFiltered} />
    </>
  );
};

export default Home;
