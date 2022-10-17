import { transformSlides } from './src/slides-transformer.mjs';
import fs from 'fs';
import { setTimeout } from 'timers/promises';
import { execSync, spawn } from 'child_process';

const chromiumProcess = spawn('chromium');
const terminalProcess = spawn('gnome-terminal');
const firefoxProcess = spawn('firefox', ['-P', 'demo', '--no-remote']);
const webkitProcess = spawn('epiphany');
await setTimeout(1500);
const terminalPid = Number(execSync('pgrep gnome-terminal').toString().trim().split('\n').pop());

console.log({
  chromium: chromiumProcess.pid,
  terminal: terminalPid,
  firefox: firefoxProcess.pid,
  webkit: webkitProcess.pid,
});

process.on('SIGINT', function () {
  try {
    chromiumProcess.kill();
    process.kill(terminalPid);
    firefoxProcess.kill();
    webkitProcess.kill();
  }
  catch (e) {
    console.log(e);
  }
});

const gnomeWindows = [
  { id: 'chromium', pid: chromiumProcess.pid },
  { id: 'terminal', pid: terminalPid },
  { id: 'firefox', pid: firefoxProcess.pid },
  { id: 'webkit', pid: webkitProcess.pid },
];

export default {
  port: 8080,
  hostname: '0.0.0.0',
  nodeResolve: true,
  watch: true,
  plugins: [{
    serverStart ({ fileWatcher }) {
      fileWatcher.add('*.slides.md');
    },
    serve (context) {
      if (context.path.endsWith('.slides.html')) {
        const slidesMdPath = '.' + context.path.replace(/\.slides\.html$/, '.slides.md');
        const fileContent = fs.readFileSync(slidesMdPath, 'utf8');
        return {
          type: 'html',
          body: transformSlides(fileContent, gnomeWindows),
        };
      }
    },
  }],
};
