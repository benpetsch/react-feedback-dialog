A react user feedback dialog component. Enables screenshots and canvas highlighting.

<img src="/react-feedback-dialog-promo-image-2.png" alt="closed react feedback dialog" width="30%" style="margin-right: 10px">
<img src="/react-feedback-dialog-promo-image-3.png" alt="open react feedback dialog" width="30%">
<img src="/react-feedback-dialog-promo-image-1.png" alt="close up on open react feedback dialog" width="61%" >

<!-- <img src="/react-feedback-dialog-promo-video-1.mov" alt="example react feedback modal" width="40%" style="margin-right: 10px"> -->

<br/>
<br/>
<br/>
<br/>

<!-- noeditor -->
<!-- ```jsx noeditor
``` -->

<!-- static -->
<!-- ```jsx static
``` -->

### HTTP example

Dummy endpoint: `http://httpbin.org/post`  
Replace with your custom one

```jsx
import { useState } from 'react';
import Button from './components/ui/button';

const [active, setActive] = useState(false);
const publishConfig = {
  method: 'http', // one of 'http' or 'mail'
  httpConfig: {
    // [optional] only required for method: 'http'
    destination: 'http://httpbin.org/post'
  }
};

<div>
  <Button
    type="primary"
    onClick={() => setActive(!active)}
    text="Give Feedback"
  />

  <Index
    publishConfig={publishConfig}
    active={active}
    onClose={() => setActive(!active)}
  />
</div>;
```

<br/>
<br/>
<br/>
<br/>

### Mail example

Get your own secure token from `https://smtpjs.com/` > Encrypt you SMTP Credentials

```jsx editable
import { useState } from 'react';
import Button from './components/ui/button';

const [active, setActive] = useState(false);
const publishConfig = {
  method: 'mail', // one of 'http' or 'mail'
  mailConfig: {
    // [optional] only required for method: 'mail'
    EMAIL_SECURE_TOKEN: 'YOUR_SECURE_TOKEN',
    EMAIL_TO: '<THE_MAIL_ADDRESS_YOU_WANT_TO_RECEIVE_FEEDBACK_TO>',
    EMAIL_FROM: '<FEEDBACK@YOUR-DOMAIN.COM>'
  }
};

<div>
  <Button
    type="primary"
    onClick={() => setActive(!active)}
    text="Give Feedback"
  />

  <Index
    publishConfig={publishConfig}
    active={active}
    onClose={() => setActive(!active)}
  />
</div>;
```

<br/>
<br/>
