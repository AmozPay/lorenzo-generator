import { help } from "./names";

const rand = (arr: string[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
}



const generateName = (): string => {
  return rand(help)
}

export default generateName;
