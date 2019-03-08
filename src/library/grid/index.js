import React from 'react';
import PropTypes from 'prop-types';
import {
  getFr,
  formatAreas,
} from '../../utils';

import './Grid.scss'

export const Grid = (
  {
    id,
    className = '',
    height = 'auto',
    flow = 'row',
    minRowHeight = '20px',
    rows = 1,
    columns = 1,
    columnGap,
    rowGap,
    areas,
    justifyContent,
    alignContent,
    children,
  }) =>
  <div
    id={id}
    className={`Grid ${className}`}
    style={{
      'height': height,
      'gridAutoFlow': flow,
      'gridAutoRows': `minmax(${minRowHeight}, auto)`,
      'gridTemplateRows': getFr(rows),
      'gridTemplateColumns': getFr(columns),
      'columnGap': columnGap,
      'rowGap': rowGap,
      'gridTemplateAreas': formatAreas(areas),
      'justifyContent': justifyContent,
      'alignContent': alignContent,
    }}
  >
    {children}
  </div>;

Grid.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  columnGap: PropTypes.string,
  rowGap: PropTypes.string,
  height: PropTypes.string,
  minRowHeight: PropTypes.string,
  flow: PropTypes.string,
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  areas: PropTypes.arrayOf(PropTypes.string),
  justifyContent: PropTypes.string,
  alignContent: PropTypes.string
};

export default Grid;