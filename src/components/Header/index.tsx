import React from 'react';
import { ReactComponent as NasaLogo } from '../../assets/img/nasa-logo.svg';
import { Container, Title } from './style';

const Header: React.FC = () => {
  return (
    <Container>
      <NasaLogo />
      <Title>EONET</Title>
    </Container>
  )
}

export default Header;