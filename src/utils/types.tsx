export interface Event {
  id: string,
  title: string,
  link: string,
  closed: string,
  categories: [],
  geometries: []
}

export interface RootReducer {
  eventsReducer: {
    events: [],
    eventsFiltered: [],
    categories: [],
    isFetchingData: boolean,
    isEventsFiltered: boolean
  }
}