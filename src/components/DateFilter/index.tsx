import React from 'react';
import moment from 'moment';
import Filter from '../Filter';
import { useDispatch, useSelector } from 'react-redux';
import { FILTER_EVENTS } from '../../utils/constants';
import { RootReducer } from '../../utils/types';

const DateFilter: React.FC = () => {
  const { events } = useSelector((state: RootReducer) => state.eventsReducer);
  const dispatch = useDispatch();
  
  const filterOptions = {
    title: 'Order By',
    options: [
      { value: 'all', label: 'All' },
      { value: 'newest', label: 'Newest' },
      { value: 'oldest', label: 'Oldest' }
    ],
    handleFilterChange: (event: any) => handleFilterDate(event.target.value)
  }
  
  const handleFilterDate = (option: string) => {
    const eventsFiltered = events
      .map((event: any) => ({
        ...event,
        date: event.geometries
          .sort((geometryA: any, geometryB: any) => {
            return option === 'oldest' 
              ? moment(geometryA.date).diff(moment(geometryB.date))
              : moment(geometryB.date).diff(moment(geometryA.date))
          })
          .map(({ date }: any) => date)[0]
      }))
      .sort((eventA: any, eventB: any) => {
        return option === 'oldest' 
          ? moment(eventA.date).diff(moment(eventB.date))
          : moment(eventB.date).diff(moment(eventA.date))
      })

    return option === 'all'
      ? dispatch({ type: FILTER_EVENTS, payload: events })
      : dispatch({ type: FILTER_EVENTS, payload: eventsFiltered })
  }

  return <Filter {...filterOptions} /> 
}

export default DateFilter;