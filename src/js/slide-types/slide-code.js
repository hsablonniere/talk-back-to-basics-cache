import { css, html } from 'lit';
import { defineSlideType } from './base.js';

const TIMELINE_REGEX = /^\* ([^:]*): (.*) (<img.*)$/;

function select (html, selector) {
  const tpl = document.createElement('template');
  tpl.innerHTML = html;
  return Array.from(tpl.content.querySelectorAll(selector));
}

defineSlideType('slide-code', {
  render ({ content, attrs }) {

    const codeBlocks = select(content, 'pre');

    return html`
      <div class="code-blocks">
        ${codeBlocks}
      </div>
    `;
  },
  // language=CSS
  styles: css`
    :host {
      position: relative;
    }

    .code-blocks {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  `,
});
