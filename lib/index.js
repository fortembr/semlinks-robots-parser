"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// Custom Modules
const options_1 = require("./options");
const robots_1 = require("./robots");
function robotsParser(returnType, filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        // execute class for variable usage
        const robotsParser = new robots_1.RobotsParser();
        if (returnType === options_1.ReturnType.console) {
            // console.log method
            return robotsParser.logFile(filePath);
        }
        if (returnType === options_1.ReturnType.browser) {
            // format array method
            yield robotsParser.parseFile(filePath);
        }
    });
}
exports.default = robotsParser;
