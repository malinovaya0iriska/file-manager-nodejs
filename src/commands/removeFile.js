import { errorMessage } from '../constants.js';
import { rm } from 'node:fs/promises';
import { cwd } from 'node:process';

export const removeFile = async ([filePath]) => {
  try {
    await rm(filePath);
    console.log(`${filePath} has been removed`);
    console.log(`You are currently in ${cwd()}`);
  } catch (error) {
    console.log(errorMessage);
  }
};
