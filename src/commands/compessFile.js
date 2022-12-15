import { errorMessage } from '../constants.js';
import { createReadStream, createWriteStream, existsSync } from 'node:fs';
import { createBrotliCompress } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';
import { cwd } from 'node:process';

export const compressFile = async (params) => {
  try {
    const [fileSourcePath, pathToDestination] = params;

    if (!existsSync(fileSourcePath)) {
      throw new Error(errorMessage);
    }

    const { base } = path.parse(fileSourcePath);
    const fileDestPath = path.resolve(pathToDestination, `${base}.br`);

    const brotliCompress = createBrotliCompress();
    const source = createReadStream(fileSourcePath);
    const destination = createWriteStream(fileDestPath);

    await pipeline(source, brotliCompress, destination);

    console.log(`You are currently in ${cwd()}`);
  } catch {
    console.log(errorMessage);
  }
};
