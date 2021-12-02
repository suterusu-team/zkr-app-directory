import React from 'react';
import PropTypes from 'prop-types';
import Rollups from '../components/card-components/Rollups';

const RollupsView = ({ align, center, justify, name, pad, path, children }) => (
    <React.Fragment>
        <Rollups/>
    </React.Fragment>
);

RollupsView.propTypes = {
    align: PropTypes.string,
    details: PropTypes.string,
    label: PropTypes.string.isRequired,
    level: PropTypes.number,
    size: PropTypes.oneOf(['xlarge', 'large']),
    summary: PropTypes.node,
  };
  
  RollupsView.defaultProps = {
    align: undefined,
    details: undefined,
    level: 1,
    size: 'large',
    summary: undefined,
  };

export default RollupsView;