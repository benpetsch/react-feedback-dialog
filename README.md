# React feedback dialog

Fast user feedback for react webapp issues + screenshot + canvas highlight drawer.

Live demo: [https://wenigerpendeln.de/feedback](https://wenigerpendeln.de/feedback)

## Overview

- [Getting Started](#Getting-Started)
  - [Prerequisites](#Prerequisites)
  - [Installing](#Installing)
  - [Example config](#Example-config)
- [Running the tests](#Running-the-tests)
- [Deployment](#Deployment)
- [Built With](#Built-With)
- [Contributing](#Contributing)
- [Versioning](#Versioning)
- [Authors](#Authors)
- [License](#License)
  <!-- - [Acknowledgments](#Acknowledgments) -->

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

```javascript
import React from 'react';
import FeedbackDialog from 'react-feedback-dialog';

const index = () => {
  return (
    <div>
      <FeedbackDialog
        config={{
          EMAIL_SMTP_HOST,
          EMAIL_TO,
          EMAIL_USER,
          EMAIL_PASSWORD
        }}
      />
    </div>
  );
};
```

### Example config

```env
EMAIL_TO=<EMAIL_ADDRESS_OF_THE_PERSON_WHOM_SHOULD_RECEIVE_THE_FEEDBACK>
EMAIL_USER=<EMAIL_PROVIDER_USERNAME>
EMAIL_PASSWORD=<EMAIL_PROVIDER_PASSWORD>
EMAIL_SMTP_HOST=<EMAIL_PROVIDER_SMTP_HOST>
```

### Prerequisites

This project relies on NodeJS + npm.
Make sure you're familiar with those before jumping into the project
A basic understanding of ReactJS and the antd ui library are helpful as well.

### Installing

A step by step series of examples that tell you how to get a development env running

First install the dependencies

```
npm install
```

Run the hot reloading dev env

```
npm run dev
```

Build for prod

```
npm run build
```

## Running the tests

No tests yet.

## Deployment

Use `npm publish` for release.

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [npm](https://www.npmjs.com/) - npm is the package manager for javascript
- [styled-components](https://www.styled-components.com/) - Use for CSS to style your apps without stress
- [antd](https://ant.design/docs/react/introduce) - Used as react ui component framework
- [react-konva](https://konvajs.org/docs/react/) - HTML5 2d canvas library for desktop and mobile applications
- [html2canvas](https://html2canvas.hertzen.com/) - Screenshots with JavaScript

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/benpetsch/feedback-dialog/tags).

## Authors

- **Benedikt Schmeitz** - _Initial work_ - [benedikt-schmeitz.de](https://benedikt-schmeitz.de)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

<!-- ## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc -->
