import Router from 'next/router';

function redirectTo({ res, path }) {
  if (res) {
    res.writeHead(301, {
      Location: path,
    });
    res.end();
    res.finished = true;
  } else {
    Router.replace(path);
  }
}

export default {
  redirectTo,
};
