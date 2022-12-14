import { readdir } from 'node:fs/promises';
import { errorMessage } from '../constants.js';
import { cwd } from 'node:process';

export const showListContent = async () => {
  try {
    const filesList = await readdir(cwd());
    console.table(filesList);
    console.log(`You are currently in ${cwd()}`);
  } catch {
    throw new Error(errorMessage);
  }
};
