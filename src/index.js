import { homedir } from 'node:os';
import { argv, stdin, stdout, chdir, cwd } from 'node:process';
import * as readline from 'node:readline/promises';
import { splitInput } from './handlers/splitInput.js';

const userName =
  argv
    .find((i) => i.startsWith('--username'))
    ?.split('=')
    .pop() || 'User';

chdir(homedir());
// export let cwd = homeDir;

console.log(`Welcome to the File Manager, ${userName}`);
console.log(`You are currently in ${cwd()}`);

const rl = readline.createInterface(stdin, stdout);

rl.on('line', (input) => {
  splitInput(input);

  // console.log(`You are currently in ${cwd()}`);
})
  .on('SIGINT', () => {
    rl.close();
  })
  .on('close', () => {
    console.log(`Thank you for using File Manager, ${userName}!`);
    process.exit(0);
  });

//  node src/index.js -- --username=Ira
