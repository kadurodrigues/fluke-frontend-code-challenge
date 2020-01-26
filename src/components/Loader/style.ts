import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to { transform: rotate(360deg) }
`

export const Backdrop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.2);
  border-left-color: #2ad8b5;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} .8s linear infinite;
`