import { RobotsParser } from './robots';

export default function robotsParser() {
  const robotsParser = new RobotsParser();
  return robotsParser.readFile('./robots-example.txt');
}
