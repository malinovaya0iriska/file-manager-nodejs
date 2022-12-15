import { cwd } from 'node:process';

const { createHash } = await import('node:crypto');
import { existsSync } from 'node:fs';
import { errorMessage } from '../constants.js';

export const hashFilePath = async ([filePath]) => {
  if (!existsSync(filePath)) {
    throw new Error(errorMessage);
  }
  const hashToHex = createHash('sha256').update(filePath).digest('hex');

  console.log(hashToHex);
  console.log(`You are currently in ${cwd()}`);
};
