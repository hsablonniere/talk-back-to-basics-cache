import { css, html } from 'lit';
import { defineSlideType } from './base.js';
import twemoji from 'twemoji';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { markup } from '../utils.mjs';

defineSlideType('slide-text', {
  render ({ content, attrs }) {

    const htmlContent = twemoji.parse(markup(content), (icon, options, variant) => {
      return '/src/emoji/' + icon + '.svg';
    });

    return html`
      <div class="text">${unsafeHTML(htmlContent)}</div>
    `;
  },
  // language=CSS
  styles: css`
    :host {
      position: relative;
      display: grid;
      align-items: center;
      justify-content: center;
    }

    .text {
      text-align: center;
      font-family: 'Yanone Kaffeesatz', sans-serif;
      font-size: 5.5rem;
      line-height: 1.25;
      font-weight: bold;
    }
    
    strong {
      color: #0082ff;
    }

    sup {
      color: #0082ff;
      font-weight: bold;
    }
    
    .underline {
      text-decoration: underline;
    }

    img {
      height: 8rem;
      margin-bottom: 1rem;
      display: block;
      width: 100%;
    }
  `,
});