import React from 'react';
import PropTypes from 'prop-types';

import FeedbackDialog from 'components/react-feedback-dialog';

const Index = ({ active, onClose, publishConfig }) => {
  if (active) {
    return <FeedbackDialog onClose={onClose} publishConfig={publishConfig} />;
  }

  return null;
};

Index.propTypes = {
  /**
   * Your entrypoint to trigger visibility of the react-feedback-dialog
   */
  active: PropTypes.bool.isRequired,
  /**
   * Provide a function that closes the react-feedback-dialog
   */
  onClose: PropTypes.func.isRequired,
  /**
   * Your config object for publishing feedback
   */
  publishConfig: PropTypes.object.isRequired
};

Index.defaultProps = {
  active: false
};

export default Index;
