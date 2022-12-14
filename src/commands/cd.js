import { chdir, cwd } from 'node:process';
import { errorMessage } from '../constants.js';

export const cdHandler = (params) => {
  try {
    chdir(params);
    console.log(`You are currently in ${cwd()}`);
  } catch {
    console.log(errorMessage);
  }
};
