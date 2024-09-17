// Import the configuration object from the 'params.config' file
const config = require('./config/params.config');

// Import the 'checkAndSetParams' function from the 'check.utils' file
const { checkAndSetParams } = require('./utils/check.utils'); 

// Initialize an empty request object
let request = {};

// Call the function to check and set parameters in the request object
request = checkAndSetParams(config, request);

// Log the final request object to the console
console.log('Received request:', request); 
