import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { eventsAPI, categoriesAPI } from '../services/apis';
import { 
  FETCH_EVENTS, 
  FETCH_CATEGORIES,
  FETCH_DATA_STARTED,
  FETCH_DATA_SUCCESS
} from '../utils/constants';

import { RootReducer } from '../utils/types';

const useFetch = () => {
  const { 
    events,
    eventsFiltered, 
    categories,
    isFetchingData,
    isEventsFiltered 
  } = useSelector((state: RootReducer) => state.eventsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: FETCH_DATA_STARTED });

      try {
        const [openEvents, closedEvents, allCategories] = await Promise.all([
          eventsAPI('open'),
          eventsAPI('closed'),
          categoriesAPI()
        ]);
  
        const events = [
          ...openEvents.events,
          ...closedEvents.events,  
        ]
  
        const categories = allCategories.categories.map((category: any) => ({
          value: category.id,
          label: category.title
        }))

        dispatch({ type: FETCH_EVENTS, payload: events });
        dispatch({ type: FETCH_CATEGORIES, payload: categories });
        dispatch({ type: FETCH_DATA_SUCCESS });

      } catch (error) {
        console.log(error);
      }
    } 

    if (!events.length) {
      fetchData();
    }

  }, [dispatch, events]);

  return { 
    events,
    eventsFiltered, 
    categories,
    isFetchingData,
    isEventsFiltered
  }
}

export default useFetch;