/**
 * @class ExampleComponent
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  render() {
    const { text } = this.props;

    return (
      <button className={styles.button} onClick={() => console.log('da')}>
        {text}
      </button>
    );
  }
}
