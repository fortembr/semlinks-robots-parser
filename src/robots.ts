export default class RobotsParser {
  constructor() {}

  // remove whitespace before & after line to make parsing each line easier
  private trimWhitespace(line: string) {
    return line.trim();
  }
}
