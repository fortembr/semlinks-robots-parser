import { default as RobotsParser } from './robots';

const robotsParser = new RobotsParser();

module.exports = () => {
  return robotsParser.readFile('./robots-example.txt');
};

export const myPackage = (taco = ''): string => `${taco} from my package`;
