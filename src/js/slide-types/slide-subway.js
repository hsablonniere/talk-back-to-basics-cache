import { css, html } from 'lit';
import { defineSlideType, playMedia, stopMedia } from './base.js';

function setText (node, id, text) {
  const element = node.querySelector(id);
  if (element != null) {
    if (text.startsWith('~') && text.endsWith('~')) {
      element.style['text-decoration'] = 'line-through';
      element.textContent = text.substring(1, text.length - 1);
    }
    else {
      element.textContent = text;
    }
  }
}

function style (node, id, property, value, useParent = false) {
  const element = node.querySelector(id);
  if (element != null) {
    if (useParent) {
      element.parentNode.style[property] = value;
    }
    else {
      element.style[property] = value;
    }
  }
}

const subwaySvg = await fetch('./src/img/diagram-subway-01.svg').then((r) => r.text());
const baseTmpl = document.createElement('template');
baseTmpl.innerHTML = subwaySvg;

// reset template
for (let i = 1; i <= 10; i += 1) {
  const indexStr = String(i).padStart(2, '0');
  setText(baseTmpl.content, '#cache-' + indexStr, '');
  style(baseTmpl.content, '#cache-' + indexStr + '-dot-junction', 'opacity', 0);
  style(baseTmpl.content, '#cache-' + indexStr + '-dot-classic', 'opacity', 0);
  style(baseTmpl.content, '#cache-' + indexStr + '-dot-cross', 'opacity', 0);
  style(baseTmpl.content, '#line-segment-' + indexStr, 'stroke', '#eee');
}

const LINE_REGEX = /^(?<index>\d)(?<dot>\S+) (?<text>.*)/;

defineSlideType('slide-subway', {
  onEnter ({ pop }) {
    playMedia(pop);
  },
  onLeave (position, { pop }) {
    stopMedia(pop);
  },
  render ({ content, attrs }) {

    const svg = baseTmpl.content.cloneNode(true);

    const title = attrs.title ?? '';
    console.log(attrs.title, title);
    setText(svg, '#the-title', title);

    const isVideoStore = attrs.videostore != null;
    style(svg, '#couch-videostore-labels', 'opacity', isVideoStore ? 1 : 0);
    style(svg, '#client-server-labels', 'opacity', isVideoStore ? 0 : 1);

    const stop = attrs.stop ?? '0';
    const stopNb = Number(stop);

    for (let i = 1; i <= stopNb; i += 1) {
      const indexStr = String(i).padStart(2, '0');
      style(svg, '#line-segment-' + indexStr, 'stroke', '#fece00');
    }

    if (stopNb < 10) {
      style(svg, '#end-dot-classic', 'fill', '#eee');
    }

    if (content != null) {
      content.trim()
        .split('\n')
        .filter((line) => line.match(/^\d/))
        .forEach((line) => {

          const { index, dot, text } = LINE_REGEX.exec(line).groups ?? {};

          const indexStr = index.padStart(2, '0');
          const isDotJunction = dot.includes('*');
          const isDotClassic = dot.includes('.');
          const isDotCross = dot.includes('X');

          setText(svg, '#cache-' + indexStr, text);
          style(svg, '#cache-' + indexStr + '-dot-junction', 'opacity', isDotJunction ? 1 : 0);
          style(svg, '#cache-' + indexStr + '-dot-classic', 'opacity', isDotClassic ? 1 : 0);
          style(svg, '#cache-' + indexStr + '-dot-cross', 'opacity', isDotCross ? 1 : 0);
          if (index > stopNb) {
            style(svg, '#cache-' + indexStr + '-dot-classic', 'fill', '#eee');
            style(svg, '#cache-' + indexStr, 'opacity', 0.85, true);
          }
        });
    }

    return html`
      ${(attrs.pop != null) ? html`
        <audio id="pop" src="/src/music/pop.ogg"></audio>
      ` : ''}
      ${svg}
    `;
  },
  // language=CSS
  styles: css`
    :host {
    }

    svg {
      height: 100%;
      width: 100%;
    }
  `,
});
