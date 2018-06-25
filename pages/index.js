import React, { Fragment } from 'react';
import { Header, Geo } from '../components';
import Heading from '../ui';

const renders = {
  h1: props => <Heading {...props} />,
  h2: props => <Heading component="h2" {...props} />,
};

export default () => (
  <Fragment>
    <Header components={renders} />
    <Geo />
  </Fragment>
);
