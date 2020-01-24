import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

interface ListItemProps {
  readonly closed: string
}

export const List = styled.ul`
  margin: 0;
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
    color: ${(props: ListItemProps) => props.closed !== undefined ? 'rgba(255,255,255,.2)' : '#fff' };
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