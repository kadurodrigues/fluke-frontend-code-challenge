import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { eventsAPI, categoriesAPI } from '../services/apis';
import { 
  FETCH_DATA_STARTED,
  FETCH_DATA_SUCCESS,
  FETCH_EVENTS, 
  FETCH_CATEGORIES
} from '../utils/constants';

import { RootReducer } from '../utils/types';

const FetchEvents = () => {
  const { 
    events,
    eventsFiltered, 
    categories, 
    isFetchingData,
    isEventsFiltered 
  } = useSelector((state: RootReducer) => state.eventsReducer)
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_DATA_STARTED });

    async function fetchEvents() {
      try {
  
        const [responseA, responseB, responseC] = await Promise.all([
          eventsAPI('open'),
          eventsAPI('closed'),
          categoriesAPI()
        ]);

        const events = [
          ...responseA.events,
          ...responseB.events,  
        ]
  
        const categories = responseC.categories.map((category: any) => ({
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

    fetchEvents();
  }, [dispatch]);

  return {
    events,
    eventsFiltered,
    categories, 
    isFetchingData,
    isEventsFiltered
  }
}

export default FetchEvents;