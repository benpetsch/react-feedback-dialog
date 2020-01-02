import Email from './mail';
import sendHttp from './http';
import uuid from './uuid';

const validateIput = ({ description, screenshot }) => {
  if (description === undefined || description === null || description === '') {
    return 'Description should not be emtpy!';
  }

  if (screenshot === undefined || screenshot === null) {
    return 'Screenshot should not be emtpy!';
  }

  return 'OK';
};

const handleHttp = ({ description, screenshot, config }) => {
  const { destination } = config;

  return sendHttp(description, screenshot, destination);
};

const checkMailConfig = ({ EMAIL_SECURE_TOKEN, EMAIL_TO, EMAIL_FROM }) => {
  if (EMAIL_SECURE_TOKEN == '' || EMAIL_TO == '' || EMAIL_FROM == '') {
    return false;
  }

  return true;
};

const handleMail = ({ description, screenshot, config }) => {
  return new Promise((resolve, reject) => {
    const { EMAIL_SECURE_TOKEN, EMAIL_TO, EMAIL_FROM } = config;

    if (!checkMailConfig(config)) {
      resolve('Error! The system admin missconfigured this modul.');
      return;
    }

    const data = {
      // screenshot,
      description,
      url: window.location.pathname + window.location.search,
      timestamp: new Date().toUTCString(),
      system: {
        cookieEnabled: navigator.cookieEnabled,
        userAgent: navigator.userAgent,
        appVersion: navigator.appVersion,
        language: navigator.language,
        languages: navigator.languages
      }
    };

    const filename = 'feedback-screenshot-' + uuid() + '.jpeg';

    Email.send({
      SecureToken: EMAIL_SECURE_TOKEN,
      To: EMAIL_TO,
      From: EMAIL_FROM,
      Subject: 'New feedback submitted',
      Body: JSON.stringify(data),
      Attachments: [
        {
          name: filename,
          data: screenshot
        }
      ]
    }).then(response => {
      if (response != 'OK') {
        console.log('response', response);
        resolve('Error sending mail.');
      }

      resolve('success');
    });

    // Email.send({
    //   Host: EMAIL_SMTP_HOST,
    //   Username: EMAIL_USER,
    //   Password: EMAIL_PASSWORD,
    //   To: EMAIL_TO,
    //   From: EMAIL_FROM,
    //   Subject: 'New feedback submitted',
    //   Body: JSON.stringify(data),
    //   Attachments: [
    //     {
    //       name: filename,
    //       data: screenshot
    //     }
    //   ]
    // }).then(response => {
    //   console.log('response', response);

    //   resolve('success');
    // });
  });
};

export const onOk = async ({ publishConfig, description, screenshot }) => {
  const validationMessage = validateIput({ description, screenshot });
  if (validationMessage !== 'OK') {
    console.log('User input is invalid!', validationMessage);
    return { status: 'error', message: validationMessage };
  }

  if (publishConfig.method === 'http') {
    const result = await handleHttp({
      description,
      screenshot,
      config: publishConfig.httpConfig
    });

    if (result != 'success') {
      return {
        status: 'error',
        message:
          'Error! Communication with server failed. Please try again or if the error persists retry later.'
      };
    }
  } else if (publishConfig.method === 'mail') {
    const result = await handleMail({
      description,
      screenshot,
      config: publishConfig.mailConfig
    });

    if (result != 'success') {
      return {
        status: 'error',
        message:
          'Error! Communication with server failed. Please try again or if the error persists retry later.'
      };
    }
  }

  return { status: 'success' };
};
