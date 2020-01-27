import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  border: 0;
  padding: 4px;
  font-size: 16px;
  color: #fff;
  background-color: transparent;
  cursor: pointer;
`

export const ArrowLeft = styled(FaArrowLeft)`
  font-size: 22px;
  margin-right: 6px;
`

export const Title = styled.h1`
  margin: 20px 0;
  font-size: 20px;
  color: #fff;
`