import React from 'react';
import Header from '../header';
import Heading from '../ui';

export default () => (
  <Header
    components={{
      h1: props => <Heading {...props} />,
      h2: props => <Heading component="h2" {...props} />,
    }}
  />
);
