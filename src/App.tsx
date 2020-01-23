import React, { useState, useEffect } from 'react';
import api from './services/api';

interface Category {
  id: string,
  title: string,
}

interface Sources {
  id: string,
  url: string,
}

interface Geometries {
  date: string,
  type: string,
}

interface Event {
  id: string,
  title: string,
  description: string,
  link: string,
  closed: string,
  category: Category,
  sources: Sources,
  geometries: Geometries
}

const App: React.FC = () => { 
  const [events, setEvents] = useState<Array<Event>>();

  useEffect(() => {
    async function fetchEvents() {
      const [ opened, closed ] = await Promise.all([ 
        api('open'), 
        api('closed') 
      ]);
      setEvents([...opened.events, ...closed.events]);
    }
    fetchEvents();
  }, []);

  return (
    <div className="App">
      <h1>Fluke</h1>
      <ul>
        {events?.map(event => (
          <li 
            key={event.id}
            className={event.closed !== undefined ? 'closed' : 'opened'}
          >
            {event.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
