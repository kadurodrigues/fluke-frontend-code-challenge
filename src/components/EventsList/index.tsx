import React from 'react';
import { AiFillFire } from 'react-icons/ai';
import { GiWhirlwind } from 'react-icons/gi';
import { WiVolcano } from 'react-icons/wi';

import Fire from '../../assets/fire.svg';
import Tornado from '../../assets/tornado.svg';
import Volcano from '../../assets/volcano.svg';

import { List, ListItem, LinkStyled, IconWrapper, ArrowForward, Image } from './style';
import { Category, Event } from '../../utils/types'

interface EventsProps {
  events: Event[];
}

const handleEventIcon = (categories: Category[]) => {
  const type = categories[0].title;
  return type === 'Wildfires' ? (
    <Image src={Fire} alt="" />
  ) : type === 'Volcanoes' ? (
    <Image src={Volcano} alt="" />
  ) : (
    <Image src={Tornado} alt="" />
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
      <p>No Events found!</p>
    )}
  </List>
);

export default EventsList;
