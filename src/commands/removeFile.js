import { errorMessage } from '../constants.js';
import { rm } from 'node:fs/promises';

export const removeFile = async ([filePath]) => {
  try {
    await rm(filePath);
    console.log(`${filePath} has been removed`);
  } catch (error) {
    console.log(errorMessage);
  }
};
