/* eslint-disable no-console */
const app = require('./modules/app/app.js');
const { PORT } = require('./modules/config');


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});