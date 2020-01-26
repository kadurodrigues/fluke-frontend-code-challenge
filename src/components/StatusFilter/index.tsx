import React from 'react';
import Filter from '../Filter';
import { useDispatch, useSelector } from 'react-redux';
import { FILTER_EVENTS } from '../../utils/constants';
import { RootReducer } from '../../utils/types';

const StatusFilter: React.FC = () => {
  const { events } = useSelector((state: RootReducer) => state.eventsReducer);
  const dispatch = useDispatch();

  const filterOptions = {
    title: 'Status',
    options: [
      { value: 'all', label: 'All' },
      { value: 'opened', label: 'Opened' },
      { value: 'closed', label: 'Closed' }
    ],
    handleFilterChange: (event: any) => handleFilterStatus(event.target.value)
  };

  const handleFilterStatus = (status: string) => {
    const eventsFiltered = status === 'all'
      ? [...events]
      : status === 'closed'
        ? [...events.filter((event: any) => event.closed)]
        : [...events.filter((event: any) => event.closed === undefined)]

    dispatch({ type: FILTER_EVENTS, payload: eventsFiltered })
  };

  return <Filter {...filterOptions} />
}

export default StatusFilter;
