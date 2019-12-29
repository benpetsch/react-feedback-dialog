import React from 'react';
import PropTypes from 'prop-types';

import FeedbackDialog from './components';

const Index = ({ active, onClose }) => {
  if (active) {
    return <FeedbackDialog onClose={onClose} />;
  }

  return null;
};

Index.propTypes = {
  active: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

Index.defaultProps = {
  active: false
};

export default Index;
