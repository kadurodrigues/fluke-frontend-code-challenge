import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';

export const BackButton = styled.button`
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