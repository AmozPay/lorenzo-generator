import { firstNames, lastNames } from "./names";

const rand = (arr: string[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
}

const generateFirstName = (): string => {
  return rand(firstNames.begin) + rand(firstNames.middle)+ rand(firstNames.end);
}

const generateLastName = () => {
  return rand(lastNames.begin) + rand(lastNames.middle) + rand(lastNames.end);
}

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const generateName = (): string => {
  return capitalize(generateFirstName()) + " " + capitalize(generateLastName());
}

export default generateName;
