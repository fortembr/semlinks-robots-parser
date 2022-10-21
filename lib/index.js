"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Custom Modules
const options_1 = require("./options");
const robots_1 = require("./robots");
function robotsParser(returnType, filePath) {
    // execute class for variable usage
    const robotsParser = new robots_1.RobotsParser();
    if (returnType === options_1.ReturnType.console) {
        // console.log method
        return robotsParser.logFile(filePath);
    }
    if (returnType === options_1.ReturnType.browser) {
        // format array method
        return robotsParser.parseFile(filePath);
    }
}
exports.default = robotsParser;
