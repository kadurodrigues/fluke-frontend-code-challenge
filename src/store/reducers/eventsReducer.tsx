import { 
  FETCH_EVENTS, 
  FETCH_CATEGORIES, 
  FILTER_EVENTS,
  FETCH_DATA_STARTED, 
  FETCH_DATA_SUCCESS 
} from '../../utils/constants';

type AppState = {};
type Action =
  | { type: 'FETCH_EVENTS'; payload: [] }
  | { type: 'FETCH_CATEGORIES'; payload: [] }
  | { type: 'FILTER_EVENTS'; payload: [] }
  | { type: 'FETCH_DATA_STARTED' }
  | { type: 'FETCH_DATA_SUCCESS' }
  
const INITIAL_STATE = {
  events: [],
  eventsFiltered: [],
  categories: [],
  isFetchingData: false,
  isEventsFiltered: false
}

export default (state: AppState = INITIAL_STATE, action: Action): AppState => {
  switch (action.type) {
    case FETCH_EVENTS:
      return {...state, events: action.payload }
    case FETCH_CATEGORIES:
      return {...state, categories: action.payload }
    case FETCH_DATA_STARTED:
      return {...state, isFetchingData: true }
    case FETCH_DATA_SUCCESS:
      return {...state, isFetchingData: false }
    case FILTER_EVENTS:
      return {...state, eventsFiltered: action.payload, isEventsFiltered: true }
    default:
      return state;
  }
}