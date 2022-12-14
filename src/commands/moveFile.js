import { errorMessage } from '../constants.js';
import { createReadStream, createWriteStream } from 'node:fs';
import { cwd } from 'node:process';
import path from 'node:path';
import { rm } from 'node:fs/promises';

export const moveFile = (params) => {
  try {
    const [filePath, newDirPath] = params;

    const { base } = path.parse(filePath);
    const newFilePath = path.resolve(newDirPath, base);
    const readable = createReadStream(filePath, { encoding: 'utf-8' });
    const writable = createWriteStream(newFilePath);

    readable
      .on('end', async () => {
        await rm(filePath);
        console.log(`${base} moved to ${newFilePath} successfully`);
        console.log(`You are currently in ${cwd()}`);
      })
      .pipe(writable);
  } catch (error) {
    console.log(error);
    console.log(errorMessage);
  }
};
