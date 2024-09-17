const config = require('./config/params.config');
const { checkAndSetParams } = require('./utils/check.utils');

let request = {};

request = checkAndSetParams(config, request);

console.log('Отриманий запит:', request);
