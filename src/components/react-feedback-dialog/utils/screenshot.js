import html2canvas from 'html2canvas';

export const takeScreenshot = document => {
  return new Promise(resolve => {
    // Hide react-feedback-modal
    const element = document.getElementById('feedback-modal');
    if (element) {
      element.style.display = 'none';
    }

    setTimeout(() => {
      // Generate canvas from html
      const screenshotPngUrl = html2canvas(document.body).then(canvas => {
        // Generate base64 from canvas
        const jpegUrl = canvas.toDataURL('image/jpeg', 0.3);
        // const jpegUrl = canvas.toDataURL({
        //   format: 'jpeg',
        //   left: 0,
        //   top: 0,
        //   width: 200,
        //   height: 150
        // });

        return jpegUrl;
      });

      if (element) {
        setTimeout(() => {
          element.style.display = 'flex';
        }, 1);
      }

      resolve(screenshotPngUrl);
    }, 1);

    // Revert hiding react-feedback-modal
  });
};
