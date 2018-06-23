import React from 'react';
import styled from 'styled-components';

const H = styled.h1`
  line-height: 1.8;
  color: #4a4a4a;
`;

const Heading = ({ component, ...rest }) => {
  const C = component ? H.withComponent(component) : H;
  return <C {...rest} />;
};

export default Heading;
