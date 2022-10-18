"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RobotsParser = void 0;
const fs_1 = require("fs");
const options_1 = require("./options");
class RobotsParser {
    // remove whitespace before & after line to make parsing each line easier
    trimWhitespace(line) {
        return line.trim();
    }
    // flag lines with comments
    isComment(line) {
        // the # character starts a comment
        const commentCharacterFlag = '#';
        return line.substring(1) === commentCharacterFlag;
    }
    // split line by ":"
    // each directive in the robots file is separated by colon
    splitLine(line) {
        const trimmedLine = this.trimWhitespace(line);
        const len = trimmedLine.length;
        const colonIndex = trimmedLine.indexOf(':');
        return {
            directive: line.substring(0, colonIndex),
            value: line.substring(colonIndex + 1, len)
        };
    }
    // check for user-agent
    checkDirective(line, value) {
        return line.directive.toLowerCase().includes(value);
    }
    // parse file into array format
    // TODO: fix return type
    parseLinesIntoArray(line) {
        // check to see if the line is a comment
        const isComment = this.isComment(line);
        // if the line is a comment, return line in format
        if (isComment)
            return { type: options_1.LineType.comment, value: line };
        // otherwise, split line and parse values
        const parsedLine = this.splitLine(line);
        // check for user-agent and return values
        const isUserAgent = this.checkDirective(parsedLine, options_1.LineType.userAgent);
        if (isUserAgent) {
            return {
                type: options_1.LineType.userAgent,
                value: { directive: parsedLine.directive, value: parsedLine.value.toLowerCase() }
            };
        }
        // check for allow and return values
        const isAllow = this.checkDirective(parsedLine, options_1.LineType.allow);
        if (isAllow)
            return { type: options_1.LineType.allow, value: parsedLine };
        // check for disallow and return values
        const isDisallow = this.checkDirective(parsedLine, options_1.LineType.disallow);
        if (isDisallow)
            return { type: options_1.LineType.disallow, value: parsedLine };
        // check for crawl-delay and return values
        const isCrawlDelay = this.checkDirective(parsedLine, options_1.LineType.crawlDelay);
        if (isCrawlDelay)
            return { type: options_1.LineType.crawlDelay, value: parsedLine };
        // check for sitemap and return values
        const isSitemap = this.checkDirective(parsedLine, options_1.LineType.sitemap);
        if (isSitemap) {
            return {
                type: options_1.LineType.sitemap,
                value: { directive: parsedLine.directive, value: parsedLine.value.toLowerCase() }
            };
        }
        return parsedLine;
    }
    readFile(filePath) {
        console.log('readFile, filePath: ', filePath);
        const readStream = (0, fs_1.readFileSync)(filePath, 'utf8');
        console.log('readFile, readStream:\n', readStream);
        // const array = this.parseLinesIntoArray(readStream)
        // console.log('readFile, array: ', array)
        return readStream;
    }
}
exports.RobotsParser = RobotsParser;
