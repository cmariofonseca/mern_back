require('dotenv').config();
const app = require('./app');
require('./database/index');

async function initServer() {
    await app.listen(app.get('port'));
    console.log('Server running on port', app.get('port'));
}

initServer();
