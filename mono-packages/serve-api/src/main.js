require('module-alias/register');

const { APP_PORT } = require('./config/config');

const app = require('./app/app');

app.listen(APP_PORT, () => {
  console.log(`server is running at http://localhost:${APP_PORT}`);
});
