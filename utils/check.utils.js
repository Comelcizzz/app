// Function to check and set parameters from config into the request object
function checkAndSetParams(params, request = {}) {
    // Define an array of field mappings from params to request object
    const fields = [
        { param: params.discProcCode, field: 'DiscProcCode' },
        { param: params.discPOSEntry, field: 'DiscPOSEntry' },
        { param: params.discRespCode, field: 'DiscRespCode' },
        { param: params.discPOSData, field: 'DiscPOSData' },
        { param: params.discTransQualifier, field: 'DiscTransQualifier' },
        { param: params.discNRID, field: 'DiscNRID' },
    ];

    // Iterate through each field, checking if param is not null or undefined
    fields.forEach(({ param, field }) => {
        if (param !== null) {
            // Add the param to the request object with the corresponding field name
            request[field] = param;
        }
    });

    return request;
}

// Export the function so it can be used in other files
module.exports = {
    checkAndSetParams
};