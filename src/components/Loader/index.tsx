import React from 'react';
import { Backdrop, Spinner } from './style';

const Loader: React.FC = () => (
  <Backdrop>
    <Spinner />
  </Backdrop>
)

export default Loader;