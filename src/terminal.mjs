import { execSync } from 'child_process';

// const SCREEN = { w: 1920, h: 1080 };
// const SCREEN = { w: 2688, h: 1512 };
// const SCREEN = { w: 1792, h: 722, x: 0, y: 285 };
// const TERM = { w: 1500, h: 250 };

const DEVICE_PIXEL_RATIO = 1.5;
const MARGIN = 10;

function center (id) {

  // const x = Math.ceil((SCREEN.w - TERM.w) / 2) + SCREEN.x;
  // const y = Math.ceil((SCREEN.h - TERM.h) / 2) + SCREEN.y;

  const height = Math.ceil(290.16668701171875 * DEVICE_PIXEL_RATIO - MARGIN);
  const width = Math.ceil(1450.8333740234375 * DEVICE_PIXEL_RATIO - MARGIN);
  const x = Math.ceil(170.5833282470703 * DEVICE_PIXEL_RATIO + MARGIN / 2);
  const y = Math.ceil(501.58331298828125 * DEVICE_PIXEL_RATIO + MARGIN / 2);

  execSync(`wmctrl -ir ${id} -e 0,${x},${y},${width},${height}`);
  // execSync(`wmctrl -ir ${id} -b toggle,above`);
}

async function run () {
  console.log('terminal');
  const list = execSync('wmctrl -l', { encoding: 'utf8' });
  const windows = list
    .split('\n')
    .filter((line) => line.trim() !== '')
    .map((line) => {
      const [id, index, hostname, ...windowName] = line.split(/ +/);
      return { id, name: windowName.join(' ') };
    });
  const terminal = windows.find(({ name }) => name.startsWith('Terminal - '));
  center(terminal.id);
}

run()
  .then(console.log)
  .catch((e) => {
    process.exit(1);
    console.error(e);
  });
