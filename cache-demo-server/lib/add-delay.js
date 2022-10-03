import { setTimeout } from 'node:timers/promises';

export function addDelay (delay) {
  return async () => {
    await setTimeout(500);
  };
}
