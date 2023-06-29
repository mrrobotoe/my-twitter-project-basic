import React from 'react';
import { Grid as GridWrapper } from './Grid.styled';
import { PropTypes } from 'prop-types';

export const Grid = ({ children }) => {
  return <GridWrapper>{children}</GridWrapper>;
};

Grid.propTypes = {
  spanTo: PropTypes.String,
  children: React.Component,
};
