# react-feedback-dialog

> A react user feedback dialog component. Enables screenshots and canvas highlighting.

[![NPM](https://img.shields.io/npm/v/react-feedback-dialog.svg)](https://www.npmjs.com/package/react-feedback-dialog) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<!-- ![closed react feedback dialog](https://github.com/benpetsch/react-feedback-dialog/blob/master/assets/react-feedback-dialog-promo-image-3.png 'closed react feedback dialog') -->

<!-- <img src="https://github.com/benpetsch/react-feedback-dialog/blob/master/assets/react-feedback-dialog-promo-image-3.png" alt="open react feedback dialog" width="30%">
<img src="https://github.com/benpetsch/react-feedback-dialog/blob/master/assets/react-feedback-dialog-promo-image-1.png" alt="close up on open react feedback dialog" width="61%" > -->

## Why

To make collecting feedback more easy.

## What

Fast feedback, including screenshot, description and sys specs for your webapp.

## Install

```bash
npm install --save react-feedback-dialog

or

yarn add react-feedback-dialog
```

## Usage

```jsx
import React, { Component, useState } from 'react';
import FeedbackDialog from 'react-feedback-dialog';

const publishConfig = {
  method: 'http', // one of 'http' or 'mail'
  httpConfig: {
    // [optional] only required for method: 'http'
    destination: 'http://httpbin.org/post'
  }
};

class Example extends Component {
  const [active, setActive] = useState(false);

  render() {
    return (
      <div>
        <button
          onClick={() => setActive(!active)}
        >Give Feedback</button>

        <Index
          publishConfig={publishConfig}
          active={active}
          onClose={() => setActive(!active)}
        />
      </div>
    );
  }
}
```

## License

MIT © [Benedikt Schmeitz](https://github.com/benpetsch)
