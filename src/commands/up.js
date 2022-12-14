import { chdir, cwd } from 'node:process';

export const upHandler = () => {
  chdir('..');
  console.log(`You are currently in ${cwd()}`);
};
