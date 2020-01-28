import React from 'react';

import { 
  List, 
  ListItem, 
  LinkStyled, 
  IconWrapper, 
  ArrowForward,
  EventsNotFound
} from './style';

import { ReactComponent as FireIcon } from '../../assets/icons/fire.svg';
import { ReactComponent as TornadoIcon } from '../../assets/icons/tornado.svg';
import { ReactComponent as VolcanoIcon } from '../../assets/icons/volcano.svg';

import { Category, Event } from '../../utils/types';
interface EventsProps {
  events: Event[];
}

const handleEventIcon = (categories: Category[]) => {
  const type = categories[0].title;
  return type === 'Wildfires' ? (
    <FireIcon />
  ) : type === 'Volcanoes' ? (
    <VolcanoIcon />
  ) : (
    <TornadoIcon />
  );
};

const EventsList = ({ events }: EventsProps) => (
  <List>
    {events?.length ? (
      events.map(({ id, closed, title, categories }) => (
        <ListItem key={id} closed={closed}>
          <LinkStyled
            to={{
              pathname: '/event',
              search: `?id=${id}`,
              state: { eventId: id }
            }}
          >
            <IconWrapper>{handleEventIcon(categories)}</IconWrapper>
              <p>{title}</p>
            <ArrowForward />
          </LinkStyled>
        </ListItem>
      ))
    ) : (
      <EventsNotFound>
        <p>No Events found!</p>
      </EventsNotFound>
    )}
  </List>
);

export default EventsList;
