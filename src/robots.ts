import { readFileSync } from 'fs';
import { Line, LineType, LineSplit } from './options';

export default class RobotsParser {
  constructor() {}

  // remove whitespace before & after line to make parsing each line easier
  private trimWhitespace(line: string) {
    return line.trim();
  }

  // flag lines with comments
  private isComment(line: string) {
    // the # character starts a comment
    const commentCharacterFlag = '#';
    if (line.substring(1) === commentCharacterFlag) {
      return true;
    }
    return false;
  }

  // split line by ":"
  // each directive in the robots file is separated by colon
  private splitLine(line: string): LineSplit {
    const trimmedLine = this.trimWhitespace(line);
    const len = trimmedLine.length;
    const colonIndex = trimmedLine.indexOf(':');
    return {
      directive: line.substring(0, colonIndex),
      value: line.substring(colonIndex + 1, len)
    };
  }

  // check for user-agent
  private checkDirective(line: LineSplit, value: LineType) {
    if (line.directive.toLowerCase().includes(value)) {
      return true;
    }
    return false;
  }

  // parse file into array format
  public parseLinesIntoArray(line: string) {
    // check to see if the line is a comment
    const isComment = this.isComment(line);
    // if the line is a comment, return line in format
    if (isComment) return { type: LineType.comment, value: line };
    // otherwise, split line and parse values
    const parsedLine = this.splitLine(line);
    // check for user-agent and return values
    const isUserAgent = this.checkDirective(parsedLine, LineType.userAgent);
    if (isUserAgent)
      return {
        type: LineType.userAgent,
        value: { directive: parsedLine.directive, value: parsedLine.value.toLowerCase() }
      };
    // check for allow and return values
    const isAllow = this.checkDirective(parsedLine, LineType.allow);
    if (isAllow) return { type: LineType.allow, value: parsedLine };
    // check for disallow and return values
    const isDisallow = this.checkDirective(parsedLine, LineType.disallow);
    if (isDisallow) return { type: LineType.disallow, value: parsedLine };
    // check for crawl-delay and return values
    const isCrawlDelay = this.checkDirective(parsedLine, LineType.crawlDelay);
    if (isCrawlDelay) return { type: LineType.crawlDelay, value: parsedLine };
    // check for sitemap and return values
    const isSitemap = this.checkDirective(parsedLine, LineType.sitemap);
    if (isSitemap)
      return {
        type: LineType.sitemap,
        value: { directive: parsedLine.directive, value: parsedLine.value.toLowerCase() }
      };
    return parsedLine;
  }
}
