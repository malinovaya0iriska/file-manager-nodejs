import { rename } from 'node:fs/promises';
import { errorMessage } from '../constants.js';
import path from 'node:path';
import { existsSync } from 'node:fs';
import { cwd } from 'node:process';

export const renameFile = async (params) => {
  try {
    const [prevFilePath, newName] = params;

    const targetDir = path.parse(prevFilePath).dir;
    const newFilePath = path.resolve(`${targetDir}${newName}`);

    if (existsSync(newFilePath)) {
      throw new Error(errorMessage);
    }

    await rename(prevFilePath, newFilePath);

    console.log(`${prevFilePath} has been renamed successfully to ${newFilePath}`);
    console.log(`You are currently in ${cwd()}`);
  } catch (error) {
    throw new Error(errorMessage);
  }
};

// rn D:\text.txt new.txt
