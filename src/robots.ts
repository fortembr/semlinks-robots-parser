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
}
