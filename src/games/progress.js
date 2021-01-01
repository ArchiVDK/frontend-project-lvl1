import { cons } from '@hexlet/pairs';
import { random, randomElement, gameLaunch } from '../index';

const createProgression = (start, diff, length) => {
  const res = [];
  for (let i = 0; i < length; i += 1) {
    res[i] = start + diff * i;
  }
  return res;
};

export default () => {
  const description = 'What number is missing in the progression?';
  const createData = () => {
    const startElement = random();
    const progressionLength = 10;
    const progressionDifference = random();

    const progression = createProgression(
      startElement,
      progressionDifference,
      progressionLength,
    );

    const progressionElement = randomElement(progression);

    const newProgression = progression.map((value) => {
      if (value === progressionElement) {
        return '..';
      }
      return value;
    });

    const question = newProgression.join(' ');
    const anwer = progressionElement;
    return cons(question, anwer);
  };
  return gameLaunch(description, createData);
};
