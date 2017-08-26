const express = require('express');
const path = require('path');
const request = require('request');

const app = express();
const PORT = process.env.PORT || 8080;
const PROXY_PREFIX = 'http://';

const requestErrorHandler = (e) => {
  console.error('Error Proxying Request:', e);
};

app.use(express.static(path.join(__dirname, 'dist')));

// Proxy to Python server
app.use(/^\/api\/(.*)/, function(req, res) {
  let payload;
  const proxyUrl = `${PROXY_PREFIX}localhost:5000${req.url}`;

  try {
    switch (req.method) {
      case 'GET':
        request.get(proxyUrl)
          .on('error', requestErrorHandler)
          .pipe(res);
        break;
      case 'DELETE':
      case 'PATCH':
      case 'POST':
      case 'PUT':
        payload = JSON.stringify(req.body);
        request.post(proxyUrl, {
          body: payload
        })
          .on('error', requestErrorHandler)
          .pipe(res);
        break;
      default:
        requestErrorHandler('Unknown request method.');
    }
  } catch (e) {
    requestErrorHandler(e);
  }
});

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/dist/index.html');
});

app.listen(PORT, error => {
  error
  ? console.error(error)
  : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
});
