import { createReadStream } from 'node:fs';
import path from 'node:path';
import { stdout, cwd } from 'node:process';
import { errorMessage } from '../constants.js';

export const catToConsole = async ([fileName]) => {
  const filePath = path.resolve(`${cwd()}/${fileName}`);
  try {
    const stream = createReadStream(filePath, { encoding: 'utf-8' });
    stream.on('end', () => console.log(`\nYou are currently in ${cwd()}`)).pipe(stdout);
  } catch {
    console.log(errorMessage);
  }
};
