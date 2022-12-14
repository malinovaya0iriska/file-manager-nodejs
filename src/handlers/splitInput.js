import { chdir, cwd } from 'node:process';
import { addFile } from '../commands/addFile.js';
import { catToConsole } from '../commands/cat.js';
import { cdHandler } from '../commands/cd.js';
import { showListContent } from '../commands/list.js';
import { renameFile } from '../commands/renameFile.js';
import { upHandler } from '../commands/up.js';

export const splitInput = (input) => {
  const [command, ...rest] = input.split(' ');
  handleEvents(command, rest);
  // console.log(`You are currently in ${cwd()}`);
};

const handleEvents = (task, params) => {
  if (params) {
    switch (task) {
      case 'cd': {
        return cdHandler([params]);
      }
      case 'cat': {
        return catToConsole([params]);
      }
      case 'add': {
        return addFile([params]);
      }
      case 'rn': {
        return renameFile(params);
      }
      default:
        console.log('Invalid input');
    }
  }
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
  console.log(`You are currently in ${cwd()}`);
};
