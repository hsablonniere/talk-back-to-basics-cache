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

    pre[data-lang][hide] {
      visibility: hidden;
    }

    pre[label] {
      position: relative;
      margin-top: 1rem;
      padding-top: 1.5rem;
    }

    pre[label]::before {
      content: attr(label);
      display: block;
      background-color: #333;
      color: #fff;
      position: absolute;
      top: -1rem;
      left: 1rem;
      height: 2rem;
      line-height: 2rem;
      padding: 0 0.5rem;
      border-radius: 0.25rem;
    }

    pre[data-lang="http"] .hljs-attribute {
      color: #050D9E !important;
    }
  `,
});
