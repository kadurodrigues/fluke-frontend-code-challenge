import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

interface ListItemProps {
  readonly closed: string
}

export const List = styled.ul`
  height: 100%;
  margin: 0;
  padding: 0 14px;
`

export const ListItem = styled.li<ListItemProps>`
  padding: 18px 0;
  border-bottom: 1px solid rgba(255,255,255,.1);
  cursor: ${(props: ListItemProps) => props.closed !== undefined ? 'default' : 'pointer' };
  
  p {
    margin-left: 10px;
    max-width: 360px;
    font-size: 16px;
    color: ${(props: ListItemProps) => props.closed !== undefined ? 'rgba(255,255,255,.2)' : '#fff' };
  }

  svg {
    max-width: 100%;
    height: 20px;
    fill: ${(props: ListItemProps) => props.closed !== undefined ? 'rgba(255,255,255,.2)' : '#4dbdff' };
  }
`

export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  padding-top: 10px;
  text-align: center;
  border-radius: 50%;
  background-color: #2b3742;
`

export const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
`

export const ArrowForward = styled(IoIosArrowForward)`
  margin-left: auto;
  font-size: 28px;
`

export const Image = styled.img`
  max-width: 100%;
  height: 20px;
`

export const EventsNotFound = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100% - 60px);
  align-items: center;

  p {
    color: #fff;
  }
`