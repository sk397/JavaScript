// Setting up condtions so that we can get the error message in the Json format


const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
const StatusCode = res.StatusCode ? res.StatusCode : 500

switch(StatusCode) {
    case constants.VALIFATION_ERROR:
        res.json({title: "Validation Failed", message: err.message, stackTrace: err.stack});
        break;
    case constants.UNAUTHORIZED:
        res.json({title: "Unauthorized", message: err.message, stackTrace: err.stack});
        break;
     case constants.FORBIDDEN:
        res.json({title: "Forbidden", message: err.message, stackTrace: err.stack});
        break;
    case constants.NOT_FOUND:
        res.json({title: "Not Found", message: err.message, stackTrace: err.stack});
        break;
    case constants.SERVER_ERROR:
        res.json({title: "Server Errors", message: err.message, stackTrace: err.stack});
        default:
            console.log("No Error, All Good!");
        break;

}


};

module.exports = errorHandler;