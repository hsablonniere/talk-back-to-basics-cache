import { css, html } from 'lit';
import { defineSlideType } from './base.js';
import { markup } from '../utils.mjs';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

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
      ${attrs.title != null ? html`
        <div class="title">${unsafeHTML(markup(attrs.title))}</div>
      ` : ''}
      <div class="code-blocks">
        ${codeBlocks}
      </div>
    `;
  },
  // language=CSS
  styles: css`
    :host {
      position: relative;
      display: grid;
      align-content: center;
      gap: 1rem;
      justify-content: center;
    }

    .title {
      font-family: 'Yanone Kaffeesatz', sans-serif;
      font-size: 5rem;
      font-weight: bold;
      line-height: 1.2;
      text-align: center;
      color: #000;
    }

    .title strong {
      color: #0082ff;
    }

    .underline {
      text-decoration: underline;
    }

    .code-blocks {
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
