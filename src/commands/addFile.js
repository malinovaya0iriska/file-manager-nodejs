import { open, writeFile } from 'node:fs/promises';
import { cwd } from 'node:process';
import { errorMessage } from '../constants.js';

export const addFile = async (fileName) => {
  let filehandle;
  try {
    filehandle = await open(fileName, 'w');
  } catch (e) {
    console.log(e);
    console.log(errorMessage);
  } finally {
    await filehandle?.close();
    console.log(`You are currently in ${cwd()}`);
  }
};
