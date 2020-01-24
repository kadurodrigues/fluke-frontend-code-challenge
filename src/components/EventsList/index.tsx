import React from 'react';

import { AiFillFire } from 'react-icons/ai';
import { GiWhirlwind } from 'react-icons/gi';
import { WiVolcano } from 'react-icons/wi';
import { List, ListItem, LinkStyled, IconWrapper, ArrowForward } from './style';

interface Category {
  id: string;
  title: string;
}

interface Geometries {
  date: string;
  type: string;
  coordinates: Array<Number>;
}

interface Event {
  id: string;
  title: string;
  link: string;
  closed: string;
  categories: Array<Category>;
  geometries: Geometries;
}

interface EventProps {
  events: Array<Event>;
}

const handleEventIcon = (categories: Array<Category>) => {
  const type = categories[0].title;
  return type === 'Wildfires' ? (
    <AiFillFire />
  ) : type === 'Volcanoes' ? (
    <WiVolcano />
  ) : (
    <GiWhirlwind />
  );
};

const EventsList = ({ events }: EventProps) => {
  return (
    <>
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
          <p>No Events found!</p>
        )}
      </List>
    </>
  );
};

export default EventsList;
