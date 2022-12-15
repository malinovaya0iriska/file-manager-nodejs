import { errorMessage } from '../constants.js';
import { createReadStream, createWriteStream, existsSync } from 'node:fs';
import { createBrotliDecompress } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';
import { cwd } from 'node:process';

export const decompressFile = async (params) => {
  try {
    const [fileSourcePath, pathToDestination] = params;

    const { name, ext } = path.parse(fileSourcePath);
    if (!existsSync(fileSourcePath) || ext !== '.br') {
      throw new Error(errorMessage);
    }

    const fileDestPath = path.resolve(pathToDestination, name);

    const brotliDecompress = createBrotliDecompress();
    const source = createReadStream(fileSourcePath);
    const destination = createWriteStream(fileDestPath);

    await pipeline(source, brotliDecompress, destination);

    console.log(`You are currently in ${cwd()}`);
  } catch {
    console.log(errorMessage);
  }
};
