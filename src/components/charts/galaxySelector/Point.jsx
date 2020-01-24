import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { galaxy, selected } from './galaxy-selector.module.scss';

class Point extends React.PureComponent {
  render() {
    const { selected: isSelected, x, y, color, classes } = this.props;
    const pointClasses = classnames(galaxy, 'data-point', classes, {
      [selected]: isSelected,
    });

    return (
      <circle
        className={pointClasses}
        cx={x}
        cy={y}
        r={20}
        fill="transparent"
        stroke={!isSelected ? 'transparent' : color}
        strokeWidth={0}
      />
    );
  }
}

Point.propTypes = {
  selected: PropTypes.bool,
  x: PropTypes.number,
  y: PropTypes.number,
  classes: PropTypes.string,
  color: PropTypes.string,
};

export default Point;
