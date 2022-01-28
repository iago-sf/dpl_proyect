import config from './app/config/config.js';
import app from './app/app.js';

app.listen(config.PORT, () => {
  console.log(`App listening on port ${config.PORT}`);
});
