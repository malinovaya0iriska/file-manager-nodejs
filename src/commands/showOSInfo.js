import os, { EOL } from 'node:os';
import { cwd } from 'node:process';

export const showOSInfo = ([flag]) => {
  switch (flag) {
    case '--EOL': {
      const endOfLime = JSON.stringify(EOL);
      console.log(endOfLime);
      console.log(`You are currently in ${cwd()}`);
      break;
    }
    case '--cpus': {
      const coreInfo = os.cpus();
      console.log(coreInfo);
      console.log(`You are currently in ${cwd()}`);
      break;
    }
    case '--username': {
      const { username } = os.userInfo();
      console.log(`Username is ${username}`);
      console.log(`You are currently in ${cwd()}`);
      break;
    }
    case '--homedir': {
      const homedir = os.homedir();
      console.log(`Homedir is ${homedir}`);
      console.log(`You are currently in ${cwd()}`);
      break;
    }
    case '--architecture': {
      const architecture = os.arch();
      console.log(architecture);
      console.log(`You are currently in ${cwd()}`);
      break;
    }
    default:
      console.log('Invalid input');
  }
};
