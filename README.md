# react-feedback-dialog

> TODO: Component Description

[![NPM](https://img.shields.io/npm/v/react-feedback-dialog.svg)](https://www.npmjs.com/package/react-feedback-dialog) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-feedback-dialog
```

## Usage

```jsx
import React, { Component } from 'react';

import FeedbackDialog from 'react-feedback-dialog';

class Example extends Component {
  const state = {
    showFeedback: false;
  }

  render() {

    return (
      <div>
        <button onClick={() => (this.state.showFeedback = true)}>
          Give feedback
        </button>
        <FeedbackDialog showFeedback />;
      </div>
    );
  }
}
```

## License

MIT © [Benedikt Schmeitz](https://github.com/benpetsch)
