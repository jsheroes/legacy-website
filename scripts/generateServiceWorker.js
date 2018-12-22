const fs = require('fs');

const SW_FILEPATH = `${__dirname}/../offline/serviceWorker.js`;
const GENERATED_SW_FILEPATH = `${__dirname}/../offline/dist/serviceWorker.js`;

const timestamp = new Date().getTime();

fs.readFile(SW_FILEPATH, 'utf8', (error, content) => {
  if (error) {
    console.log(error);
    return;
  }
  const contentWithVersion = content.replace(/{{version}}/, timestamp);

  fs.writeFile(GENERATED_SW_FILEPATH, contentWithVersion, 'utf8', err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Service worker updated to new cache version:', timestamp);
  });
});
