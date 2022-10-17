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
}
