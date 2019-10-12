const fs = require('fs');

const SW_FILEPATH = `${__dirname}/../offline/serviceWorker.js`;
const GENERATED_SW_FILEPATH = `${__dirname}/../public/serviceWorker.js`;

const isDifferent = (swFileContent, generatedFileContent) => {
  const content1 = swFileContent.replace(/jsheroesio-cache-{{version}}/i, '');
  const content2 = generatedFileContent.replace(/jsheroesio-cache-([0-9])+/i, '');
  return content1 !== content2;
};

const generateServiceWorkerFile = (generatedFileContent = null) => {
  const timestamp = new Date().getTime();

  fs.readFile(SW_FILEPATH, 'utf8', (readError, swFileContent) => {
    if (readError) {
      console.log(readError);
      return;
    }

    if (generatedFileContent && !isDifferent(swFileContent, generatedFileContent)) {
      // service worker file has not changed
      console.log('Service worker file is up to date');
      return;
    }

    // add versioning
    const contentWithVersion = swFileContent.replace(/{{version}}/i, timestamp);

    // save versioned service worker file
    fs.writeFile(GENERATED_SW_FILEPATH, contentWithVersion, 'utf8', writeError => {
      if (writeError) {
        console.log(writeError);
        return;
      }
      console.log('Service worker file updated to new cache version:', timestamp);
    });
  });
};

fs.access(GENERATED_SW_FILEPATH, fs.F_OK, err => {
  if (err) {
    // first time generating a sw file
    generateServiceWorkerFile();
    return;
  }

  // we have a previously generated sw file
  fs.readFile(GENERATED_SW_FILEPATH, 'utf8', (error, generatedFileContent) => {
    if (error) {
      console.log(error);
      return;
    }
    generateServiceWorkerFile(generatedFileContent);
  });
});
