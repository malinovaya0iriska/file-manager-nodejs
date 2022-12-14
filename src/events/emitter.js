import { EventEmitter } from 'node:events';

export const myEmitter = new EventEmitter();
myEmitter.on('cat', () => {});
