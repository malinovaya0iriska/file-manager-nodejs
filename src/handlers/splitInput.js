import { chdir, cwd } from 'node:process';
import { addFile } from '../commands/addFile.js';
import { catToConsole } from '../commands/cat.js';
import { cdHandler } from '../commands/cd.js';
import { copyFile } from '../commands/copyFile.js';
import { hashFilePath } from '../commands/hashFilePath.js';
import { showListContent } from '../commands/list.js';
import { moveFile } from '../commands/moveFile.js';
import { removeFile } from '../commands/removeFile.js';
import { renameFile } from '../commands/renameFile.js';
import { showOSInfo } from '../commands/showOSInfo.js';
import { upHandler } from '../commands/up.js';

export const splitInput = (input) => {
  const [command, ...rest] = input.split(' ');
  handleEvents(command, rest);
  // console.log(`You are currently in ${cwd()}`);
};

const handleEvents = (task, params) => {
  if (params.length) {
    switch (task) {
      case 'cd': {
        return cdHandler(params);
      }
      case 'cat': {
        return catToConsole(params);
      }
      case 'add': {
        return addFile(params);
      }
      case 'rn': {
        return renameFile(params);
      }
      case 'cp': {
        return copyFile(params);
      }
      case 'mv': {
        return moveFile(params);
      }
      case 'rm': {
        return removeFile(params);
      }
      case 'os': {
        showOSInfo(params);
        break;
      }
      case 'hash': {
        hashFilePath(params);
        break;
      }
      default:
        console.log('Invalid input');
    }
  } else {
    switch (task) {
      case 'up': {
        return upHandler();
      }
      case 'ls': {
        return showListContent();
      }

      default:
        console.log('Invalid input');
    }
  }
};
