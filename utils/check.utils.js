function checkAndSetParams(params, request = {}) {
    const fields = [
        { param: params.discProcCode, field: 'DiscProcCode' },
        { param: params.discPOSEntry, field: 'DiscPOSEntry' },
        { param: params.discRespCode, field: 'DiscRespCode' },
        { param: params.discPOSData, field: 'DiscPOSData' },
        { param: params.discTransQualifier, field: 'DiscTransQualifier' },
        { param: params.discNRID, field: 'DiscNRID' },
    ];

    fields.forEach(({ param, field }) => {
        if (param != null) {
            request[field] = param;
        }
    });

    return request;
}

module.exports = {
    checkAndSetParams
};