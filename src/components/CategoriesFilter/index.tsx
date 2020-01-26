import React from 'react';
import Filter from '../Filter';
import { useDispatch, useSelector } from 'react-redux';
import { FILTER_EVENTS } from '../../utils/constants';
import { RootReducer } from '../../utils/types';

const CategoriesFilter: React.FC = () => {
  const { 
    events, 
    categories 
  } = useSelector((state: RootReducer) => state.eventsReducer);
  const dispatch = useDispatch();

  const filterOptions = {
    title: 'Categories',
    width: '150px',
    options: [...[{ value: '0', label: 'All' }], ...categories],
    handleFilterChange: (event: any) => handleFilterCategories(event.target.value)
  };

  const handleFilterCategories = (categorieId: string) => {
    if (categorieId === '0') {
      dispatch({ type: FILTER_EVENTS, payload: events });
    } else {
      const eventsFiltered = events.filter(
        (event: any) => event.categories[0].id === Number(categorieId)
      )
      dispatch({ type: FILTER_EVENTS, payload: eventsFiltered });
    }
  };

  return <Filter {...filterOptions} />
}

export default CategoriesFilter;